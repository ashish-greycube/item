frappe.ui.form.on('Sales Invoice Item', {
	weight(frm, cdt, cdn) {
		console.log('weight',frm.doc.rate_per_kg,frm.doc.weight)
		let row = frappe.get_doc(cdt, cdn);

		if (row.rate_per_kg) {
			row.rate = (row.rate_per_kg * row.weight) / row.qty;
			frm.refresh_field('items');
		}

	},
	rate_per_kg(frm, cdt, cdn) {
		console.log('rate_per_kg',frm.doc.rate_per_kg,frm.doc.weight)
		let row = frappe.get_doc(cdt, cdn);

		if (row.weight) {
			row.rate = (row.rate_per_kg * row.weight) / row.qty;
			frm.refresh_field('items');
		}

	},
})
