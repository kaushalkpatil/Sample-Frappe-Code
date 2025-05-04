
frappe.ui.form.on("Sales Invoice", {
    refresh: function(frm) {
        console.log("hello");
        
        cur_frm.set_query("customer", function() {
            return {
                filters: [
                    ["customer_group", "=", "Dieture Subscribers"]
                ]
            };
        });
    }
});