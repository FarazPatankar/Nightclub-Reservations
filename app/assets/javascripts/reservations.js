// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).on("ready", function(){
	$('.datepicker').pickadate();

	$('.timepicker').timepicker({
		'timeFormat': 'H:i',
		'scrollDefault': 'now'
	});
})