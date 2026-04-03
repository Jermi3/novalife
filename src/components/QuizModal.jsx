'use client';

import { useState, useEffect, useCallback } from 'react';

// ── LocalStorage Persistence ────────────────────────────────────────────────

const STORAGE_KEY = 'novalife_quiz';

function saveQuizState(data) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch {}
}

function loadQuizState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function clearQuizState() {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
}

// ── Question Data ───────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id: 'goal',
    question: "What's your #1 wellness goal right now?",
    subtext: 'Pick the one that matters most to you',
    options: [
      { label: 'Lose body fat and get lean', value: 'fat_loss' },
      { label: 'Build muscle and strength', value: 'muscle' },
      { label: 'Boost energy and performance', value: 'energy' },
      { label: 'Overall health and longevity', value: 'health' },
    ],
  },
  {
    id: 'frustration',
    question: "What frustrates you most about your health right now?",
    subtext: 'Be honest — this helps us understand your situation',
    options: [
      { label: "Diets never stick — I always bounce back", value: 'diets_fail' },
      { label: "I exercise but don't see real results", value: 'no_results' },
      { label: "My energy crashes and I can't perform", value: 'energy_crash' },
      { label: "I've given up trying to figure it out alone", value: 'given_up' },
    ],
  },
  {
    id: 'exercise',
    question: 'How often do you exercise per week?',
    subtext: 'Any structured physical activity counts',
    scored: true,
    options: [
      { label: '5+ times per week', value: '5plus', points: 3 },
      { label: '3-4 times per week', value: '3to4', points: 2 },
      { label: '1-2 times per week', value: '1to2', points: 1 },
      { label: 'Rarely or never', value: 'rarely', points: 0 },
    ],
  },
  {
    id: 'nutrition',
    question: 'How would you describe your current eating habits?',
    subtext: 'No judgment — just your honest baseline',
    scored: true,
    options: [
      { label: 'Structured meal plan with tracking', value: 'structured', points: 3 },
      { label: 'Mostly healthy but inconsistent', value: 'mostly_healthy', points: 2 },
      { label: 'I eat whatever is convenient', value: 'convenient', points: 1 },
      { label: 'Fast food and irregular meals', value: 'poor', points: 0 },
    ],
  },
  {
    id: 'sleep',
    question: 'How would you rate your sleep quality?',
    subtext: 'Sleep is the foundation of recovery',
    scored: true,
    options: [
      { label: '7-8+ hours, I wake up refreshed', value: 'great', points: 3 },
      { label: '6-7 hours, sometimes tired', value: 'okay', points: 2 },
      { label: 'Under 6 hours or restless', value: 'poor', points: 1 },
      { label: 'Chronic sleep issues, always exhausted', value: 'terrible', points: 0 },
    ],
  },
  {
    id: 'habits',
    question: 'How structured is your daily wellness routine?',
    subtext: 'Consistency beats intensity every time',
    scored: true,
    options: [
      { label: 'Very structured — I follow a set routine daily', value: 'structured', points: 3 },
      { label: 'Somewhat — I try but often fall off track', value: 'somewhat', points: 2 },
      { label: 'No real routine — I do things when I feel like it', value: 'no_routine', points: 1 },
      { label: 'Completely inconsistent — no structure at all', value: 'chaotic', points: 0 },
    ],
  },
  {
    id: 'peptides',
    question: 'Are you using or interested in peptides / GLP-1s?',
    subtext: 'These can accelerate results when guided properly',
    scored: true,
    options: [
      { label: 'Yes, currently using with professional guidance', value: 'using_guided', points: 3 },
      { label: 'Using, but without professional guidance', value: 'using_unguided', points: 2 },
      { label: "Curious but haven't tried yet", value: 'curious', points: 1 },
      { label: "Not interested or not sure what they are", value: 'not_interested', points: 0 },
    ],
  },
  {
    id: 'attempts',
    question: "How many wellness programs have you tried that didn't stick?",
    subtext: 'This tells us what approach will actually work for you',
    options: [
      { label: 'None — this would be my first', value: 'none' },
      { label: '1-2 programs', value: '1to2' },
      { label: '3-5 programs', value: '3to5' },
      { label: "More than 5 — I've tried everything", value: '5plus' },
    ],
  },
  {
    id: 'investment',
    question: 'What level of investment feels right for transforming your health?',
    subtext: 'This helps us recommend the best-fit program for you',
    options: [
      { label: 'Whatever it takes to get results', value: 'premium' },
      { label: '\u20B125,000 - \u20B150,000/month', value: 'high' },
      { label: '\u20B110,000 - \u20B125,000/month', value: 'mid' },
      { label: 'Under \u20B110,000/month', value: 'starter' },
    ],
  },
];

const TIERS = {
  foundation: {
    key: 'foundation',
    name: 'Foundation Builder',
    tagline: 'Your transformation starts here',
    description:
      "You have significant room for improvement across multiple areas. The good news? That means you'll see the most dramatic results with the right system in place.",
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    recommendation:
      'Our complete 5-Pillar System is designed exactly for your situation — RND-led nutrition, performance training, recovery protocols, habit engineering, and longevity integration all working together.',
  },
  optimizer: {
    key: 'optimizer',
    name: 'Performance Optimizer',
    tagline: "You've built a base — now it's time to break through",
    description:
      "You're doing some things right, but missing key pieces that would accelerate your results. A targeted approach on your weak areas will unlock the next level.",
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    recommendation:
      'A targeted coaching program focusing on your weakest pillars will produce rapid, compounding improvements. Coach Larry will build a protocol around the specific gaps your score revealed.',
  },
  peak: {
    key: 'peak',
    name: 'Peak Performer',
    tagline: "You're already ahead — let's optimize further",
    description:
      'Your wellness foundation is solid. You\'re ready for advanced protocols and fine-tuning that most people aren\'t prepared for yet.',
    color: 'from-emerald-500 to-lime-500',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    recommendation:
      'Our premium 1:1 coaching with advanced longevity protocols, periodized training, and elite-level optimization across all 5 pillars will take you from good to exceptional.',
  },
};

// ── Helpers ──────────────────────────────────────────────────────────────────

function calculateScore(answers) {
  const scored = QUESTIONS.filter((q) => q.scored);
  let total = 0;
  for (const q of scored) {
    const selected = q.options.find((o) => o.value === answers[q.id]);
    if (selected) total += selected.points;
  }
  return Math.round((total / (scored.length * 3)) * 100);
}

function getTier(score) {
  if (score <= 40) return TIERS.foundation;
  if (score <= 65) return TIERS.optimizer;
  return TIERS.peak;
}

function getPillarScores(answers) {
  const pillars = [
    { id: 'nutrition', label: 'Nutrition (RND-Led)' },
    { id: 'exercise', label: 'Performance Training' },
    { id: 'sleep', label: 'Recovery' },
    { id: 'habits', label: 'Habit Engineering' },
    { id: 'peptides', label: 'Longevity Integration' },
  ];
  return pillars.map((p) => {
    const q = QUESTIONS.find((q) => q.id === p.id);
    const selected = q.options.find((o) => o.value === answers[p.id]);
    return { ...p, score: selected ? selected.points : 0, max: 3 };
  });
}

function getInsights(answers, pillarScores) {
  const sorted = [...pillarScores].sort((a, b) => a.score - b.score);
  const weakest = sorted[0];
  const secondWeakest = sorted[1];
  const insights = [];

  // ── Insight 1: Cross-reference weakest pillar + frustration answer ──
  // 20 possible combos (5 pillars x 4 frustrations), 12 explicit + fallbacks
  const crossRef = {
    'sleep+energy_crash':
      "You said your energy crashes — and Recovery is your lowest pillar. These are directly connected. Poor sleep destroys energy, fat loss, and cognitive performance. Fixing this one area could transform everything else.",
    'sleep+diets_fail':
      "Diets haven't stuck partly because your Recovery score is low. Poor sleep increases hunger hormones by up to 30% and destroys willpower. Sleep is the hidden saboteur of every diet.",
    'exercise+no_results':
      "You're exercising but not seeing results, and your Performance Training score confirms why. Effort without structured, progressive programming is wasted energy. A protocol designed for your body changes the equation.",
    'exercise+given_up':
      "You've felt like giving up, and your Training score shows you haven't had proper guidance. Random workouts without progressive overload don't produce visible results — which kills motivation. A structured plan fixes both.",
    'nutrition+diets_fail':
      "Diets haven't stuck because they were isolated solutions. Your Nutrition score shows the gap — you need an RND-designed framework that works with your metabolism, not another generic meal plan.",
    'nutrition+energy_crash':
      "Your energy crashes are likely tied to your Nutrition score. Blood sugar instability from irregular eating patterns directly causes the afternoon wall. Structured nutrition timing can eliminate this.",
    'habits+given_up':
      "You've felt like giving up because nothing sticks — and your Habit Engineering score reveals why. Without behavioral systems and accountability structures, even the best program fails. This is fixable.",
    'habits+no_results':
      "You're putting in effort but not seeing results, and your Habit Engineering score explains why. Inconsistency undermines even the best protocol. Behavioral systems and accountability change this.",
    'habits+diets_fail':
      "Diets haven't stuck because your Habit Engineering score is low. It's not about willpower — it's about systems. Routine design and accountability structures make consistency automatic.",
    'peptides+energy_crash':
      "Your energy issues combined with a low Longevity Integration score suggest you could benefit significantly from guided peptide and hormonal optimization — but only as part of a complete system.",
    'peptides+no_results':
      "Not seeing results could be a sign you're missing the longevity layer. Your Longevity Integration score shows room for advanced protocols that amplify everything else you're already doing.",
    'nutrition+no_results':
      "You're working out but not seeing results — and your Nutrition score reveals the bottleneck. Training without proper nutrition is like building without materials. An RND-designed plan changes the output.",
  };

  const crossKey = `${weakest.id}+${answers.frustration}`;
  if (crossRef[crossKey]) {
    insights.push(crossRef[crossKey]);
  } else {
    // Fallback: generic weakest pillar insight
    const fallback = {
      exercise:
        'Your Performance Training score is your biggest gap. Random workouts without progressive overload and periodization will keep you stuck. A structured, personalized program changes everything.',
      nutrition:
        "Nutrition is your weakest pillar. Without an RND-designed framework, even the best training won't deliver lasting results. This is where the biggest change starts.",
      sleep:
        "Recovery is holding you back. Poor sleep undermines your energy, training gains, and body composition — it's the hidden multiplier most people ignore.",
      habits:
        "Your Habit Engineering score is low — consistency is your biggest challenge right now. Without behavioral systems and accountability, even the best plan falls apart within weeks.",
      peptides:
        "Your Longevity Integration score shows room for advanced optimization. Guided peptide protocols, VO2 max training, and biological age strategies can amplify every other pillar.",
    };
    insights.push(fallback[weakest.id]);
  }

  // ── Insight 2: Compound weakness or frustration-specific ──
  if (weakest.score <= 1 && secondWeakest.score <= 1) {
    insights.push(
      `Both your ${weakest.label} and ${secondWeakest.label} scores are critically low. These pillars compound each other — improving them together creates a multiplier effect that's far more powerful than fixing one at a time.`
    );
  } else {
    const frustrationInsights = {
      diets_fail:
        "The pattern of diets failing then bouncing back isn't a willpower issue — it's a systems issue. Isolated nutrition changes without the other four pillars will always regress.",
      no_results:
        "Not seeing results despite effort means your current approach has blind spots. The 5-Pillar System ensures every piece works together so nothing undermines your progress.",
      energy_crash:
        "Persistent energy crashes indicate multiple systems are off — nutrition timing, sleep quality, stress response, and possibly hormonal factors. A single fix won't solve a multi-pillar problem.",
      given_up:
        "Feeling like you've exhausted your options is actually a sign you're ready for the right approach. Every client who transforms with us felt the exact same way before their breakthrough.",
    };
    insights.push(frustrationInsights[answers.frustration]);
  }

  // ── Insight 3: Goal-specific recommendation ──
  const goalInsights = {
    fat_loss:
      "For your fat loss goal, most people focus only on diet or cardio. Your scores show you need a systems approach — nutrition timing, resistance training, recovery, habit engineering, and metabolic support all working in sync.",
    muscle:
      "Building muscle as a busy professional requires precision — the right training stimulus, protein timing, quality recovery, consistent habits, and hormonal support. Your scores reveal exactly which pieces need attention.",
    energy:
      "Sustained energy isn't about more coffee or supplements. It's about sleep quality, nutrition timing, stress management, and daily routines — multiple pillars working together. Your weakest areas are the first place to look.",
    health:
      "Longevity isn't about doing one thing well — it's about optimizing all 5 pillars. Your scores show exactly where to focus for the biggest impact on your healthspan and daily performance.",
  };
  insights.push(goalInsights[answers.goal]);

  return insights.slice(0, 3);
}

// ── Score Ring SVG ──────────────────────────────────────────────────────────

function ScoreRing({ score, size = 176 }) {
  const r = 42;
  const circumference = 2 * Math.PI * r;
  const filled = (score / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          stroke="url(#score-ring-grad)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${circumference}`}
          className="transition-all duration-100"
        />
        <defs>
          <linearGradient id="score-ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#84CC16" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-4xl font-bold text-gray-900">{score}</span>
        <span className="text-sm text-gray-400">out of 100</span>
      </div>
    </div>
  );
}

// ── Main Component ──────────────────────────────────────────────────────────

export default function QuizModal({ isOpen, onClose }) {
  const [phase, setPhase] = useState('questions');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [animatedScore, setAnimatedScore] = useState(0);
  const [tier, setTier] = useState(null);
  const [contact, setContact] = useState({ name: '', email: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [booked, setBooked] = useState(false);

  // Restore saved quiz state when modal opens
  useEffect(() => {
    if (isOpen) {
      const saved = loadQuizState();
      if (saved) {
        setAnswers(saved.answers);
        setScore(saved.score);
        setTier(getTier(saved.score));
        setBooked(saved.booked || false);
        setAnimatedScore(saved.score);
        setPhase('result');
      }
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Calculating → score reveal
  useEffect(() => {
    if (phase === 'calculating') {
      const timer = setTimeout(() => {
        const s = calculateScore(answers);
        setScore(s);
        setTier(getTier(s));
        setPhase('score');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [phase, answers]);

  // Animate score count-up
  useEffect(() => {
    if (phase === 'score') {
      let current = 0;
      const target = score;
      const steps = 50;
      const increment = target / steps;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setAnimatedScore(target);
          clearInterval(timer);
        } else {
          setAnimatedScore(Math.round(current));
        }
      }, 30);
      return () => clearInterval(timer);
    }
  }, [phase, score]);

  function handleAnswer(value) {
    const questionId = QUESTIONS[step].id;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    setTimeout(() => {
      if (step < QUESTIONS.length - 1) {
        setStep(step + 1);
      } else {
        setPhase('calculating');
      }
    }, 300);
  }

  function handleBack() {
    if (step > 0) setStep(step - 1);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!contact.email) return;

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contact.name,
          email: contact.email,
          phone: contact.phone || null,
          source: 'quiz',
          quiz_answers: answers,
          quiz_score: score,
          quiz_tier: tier.name,
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      setStatus('success');
      setPhase('result');
      saveQuizState({ answers, score, tier: tier.name, booked: false });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message);
    }
  }

  function handleBook() {
    setBooked(true);
    const saved = loadQuizState();
    if (saved) saveQuizState({ ...saved, booked: true });
  }

  function handleRetake() {
    clearQuizState();
    setPhase('questions');
    setStep(0);
    setAnswers({});
    setScore(0);
    setAnimatedScore(0);
    setTier(null);
    setContact({ name: '', email: '', phone: '' });
    setStatus('idle');
    setErrorMsg('');
    setBooked(false);
  }

  function handleClose() {
    onClose();
    // Only reset in-progress state (not completed quizzes — those live in localStorage)
    const saved = loadQuizState();
    if (!saved) {
      setTimeout(() => {
        setPhase('questions');
        setStep(0);
        setAnswers({});
        setScore(0);
        setAnimatedScore(0);
        setTier(null);
        setContact({ name: '', email: '', phone: '' });
        setStatus('idle');
        setErrorMsg('');
        setBooked(false);
      }, 300);
    }
  }

  if (!isOpen) return null;

  const currentQuestion = QUESTIONS[step];
  const progress = ((step + 1) / QUESTIONS.length) * 100;
  const pillarScores = phase === 'result' ? getPillarScores(answers) : [];
  const insights = phase === 'result' ? getInsights(answers, pillarScores) : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors z-20"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Progress bar — questions phase only */}
        {phase === 'questions' && (
          <div className="h-1.5 bg-gray-100 flex-shrink-0">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-lime-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {/* ── QUESTIONS ── */}
          {phase === 'questions' && (
            <div className="p-6 md:p-8" key={`q-${step}`}>
              {/* Step header */}
              <div className="flex items-center gap-3 mb-8">
                {step > 0 && (
                  <button
                    onClick={handleBack}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                )}
                <span className="text-sm text-gray-400 font-medium">
                  Question {step + 1} of {QUESTIONS.length}
                </span>
              </div>

              {/* Question content */}
              <div className="animate-slideIn">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentQuestion.question}</h3>
                <p className="text-gray-500 mb-8">{currentQuestion.subtext}</p>

                <div className="space-y-3">
                  {currentQuestion.options.map((option) => {
                    const isSelected = answers[currentQuestion.id] === option.value;
                    return (
                      <button
                        key={option.value}
                        onClick={() => handleAnswer(option.value)}
                        className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                          isSelected
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50 text-gray-700'
                        }`}
                      >
                        <span className="font-medium">{option.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {step === 0 && (
                <p className="text-center text-sm text-gray-400 mt-8">Takes about 2 minutes</p>
              )}
            </div>
          )}

          {/* ── CALCULATING ── */}
          {phase === 'calculating' && (
            <div className="p-8 flex flex-col items-center justify-center min-h-[400px]">
              <div className="relative w-24 h-24 mb-8">
                <svg className="w-full h-full animate-spin" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="url(#calc-grad)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="80 200"
                  />
                  <defs>
                    <linearGradient id="calc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#84CC16" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Analyzing your responses...</h3>
              <p className="text-gray-500 text-center">Building your personalized wellness profile</p>
            </div>
          )}

          {/* ── SCORE REVEAL ── */}
          {phase === 'score' && tier && (
            <div className="p-8 flex flex-col items-center justify-center min-h-[400px] animate-fadeInUp">
              <ScoreRing score={animatedScore} />

              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-1">Your Executive Wellness Score</h3>

              <div
                className={`inline-flex items-center gap-2 ${tier.bgColor} ${tier.textColor} px-4 py-1.5 rounded-full text-sm font-medium mt-3 mb-6`}
              >
                {tier.name}
              </div>

              <p className="text-gray-500 text-center mb-8 max-w-sm">
                Enter your details to unlock your full Executive Performance Blueprint with personalized recommendations.
              </p>

              <button
                onClick={() => setPhase('capture')}
                className="btn-gradient text-white px-8 py-4 rounded-full font-semibold text-lg"
              >
                Get My Results
              </button>
            </div>
          )}

          {/* ── EMAIL CAPTURE ── */}
          {phase === 'capture' && (
            <div className="p-6 md:p-8 animate-fadeInUp">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Blueprint is Ready</h3>
                <p className="text-gray-500">
                  Enter your details to see your full results and personalized recommendations.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="quiz-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    id="quiz-name"
                    type="text"
                    value={contact.name}
                    onChange={(e) => setContact((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Juan Dela Cruz"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="quiz-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="quiz-email"
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact((p) => ({ ...p, email: e.target.value }))}
                    placeholder="you@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="quiz-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    id="quiz-phone"
                    type="tel"
                    value={contact.phone}
                    onChange={(e) => setContact((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="+63 917 123 4567"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-600 text-sm bg-red-50 px-4 py-2 rounded-lg">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full btn-gradient text-white py-4 rounded-full font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Unlocking...' : 'See My Full Results'}
                </button>

                <p className="text-center text-xs text-gray-400">
                  Your data is private. We never share your health information.
                </p>
              </form>
            </div>
          )}

          {/* ── FULL RESULTS ── */}
          {phase === 'result' && tier && (
            <div className="animate-fadeInUp">
              {/* Gradient header */}
              <div className={`bg-gradient-to-r ${tier.color} px-6 md:px-8 py-6 text-white`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm font-medium mb-1">Your Score</p>
                    <p className="text-3xl font-bold">{score}/100</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-sm font-medium mb-1">Your Type</p>
                    <p className="text-lg font-bold">{tier.name}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* Tier description */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{tier.tagline}</h3>
                  <p className="text-gray-600 leading-relaxed">{tier.description}</p>
                </div>

                {/* Pillar breakdown */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                    Your Pillar Breakdown
                  </h4>
                  <div className="space-y-4">
                    {pillarScores.map((pillar) => (
                      <div key={pillar.id}>
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-sm font-medium text-gray-700">{pillar.label}</span>
                          <span className="text-sm font-bold text-gray-900">
                            {pillar.score}/{pillar.max}
                          </span>
                        </div>
                        <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-lime-500 transition-all duration-700"
                            style={{ width: `${(pillar.score / pillar.max) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Insights */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                    Personalized Insights
                  </h4>
                  <div className="space-y-3">
                    {insights.map((insight, i) => (
                      <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center mt-0.5">
                          <svg
                            className="w-3.5 h-3.5 text-emerald-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{insight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendation */}
                <div className={`${tier.bgColor} rounded-2xl p-5 mb-8`}>
                  <h4 className={`font-semibold ${tier.textColor} mb-2`}>Our Recommendation</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{tier.recommendation}</p>
                </div>

                {/* CTA */}
                <div className="text-center">
                  {!booked ? (
                    <>
                      <button
                        onClick={handleBook}
                        className="w-full btn-gradient text-white py-4 rounded-full font-semibold text-lg mb-3"
                      >
                        Book My Free Consultation
                      </button>
                      <p className="text-sm text-gray-500">
                        Coach Larry will create a custom protocol based on your results.
                      </p>
                    </>
                  ) : (
                    <div className="bg-emerald-50 rounded-2xl p-6">
                      <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-3">
                        <svg
                          className="w-7 h-7 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">You&apos;re All Set!</h4>
                      <p className="text-gray-600 text-sm mb-4">
                        Coach Larry will reach out within 24 hours with a personalized plan based on your{' '}
                        {score}/100 score.
                      </p>
                      <button
                        onClick={handleClose}
                        className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  )}

                  <button
                    onClick={handleRetake}
                    className="text-sm text-gray-400 hover:text-gray-600 transition-colors mt-6"
                  >
                    Retake Assessment
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
