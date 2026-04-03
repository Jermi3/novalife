import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

const statusColors = {
    new: 'bg-blue-100 text-blue-700',
    contacted: 'bg-yellow-100 text-yellow-700',
    qualified: 'bg-purple-100 text-purple-700',
    converted: 'bg-emerald-100 text-emerald-700',
    lost: 'bg-red-100 text-red-700',
};

const statuses = ['all', 'new', 'contacted', 'qualified', 'converted', 'lost'];

export const metadata = {
    title: 'Leads',
};

export default async function LeadsPage({ searchParams }) {
    const supabase = await createClient();
    const params = await searchParams;
    const statusFilter = params?.status || 'all';

    let query = supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

    if (statusFilter !== 'all') {
        query = query.eq('status', statusFilter);
    }

    const { data: leads } = await query;
    const allLeads = leads || [];

    return (
        <div>
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900">Leads</h1>
                <p className="text-gray-500 mt-1">Manage all your incoming leads.</p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 mb-6">
                {statuses.map((status) => (
                    <Link
                        key={status}
                        href={status === 'all' ? '/admin/leads' : `/admin/leads?status=${status}`}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors capitalize ${
                            statusFilter === status
                                ? 'bg-emerald-600 text-white'
                                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                        }`}
                    >
                        {status}
                    </Link>
                ))}
            </div>

            {/* Table card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                {/* Desktop table */}
                <div className="hidden md:block overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {allLeads.map((lead) => (
                                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4">
                                        <Link href={`/admin/leads/${lead.id}`} className="text-sm font-medium text-gray-900 hover:text-emerald-600">
                                            {lead.name}
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{lead.email}</td>
                                    <td className="px-6 py-4 text-sm text-gray-500">{lead.phone || '-'}</td>
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
                            {allLeads.length === 0 && (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-400">
                                        {statusFilter !== 'all'
                                            ? `No leads with status "${statusFilter}".`
                                            : 'No leads yet.'}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Mobile cards */}
                <div className="md:hidden divide-y divide-gray-100">
                    {allLeads.map((lead) => (
                        <Link key={lead.id} href={`/admin/leads/${lead.id}`} className="block px-4 py-4 hover:bg-gray-50 transition-colors">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-medium text-gray-900">{lead.name}</span>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[lead.status] || 'bg-gray-100 text-gray-700'}`}>
                                    {lead.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">{lead.email}</p>
                            <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                                {lead.phone && <span>{lead.phone}</span>}
                                <span className="capitalize">{lead.source || '-'}</span>
                                <span>{new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            </div>
                        </Link>
                    ))}
                    {allLeads.length === 0 && (
                        <div className="px-4 py-12 text-center text-gray-400">
                            {statusFilter !== 'all'
                                ? `No leads with status "${statusFilter}".`
                                : 'No leads yet.'}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
