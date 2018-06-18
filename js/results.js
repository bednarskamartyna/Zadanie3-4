$(document).ready(function() {
	var searchButton = $('.szukaj');
	function doMagic() {
		console.log('Do magic!');
	}

	searchButton.on('keypress', function(event) {
		var code = event.keyCode || event.which;

		// Enter - klawisz
		if(code == 13) {
			// Nacisnieto - nie wykonuj akcji domyslnej
			// (przeładowanie strony z przekazaniem parametru GET)
			event.preventDefault();
			doMagic();
		}

	});
	console.log('DOM CONTENT LOADED!');
});