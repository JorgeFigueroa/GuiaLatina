$(document).ready(function(){

	$('#localesBtn').click(function(){
		$('#NewsSection').html('Locales')
	});

	$('#latinoamericaBtn').click(function(){
		$('#NewsSection').html('Latinoamérica')
	});

	$('#espectaculosBtn').click(function(){
		$('#NewsSection').html('Gosip<br>Espectáculos');
	});

	$('#porelmundoBtn').click(function(){
		$('#NewsSection').html('Latinoaméricanos por<br>el mundo');
	});

	$('#virales').click(function(){
		$('#NewsSection'). html('Virales');
	});

	$('#subCatBtn').click(function(){
		$('#localesCat').toggleClass('d-none');
	});

});