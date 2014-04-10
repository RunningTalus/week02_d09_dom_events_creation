// $('#test');
// $('#test').append('APPEND makes content render AFTER element ID or CLASS specified');

// $('#test').prepend('PREPEND makes content render BEFORE element ID or CLASS specified');

// $('#test');
// $('#test').append('<li>This is from jQuery-create items in the DOM from jQuery!!!!<li>');

$(document).on('ready', function() {
	$('body').append('<ul id="test"></ul>');
	var games=['Braid', 'Swapper', 'Project Zomboid'];
	console.log(games);
	

	for (var i=0; i<games.length; i++){
		var currentGame= games[i];
		$('#test').append('<li>' + currentGame + '</li>');
		console.log('<li>' + currentGame + '</li>');
	};
});