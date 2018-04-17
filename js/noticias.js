$(document).ready(function(){

	$('#localesBtn').click(function(){
		$('#latinoamericaBtn, #espectaculosBtn, #latinosporBtn, #viralesBtn').removeClass('text-danger border-bottom border-danger');
		$('#localesBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Locales');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").load('https://sotod331.github.io/GuiaLatina/locales.html');

		$('#latinoamericaCat, #espectaculosCat, #porelmundoCat, #viralesCat').addClass('d-none');
		$('#localesCat').removeClass('d-none');

	});

	$('#latinoamericaBtn').click(function(){
		$('#localesBtn, #espectaculosBtn, #latinosporBtn, #viralesBtn').removeClass('text-danger border-bottom border-danger');
		$('#latinoamericaBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Latinoamérica');

		$('#localesCat, #espectaculosCat, #porelmundoCat, #viralesCat').addClass('d-none');
		$('#latinoamericaCat').removeClass('d-none');

		$('#localesCat').addClass('d-none');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").load('https://sotod331.github.io/GuiaLatina/latinoamerica.html');
	});

	$('#espectaculosBtn').click(function(){
		$('#localesBtn, #latinoamericaBtn, #latinosporBtn, #viralesBtn').removeClass('text-danger border-bottom border-danger');
		$('#espectaculosBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Gosip<br>Espectáculos');

		$('#localesCat, #latinoamericaCat, #porelmundoCat, #viralesCat').addClass('d-none');
		$('#espectaculosCat').removeClass('d-none');

		$('#localesCat').addClass('d-none');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").load('https://sotod331.github.io/GuiaLatina/gosip-espectaculos.html');
	});

	$('#latinosporBtn').click(function(){
		$('#localesBtn, #latinoamericaBtn, #espectaculosBtn, #viralesBtn').removeClass('text-danger border-bottom border-danger');
		$('#latinosporBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Latinos por<br>el mundo');

		$('#localesCat, #latinoamericaCat, #espectaculosCat, #viralesCat').addClass('d-none');
		$('#porelmundoCat').removeClass('d-none');

		$('#localesCat').addClass('d-none');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").load('https://sotod331.github.io/GuiaLatina/latinos-por-el-mundo.html');

	});

	$('#viralesBtn').click(function(){
		$('#localesBtn, #latinoamericaBtn, #espectaculosBtn, #latinosporBtn').removeClass('text-danger border-bottom border-danger');
		$('#viralesBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Virales');

		$('#localesCat, #latinoamericaCat, #espectaculosCat, #porelmundoCat').addClass('d-none');
		$('#viralesCat').removeClass('d-none');

		$('#localesCat').addClass('d-none');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").load('https://sotod331.github.io/GuiaLatina/virales.html');
	});


	// Sub-categorías

	// Locales

	$('#MilanoBTn').click(function(){
		$('#RomaBtn, #TorinoBtn, #FirenzeBtn').removeClass('text-danger border-bottom border-danger');
		$('#MilanoBTn').addClass('text-danger border-bottom border-danger');

	});

	$('#RomaBtn').click(function(){
		$('#MilanoBTn, #TorinoBtn, #FirenzeBtn').removeClass('text-danger border-bottom border-danger');
		$('#RomaBtn').addClass('text-danger border-bottom border-danger');

	});

	$('#TorinoBtn').click(function(){
		$('#MilanoBTn, #RomaBtn, #FirenzeBtn').removeClass('text-danger border-bottom border-danger');
		$('#TorinoBtn').addClass('text-danger border-bottom border-danger');

	});

	$('#FirenzeBtn').click(function(){
		$('#MilanoBTn, #RomaBtn, #TorinoBtn').removeClass('text-danger border-bottom border-danger');
		$('#FirenzeBtn').addClass('text-danger border-bottom border-danger');

	});

	// Latinoamerica

	$('#ArgentinaBtn').click(function(){
		$('#BrasilBtn, #ColombiaBtn, #EcuadorBtn').removeClass('text-danger border-bottom border-danger');
		$('#ArgentinaBtn').addClass('text-danger border-bottom border-danger');

	});

	$('#BrasilBtn').click(function(){
		$('#ArgentinaBtn, #ColombiaBtn, #EcuadorBtn').removeClass('text-danger border-bottom border-danger');
		$('#BrasilBtn').addClass('text-danger border-bottom border-danger');

	});

	$('#ColombiaBtn').click(function(){
		$('#ArgentinaBtn, #BrasilBtn, #EcuadorBtn').removeClass('text-danger border-bottom border-danger');
		$('#ColombiaBtn').addClass('text-danger border-bottom border-danger');

	});

	$('#EcuadorBtn').click(function(){
		$('#ArgentinaBtn, #BrasilBtn, #ColombiaBtn').removeClass('text-danger border-bottom border-danger');
		$('#EcuadorBtn').addClass('text-danger border-bottom border-danger');


	});

	// Gosip-Espectáculos

	$('#sportBtn').click(function(){
		$('#saludBtn, #artistasBtn').removeClass('text-danger border-bottom border-danger');
		$('#sportBtn').addClass('text-danger border-bottom border-danger');


	});

	$('#saludBtn').click(function(){
		$('#sportBtn, #artistasBtn').removeClass('text-danger border-bottom border-danger');
		$('#saludBtn').addClass('text-danger border-bottom border-danger');


	});

	$('#artistasBtn').click(function(){
		$('#sportBtn, #saludBtn').removeClass('text-danger border-bottom border-danger');
		$('#artistasBtn').addClass('text-danger border-bottom border-danger');


	});

	// Latinos por el mundo

	$('#Argentina2Btn').click(function(){
		$('#Brasil2Btn, #Colombia2Btn, #Ecuador2Btn').removeClass('text-danger border-bottom border-danger');
		$('#Argentina2Btn').addClass('text-danger border-bottom border-danger');


	});

	$('#Brasil2Btn').click(function(){
		$('#Argentina2Btn, #Colombia2Btn, #Ecuador2Btn').removeClass('text-danger border-bottom border-danger');
		$('#Brasil2Btn').addClass('text-danger border-bottom border-danger');


	});

	$('#Colombia2Btn').click(function(){
		$('#Argentina2Btn, #Brasil2Btn, #Ecuador2Btn').removeClass('text-danger border-bottom border-danger');
		$('#Colombia2Btn').addClass('text-danger border-bottom border-danger');


	});

	$('#Ecuador2Btn').click(function(){
		$('#Argentina2Btn, #Brasil2Btn, #Colombia2Btn').removeClass('text-danger border-bottom border-danger');
		$('#Ecuador2Btn').addClass('text-danger border-bottom border-danger');


	});



});