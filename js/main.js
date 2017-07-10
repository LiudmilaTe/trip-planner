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
	$('input[name=to_country]').text(country).val(country);
	$('input[name=city]').text(city).val(city);
};

function addPricingNotes() {
	$('.plan span').empty();
	$('.plan').hide();
	
	var plan = $(this).val();
	var cost = '';
	
	if (plan == '3weeks'){
	 	cost = '$100';
	} else if (plan == '2weeks'){
	 	cost = '$50';
	} else {
		cost = '$25';
	};
	$('.plan').show();
	$('.plan span').text(cost);
	$('input[name=price]').val(cost);
}


function formSubmit(){
	var frmvalidator  = new Validator("register");
	frmvalidator.addValidation("full_name","req","Please enter your Full Name");
	frmvalidator.addValidation("email","req","Please enter your email");
	frmvalidator.addValidation("from_country","req","Please enter your country");
	frmvalidator.addValidation("to_country","req","Please enter country you want to visit");
	
	frmvalidator.addValidation("trip_type","dontselect=no");
	frmvalidator.addValidation("duration","dontselect=no");
	frmvalidator.addValidation("budget","dontselect=no");

	
};



$(document).ready(function() {
	
	$(".region").click(showTripList);
	
	$(".tour-preview").click(openTripItem);
	
	$('.request-trip').click(fullfillForm);
	
	$('select[name=duration]').change(addPricingNotes);
	
	$('.btn').click(formSubmit);
	
});



