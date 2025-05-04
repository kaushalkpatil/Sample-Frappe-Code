# Copyright (c) 2025, kaushal and contributors
# For license information, please see license.txt

# import frappe


import frappe
from frappe import _

def execute(filters=None):
    from_date, to_date = None, None
    if filters and filters.get("date_range"):
        from_date, to_date = filters.get("date_range")

    columns = [
        _("Customer Group") + ":Data:400",
        _("Total Customers") + ":Int:400"
    ]

    query = """
        SELECT 
            customer_group AS customer_group, 
            COUNT(*) AS total_customers
        FROM 
            `tabCustomer`
        {where_clause}
        GROUP BY 
            customer_group
        ORDER BY 
            customer_group
    """

    where_clause = ""
    if from_date and to_date:
        where_clause = "WHERE creation BETWEEN %(from_date)s AND %(to_date)s"

    data = frappe.db.sql(query.format(where_clause=where_clause), {
        "from_date": from_date,
        "to_date": to_date
    }, as_dict=True)

    return columns, data
