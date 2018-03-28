$(document).ready(function() {
	
	$('#rootwizard').bootstrapWizard();
	$('#rootwizard2').bootstrapWizard();
	$('#rootwizard3').bootstrapWizard();
	$('#rootwizard4').bootstrapWizard();

	$('#hasDropDown').click(function(){
		$('#dropDownItem').slideToggle('slow');
	});

	$('#closeItemBtn').click(function(){
		$('#dropDownItem').slideUp('slow');
	});

	$('#hasDropDown2').click(function(){
		$('#dropDownItem2').slideToggle('slow');
	});
	
	$('#closeItemBtn2').click(function(){
		$('#dropDownItem2').slideUp('slow');
	});

	$('#hasDropDown3').click(function(){
		$('#dropDownItem3').slideToggle('slow');
	});
	
	$('#closeItemBtn3').click(function(){
		$('#dropDownItem3').slideUp('slow');
	});

	$('#hasDropDown4').click(function(){
		$('#dropDownItem4').slideToggle('slow');
	});
	
	$('#closeItemBtn4').click(function(){
		$('#dropDownItem4').slideUp('slow');
	});


});