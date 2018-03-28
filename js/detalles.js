$(document).ready(function(){

	$('#hasDropDown').click(function(){
		
		$('#dropDownItem').slideToggle('fast');
		$('#hasDropDown').toggleClass('rotate');
	});

});