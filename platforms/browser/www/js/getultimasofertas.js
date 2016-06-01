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
					'<h4 id="tituloofertadelista">'+ofertas.ofertanombre+'</h4>'+
					'<h6 id="hastaofertadelista">Hasta:</h6>'+
					'<p id="fechafinofertadelista">'+ofertas.ofertafechafin+'</p>'+
					'<p class="ui-li-aside">'+ofertas.empresanombre+'</p>'+
				'</a>'+
			'</li>'
			);
		});
		$('#ultimasofertasList').listview('refresh');
	});
}



