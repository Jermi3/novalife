import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

const statusColors = {
    new: 'bg-blue-100 text-blue-700',
    contacted: 'bg-yellow-100 text-yellow-700',
    qualified: 'bg-purple-100 text-purple-700',
    converted: 'bg-emerald-100 text-emerald-700',
    lost: 'bg-red-100 text-red-700',
};

export const metadata = {
    title: 'Dashboard',
};

export default async function AdminDashboard() {
    const supabase = await createClient();

    // Get today's date boundaries in UTC
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    const todayEnd = new Date();
    todayEnd.setHours(23, 59, 59, 999);

    // Fetch counts in parallel
    const [totalRes, newTodayRes, contactedRes, convertedRes, recentRes] = await Promise.all([
        supabase.from('leads').select('*', { count: 'exact', head: true }),
        supabase
            .from('leads')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'new')
            .gte('created_at', todayStart.toISOString())
            .lte('created_at', todayEnd.toISOString()),
        supabase
            .from('leads')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'contacted'),
        supabase
            .from('leads')
            .select('*', { count: 'exact', head: true })
            .eq('status', 'converted'),
        supabase
            .from('leads')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(10),
    ]);

    const totalLeads = totalRes.count || 0;
    const newToday = newTodayRes.count || 0;
    const contacted = contactedRes.count || 0;
    const converted = convertedRes.count || 0;
    const recentLeads = recentRes.data || [];

    const stats = [
        {
            label: 'Total Leads',
            value: totalLeads,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            color: 'text-emerald-600 bg-emerald-50',
        },
        {
            label: 'New Today',
            value: newToday,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            ),
            color: 'text-blue-600 bg-blue-50',
        },
        {
            label: 'Contacted',
            value: contacted,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            color: 'text-yellow-600 bg-yellow-50',
        },
        {
            label: 'Converted',
            value: converted,
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            color: 'text-emerald-600 bg-emerald-50',
        },
    ];

    return (
        <div>
            {/* Header */}
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-500 mt-1">Welcome back. Here is your lead overview.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-medium text-gray-500">{stat.label}</span>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${stat.color}`}>
                                {stat.icon}
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Leads */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">Recent Leads</h2>
                    <Link
                        href="/admin/leads"
                        className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
                    >
                        View all
                    </Link>
                </div>

                {/* Desktop table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {recentLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <Link href={`/admin/leads/${lead.id}`} className="text-sm font-medium text-gray-900 hover:text-emerald-600">
                                            {lead.name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{lead.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500 capitalize">{lead.source || '-'}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[lead.status] || 'bg-gray-100 text-gray-700'}`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                    </td>
                                </tr>
                            ))}
                            {recentLeads.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-400">
                                        No leads yet. They will show up here when they come in.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile cards */}
                <div className="md:hidden divide-y divide-gray-100">
                    {recentLeads.map((lead) => (
                        <Link key={lead.id} href={`/admin/leads/${lead.id}`} className="block px-4 py-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-gray-900">{lead.name}</span>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[lead.status] || 'bg-gray-100 text-gray-700'}`}>
                                    {lead.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">{lead.email}</p>
                            <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                                <span className="capitalize">{lead.source || '-'}</span>
                                <span>{new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            </div>
                        </Link>
                    ))}
                    {recentLeads.length === 0 && (
                        <div className="px-4 py-12 text-center text-gray-400">
                            No leads yet. They will show up here when they come in.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
