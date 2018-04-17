$(document).ready(function(){

	$('#localesBtn').click(function(){
		$('#latinoamericaBtn, #espectaculosBtn, #latinosporBtn, #viralesBtn').removeClass('text-danger border-bottom border-danger');
		$('#localesBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Locales');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").stop(true, true).delay(1000).load('https://sotod331.github.io/GuiaLatina/locales.html');
	});

	$('#latinoamericaBtn').click(function(){
		$('#localesBtn, #espectaculosBtn, #latinosporBtn, #viralesBtn').removeClass('text-danger border-bottom border-danger');
		$('#latinoamericaBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Latinoamérica');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").stop(true, true).delay(1000).load('https://sotod331.github.io/GuiaLatina/latinoamerica.html');
	});

	$('#espectaculosBtn').click(function(){
		$('#localesBtn, #latinoamericaBtn, #latinosporBtn, #viralesBtn').removeClass('text-danger border-bottom border-danger');
		$('#espectaculosBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Gosip<br>Espectáculos');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").stop(true, true).delay(1000).load('https://sotod331.github.io/GuiaLatina/gosip-espectaculos.html');
	});

	$('#latinosporBtn').click(function(){
		$('#localesBtn, #latinoamericaBtn, #espectaculosBtn, #viralesBtn').removeClass('text-danger border-bottom border-danger');
		$('#latinosporBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Latinos por<br>el mundo');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").stop(true, true).delay(1000).load('https://sotod331.github.io/GuiaLatina/latinos-por-el-mundo.html');

	});

	$('#viralesBtn').click(function(){
		$('#localesBtn, #latinoamericaBtn, #espectaculosBtn, #latinosporBtn').removeClass('text-danger border-bottom border-danger');
		$('#viralesBtn').addClass('text-danger border-bottom border-danger');
		$('#NewsSection').html('Virales');

		$('#sectionContent').html("<div class='text-center'><img src='img/loader.gif' width='60' /></div>").stop(true, true).delay(1000).load('https://sotod331.github.io/GuiaLatina/virales.html');
	});

});