function showTripList() {
	var region = $(this).attr("id");
	$(".list").hide();
	$("."+region).show();
};

function openTripItem(){
	var cities = $(this).attr('id');
	$('h4.modal-title').empty();
	$('.'+cities).clone().appendTo('h4.modal-title');
};

function fullfillForm() {
	var country = $(this).data('country');
	var city = $(this).data('city');
	$('input[name=country]').text(country).val(country);
	$('input[name=city]').text(city).val(city);
};

$(document).ready(function() {
	
	$(".region").click(showTripList);
	
	$(".tour-preview").click(openTripItem);
	
	$('.request-trip').click(fullfillForm);
	
});
