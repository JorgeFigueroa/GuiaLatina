$(document).ready(function(){

	$('#facebookLoginBtn').click(function(){
		$('#facebookLogin').removeClass('d-none');
		$('#emailLogin').addClass('d-none');
		$('#facebookLoginBtn').addClass('border-top-0 border-left-0 border-right-0 border-bottom border-primary');
		$('#emailLoginBtn').removeClass('border-top-0 border-left-0 border-right-0 border-bottom border-primary');
	});

	$('#emailLoginBtn').click(function(){
		$('#facebookLogin').addClass('d-none');
		$('#emailLogin').removeClass('d-none');
		$('#facebookLoginBtn').removeClass('border-top-0 border-left-0 border-right-0 border-bottom border-primary');
		$('#emailLoginBtn').addClass('border-top-0 border-left-0 border-right-0 border-bottom border-primary');
	});





});