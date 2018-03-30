$(document).ready(function(){

	if( $(document).width() < 700 ) {

		$('#hasDropDown').click(function(){
			
			$('#dropDownItem').slideToggle('fast');
			$('#dropbtn1').toggleClass('rotate');

		});

		$('#hasDropDown2').click(function(){

			$('#dropDownItem2').slideToggle('fast');
			$('#dropbtn2').toggleClass('rotate');
			$('#promoIcon').fadeToggle('fast');

		});

		$('#hasIntDropDown2').click(function(){

			$('#intDropDown2').slideToggle('fast');
			$('#intDropBtn2').toggleClass('rotate');

		});

		$('#hasIntDropDown3').click(function(){

			$('#intDropDown3').slideToggle('fast');
			$('#intDropBtn3').toggleClass('rotate');

		});

		$('#hasIntDropDown4').click(function(){

			$('#intDropDown4').slideToggle('fast');
			$('#intDropBtn4').toggleClass('rotate');

		});

		$('#hasIntDropDown5').click(function(){

			$('#dropDownItem5').slideToggle('fast');
			$('#intDropBtn5').toggleClass('rotate');

		});

		$('#hasIntDropDown6').click(function(){

			$('#intDropDown6').slideToggle('fast');
			$('#intDropBtn6').toggleClass('rotate');

		});

		$('#hasIntDropDown7').click(function(){

			$('#intDropDown7').slideToggle('fast');
			$('#intDropBtn7').toggleClass('rotate');

		});

	}

});