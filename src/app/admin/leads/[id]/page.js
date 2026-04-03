'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/client';
import { updateLeadStatus, addLeadNote } from '@/app/admin/actions';

const statusColors = {
    new: 'bg-blue-100 text-blue-700',
    contacted: 'bg-yellow-100 text-yellow-700',
    qualified: 'bg-purple-100 text-purple-700',
    converted: 'bg-emerald-100 text-emerald-700',
    lost: 'bg-red-100 text-red-700',
};

const statusFlow = ['new', 'contacted', 'qualified', 'converted', 'lost'];

export default function LeadDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const supabase = createClient();

    const [lead, setLead] = useState(null);
    const [notes, setNotes] = useState([]);
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    const [newNote, setNewNote] = useState('');
    const [statusNote, setStatusNote] = useState('');
    const [saving, setSaving] = useState(false);

    const fetchLead = useCallback(async () => {
        const [leadRes, notesRes, historyRes] = await Promise.all([
            supabase.from('leads').select('*').eq('id', id).single(),
            supabase.from('lead_notes').select('*').eq('lead_id', id).order('created_at', { ascending: false }),
            supabase.from('lead_status_history').select('*').eq('lead_id', id).order('created_at', { ascending: false }),
        ]);

        if (leadRes.data) setLead(leadRes.data);
        setNotes(notesRes.data || []);
        setHistory(historyRes.data || []);
        setLoading(false);
    }, [id, supabase]);

    useEffect(() => {
        fetchLead();
    }, [fetchLead]);

    async function handleStatusChange(newStatus) {
        if (newStatus === lead.status) return;
        setSaving(true);
        const result = await updateLeadStatus(id, newStatus, statusNote || `Status changed to ${newStatus}`);
        if (!result.error) {
            setStatusNote('');
            await fetchLead();
        }
        setSaving(false);
    }

    async function handleAddNote(e) {
        e.preventDefault();
        if (!newNote.trim()) return;
        setSaving(true);
        const result = await addLeadNote(id, newNote.trim());
        if (!result.error) {
            setNewNote('');
            await fetchLead();
        }
        setSaving(false);
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center py-20">
                <div className="w-8 h-8 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin" />
            </div>
        );
    }

    if (!lead) {
        return (
            <div className="text-center py-20">
                <p className="text-gray-500 mb-4">Lead not found.</p>
                <Link href="/admin/leads" className="text-emerald-600 hover:text-emerald-700 font-medium">
                    Back to Leads
                </Link>
            </div>
        );
    }

    return (
        <div>
            {/* Back link */}
            <Link href="/admin/leads" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Leads
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left column — lead info + status */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Lead info card */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h1 className="text-xl font-bold text-gray-900">{lead.name || 'No name'}</h1>
                                <p className="text-sm text-gray-500 mt-0.5">
                                    Submitted {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}
                                </p>
                            </div>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium capitalize ${statusColors[lead.status] || 'bg-gray-100 text-gray-700'}`}>
                                {lead.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Email</label>
                                <a href={`mailto:${lead.email}`} className="text-sm text-emerald-600 hover:text-emerald-700">{lead.email}</a>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Phone</label>
                                {lead.phone ? (
                                    <a href={`tel:${lead.phone}`} className="text-sm text-emerald-600 hover:text-emerald-700">{lead.phone}</a>
                                ) : (
                                    <span className="text-sm text-gray-400">Not provided</span>
                                )}
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Source</label>
                                <span className="text-sm text-gray-700 capitalize">{lead.source || '-'}</span>
                            </div>
                        </div>

                        {lead.message && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                                <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">Message</label>
                                <p className="text-sm text-gray-700 whitespace-pre-wrap">{lead.message}</p>
                            </div>
                        )}
                    </div>

                    {/* Status management */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <h2 className="text-base font-semibold text-gray-900 mb-4">Update Status</h2>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {statusFlow.map((status) => (
                                <button
                                    key={status}
                                    onClick={() => handleStatusChange(status)}
                                    disabled={saving || status === lead.status}
                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors capitalize ${
                                        status === lead.status
                                            ? 'bg-emerald-600 text-white cursor-default'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50'
                                    }`}
                                >
                                    {status}
                                </button>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={statusNote}
                            onChange={(e) => setStatusNote(e.target.value)}
                            placeholder="Optional note for status change..."
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20"
                        />
                    </div>

                    {/* Add note */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <h2 className="text-base font-semibold text-gray-900 mb-4">Add Note</h2>
                        <form onSubmit={handleAddNote} className="space-y-3">
                            <textarea
                                value={newNote}
                                onChange={(e) => setNewNote(e.target.value)}
                                rows={3}
                                placeholder="Write a note about this lead..."
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 resize-none"
                            />
                            <button
                                type="submit"
                                disabled={saving || !newNote.trim()}
                                className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50"
                            >
                                {saving ? 'Saving...' : 'Add Note'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right column — timeline */}
                <div className="space-y-6">
                    {/* Notes */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <h2 className="text-base font-semibold text-gray-900 mb-4">Notes</h2>
                        {notes.length === 0 ? (
                            <p className="text-sm text-gray-400">No notes yet.</p>
                        ) : (
                            <div className="space-y-4">
                                {notes.map((note) => (
                                    <div key={note.id} className="border-l-2 border-emerald-200 pl-3">
                                        <p className="text-sm text-gray-700">{note.note}</p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            {new Date(note.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Status history */}
                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                        <h2 className="text-base font-semibold text-gray-900 mb-4">Status History</h2>
                        {history.length === 0 ? (
                            <p className="text-sm text-gray-400">No status changes yet.</p>
                        ) : (
                            <div className="space-y-3">
                                {history.map((entry) => (
                                    <div key={entry.id} className="flex items-start gap-3">
                                        <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${statusColors[entry.status]?.split(' ')[0] || 'bg-gray-200'}`} />
                                        <div>
                                            <p className="text-sm text-gray-700">
                                                Changed to <span className="font-medium capitalize">{entry.status}</span>
                                            </p>
                                            {entry.note && <p className="text-xs text-gray-500 mt-0.5">{entry.note}</p>}
                                            <p className="text-xs text-gray-400 mt-0.5">
                                                {new Date(entry.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
