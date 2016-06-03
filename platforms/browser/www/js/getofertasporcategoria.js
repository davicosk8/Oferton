var serviceURL = "http://servicesphp.esy.es/";

var ofertas;

function getofertasporcategoriaid(data) {
		ofertas = data.items;
		$.each(ofertas, function(index, oferta) {
			$('#ofertasList').append(
			'<li data-icon="false">'+
				'<a href="detalleoferta.html?id='+oferta.ofertaid+'" rel="external">'+
					'<div class="imageContainer">'+
						'<img src="img/'+oferta.ofertaimagen+'"/>'+
					'</div>'+
					'<h1 id="tituloofertadelista">'+oferta.ofertanombre+'</h1>'+
					'<div class="lineaseparadora2"></div>'+
					'<h2 id="hastaofertadelista">Hasta:</h2>'+
					'<p id="fechafinofertadelista">'+oferta.ofertafechafin+'</p>'+
					'<p class="ui-li-aside">'+oferta.empresanombre+'</p>'+
				'</a>'+
			'</li>'
			);
		});
		$('#ofertasList').listview('refresh');
}


function getUrlVars() {
    var vars = [],
        hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}