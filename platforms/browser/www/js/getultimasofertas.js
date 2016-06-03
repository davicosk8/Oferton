var serviceURL = "http://servicesphp.esy.es/";

var ultimasofertas;

function getultimasofertas() {
	$.getJSON(serviceURL + 'getultimasofertas.php', function(data) {
		ultimasofertas = data.items;
		$.each(ultimasofertas, function(index, ofertas) {
			$('#ultimasofertasList').append(
			'<li data-icon="false">'+
				'<a href="detalleoferta.html?id='+ofertas.ofertaid+'" rel="external">'+
					'<div class="imageContainer">'+
						'<img src="img/'+ofertas.ofertaimagen+'"/>'+
					'</div>'+
					'<h1>'+ofertas.ofertanombre+'</h1>'+
					'<div class="lineaseparadora2"></div>'+
					'<h2>Hasta: </h2>'+
					'<p>'+ofertas.ofertafechafin+'</p>'+
					'<p class="ui-li-aside">'+ofertas.empresanombre+'</p>'+
				'</a>'+
			'</li>'
			);
		});
		$('#ultimasofertasList').listview('refresh');
	});
}



