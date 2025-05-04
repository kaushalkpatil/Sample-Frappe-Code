import frappe

@frappe.whitelist()
def get_last_purchase_invoice_rates(item_code):
    data = frappe.db.sql("""
        SELECT pii.rate, pii.parent, pi.posting_date
        FROM `tabPurchase Invoice Item` pii
        JOIN `tabPurchase Invoice` pi ON pi.name = pii.parent
        WHERE pii.item_code = %s AND pi.docstatus = 1
        ORDER BY pii.creation DESC
        LIMIT 3
    """, (item_code,), as_dict=True)
    return data
