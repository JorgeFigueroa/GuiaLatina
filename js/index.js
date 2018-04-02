$(document).ready(function(){

	$('#hasDropDown').click(function(){

		$('#Dropdown1').slideUp('fast');
		$('#DropBtn1').removeClass('rotate-angle-icon');
		$('#Dropdown2').slideUp('fast');
		$('#DropBtn2').removeClass('rotate-angle-icon');
		$('#Dropdown3').slideUp('fast');
		$('#DropBtn3').removeClass('rotate-angle-icon');
		$('#Dropdown4').slideUp('fast');
		$('#DropBtn4').removeClass('rotate-angle-icon');

		$('#Dropdown').slideToggle('fast');
		$('#DropBtn').toggleClass('rotate-angle-icon');

	});

	$('#hasDropDown1').click(function(){

		$('#Dropdown').slideUp('fast');
		$('#DropBtn').removeClass('rotate-angle-icon');
		$('#Dropdown2').slideUp('fast');
		$('#DropBtn2').removeClass('rotate-angle-icon');
		$('#Dropdown3').slideUp('fast');
		$('#DropBtn3').removeClass('rotate-angle-icon');
		$('#Dropdown4').slideUp('fast');
		$('#DropBtn4').removeClass('rotate-angle-icon');


		$('#Dropdown1').slideToggle('fast');
		$('#DropBtn1').toggleClass('rotate-angle-icon');

	});

	$('#hasDropDown2').click(function(){

		$('#Dropdown').slideUp('fast');
		$('#DropBtn').removeClass('rotate-angle-icon');
		$('#Dropdown1').slideUp('fast');
		$('#DropBtn1').removeClass('rotate-angle-icon');
		$('#Dropdown3').slideUp('fast');
		$('#DropBtn3').removeClass('rotate-angle-icon');
		$('#Dropdown4').slideUp('fast');
		$('#DropBtn4').removeClass('rotate-angle-icon');

		$('#Dropdown2').slideToggle('fast');
		$('#DropBtn2').toggleClass('rotate-angle-icon');

	});

	$('#hasDropDown3').click(function(){

		$('#Dropdown').slideUp('fast');
		$('#DropBtn').removeClass('rotate-angle-icon');
		$('#Dropdown1').slideUp('fast');
		$('#DropBtn1').removeClass('rotate-angle-icon');
		$('#Dropdown2').slideUp('fast');
		$('#DropBtn2').removeClass('rotate-angle-icon');
		$('#Dropdown4').slideUp('fast');
		$('#DropBtn4').removeClass('rotate-angle-icon');

		$('#Dropdown3').slideToggle('fast');
		$('#DropBtn3').toggleClass('rotate-angle-icon');

	});

	$('#hasDropDown4').click(function(){

		$('#Dropdown').slideUp('fast');
		$('#DropBtn').removeClass('rotate-angle-icon');
		$('#Dropdown1').slideUp('fast');
		$('#DropBtn1').removeClass('rotate-angle-icon');
		$('#Dropdown2').slideUp('fast');
		$('#DropBtn2').removeClass('rotate-angle-icon');
		$('#Dropdown3').slideUp('fast');
		$('#DropBtn3').removeClass('rotate-angle-icon');

		$('#Dropdown4').slideToggle('fast');
		$('#DropBtn4').toggleClass('rotate-angle-icon');

	});

});