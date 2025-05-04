frappe.ui.form.on('Purchase Invoice Item', {
    item_code: function(frm, cdt, cdn) {
        const row = locals[cdt][cdn];

        if (!row.item_code) return;

        frappe.call({
            method: "sample_app.public.py.purchase_invoice.get_last_purchase_invoice_rates",
            args: {
                item_code: row.item_code
            },
            callback: function(r) {
                if (r.message) {
                    const rates = r.message.map(i => i.rate || 0);
                    frappe.model.set_value(cdt, cdn, 'custom_last_rate_1', rates[0] || 0);
                    frappe.model.set_value(cdt, cdn, 'custom_last_rate_2', rates[1] || 0);
                    frappe.model.set_value(cdt, cdn, 'custom_last_rate_3', rates[2] || 0);
                    frm.refresh_field('items');
                }
            }
        });
    }
});
