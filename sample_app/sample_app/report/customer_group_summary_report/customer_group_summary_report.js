// Copyright (c) 2025, kaushal and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Customer Group Summary Report"] = {
    "filters": [
        {
            "fieldname": "date_range",
            "label": __("Date Range"),
            "fieldtype": "DateRange",
            "default": [
                frappe.datetime.add_days(frappe.datetime.nowdate(), -30),
                frappe.datetime.nowdate()
            ]
        }
    ],
    "onload": function(report) {
        console.log("Customer Group Summary Report loaded");
    }
};
