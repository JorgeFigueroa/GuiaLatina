$(document).ready(function() {
	
	$('#rootwizard').bootstrapWizard();
	$('#rootwizard2').bootstrapWizard();
	$('#rootwizard3').bootstrapWizard();
	$('#rootwizard4').bootstrapWizard();

	$('#hasDropDown').click(function(){
		$('#dropDownItem').slideToggle('slow');
	});

	$('#hasDropDownPromo, #hasDropDownEvento').click(function(){
		$('#dropDownItem').slideDown('slow');
	});

	$('#closeItemBtn').click(function(){
		$('#dropDownItem').slideUp('slow');
	});

	$('#hasDropDown2').click(function(){
		$('#dropDownItem2').slideToggle('slow');
	});

	$('#hasDropDownPromo2, #hasDropDownEvento2').click(function(){
		$('#dropDownItem2').slideDown('slow');
	});
	
	$('#closeItemBtn2').click(function(){
		$('#dropDownItem2').slideUp('slow');
	});

	$('#hasDropDown3').click(function(){
		$('#dropDownItem3').slideToggle('slow');
	});

	$('#hasDropDownPromo3, #hasDropDownEvento3').click(function(){
		$('#dropDownItem3').slideDown('slow');
	});
	
	$('#closeItemBtn3').click(function(){
		$('#dropDownItem3').slideUp('slow');
	});

	$('#hasDropDown4').click(function(){
		$('#dropDownItem4').slideToggle('slow');
	});

	$('#hasDropDownPromo4, #hasDropDownEvento4').click(function(){
		$('#dropDownItem4').slideDown('slow');
	});
	
	$('#closeItemBtn4').click(function(){
		$('#dropDownItem4').slideUp('slow');
	});

	// Menu Sub-Categorias

	$('#btnCategorias').click(function(){
		$('#categoriasMenu').css('margin-left', '0');
	});

	$('#closeCatBtn').click(function(){
		$('#categoriasMenu').css('margin-left', '-80%');
	});


});