'use server';

import { createClient } from '@/lib/supabase/server';

export async function updateLeadStatus(leadId, newStatus, note) {
    const supabase = await createClient();

    // Update the lead's status
    const { error: updateError } = await supabase
        .from('leads')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', leadId);

    if (updateError) {
        return { error: updateError.message };
    }

    // Insert into status history
    const { error: historyError } = await supabase
        .from('lead_status_history')
        .insert({
            lead_id: leadId,
            status: newStatus,
            note: note || null,
        });

    if (historyError) {
        return { error: historyError.message };
    }

    return { success: true };
}

export async function addLeadNote(leadId, note) {
    const supabase = await createClient();

    const { error } = await supabase
        .from('lead_notes')
        .insert({
            lead_id: leadId,
            note,
        });

    if (error) {
        return { error: error.message };
    }

    return { success: true };
}
