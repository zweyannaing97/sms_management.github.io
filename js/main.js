
(function($) {

	$.extend(true, $.fn.dataTable.defaults.oLanguage.oPaginate, {
		sNext: '<i class="fa fa-chevron-right text-dark" style="font-size: 18px"></i>',
		sPrevious: '<i class="fa fa-chevron-left text-dark" style="font-size: 18px"></i>'
	});
	$("#user-role-table").DataTable({
		"displayLength": 10,
		"dom": '<"top">rt<"bottom"lip><"clear">',
		"ordering": false,
		"aoColumnDefs": [
			{ "bSortable": false, "aTargets": [ 0, 1, 2, 3 ] },
			{ "bSearchable": false, "aTargets": [ 0, 1, 2, 3 ] }
		]
	});

	// $('#picker').daterangepicker({
	// 	opens: 'center',
	// 	startDate:new Date(),
	// 	maxDate: new Date(),
	// 	showDropdowns:true,
	// 	minYear:2000,
	// 	drops:'down',
	// 	locale: {
	// 		format: 'ddd-DD-MMM-YYYY'
	// 	}
	// })
	$('#picker').daterangepicker({
		minYear:2020,
		opens:'center',
		minDate: new Date('2/1/2022'),
		maxDate: new Date(),
		placeholder: "From Dtae",
		showDropdowns:true,
		locale: {
					format: 'ddd,DD-MMM-YYYY'
				}
	}, function(start, end, label) {
		console.log("New date range selected: ' + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY') + ' (predefined range: ' + label + ')");
	});





})(jQuery);


// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
	return new bootstrap.Tooltip(tooltipTriggerEl)
})
//end of tooltips js




