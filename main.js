// $('#test');
// $('#test').append('APPEND makes content render at the bottom of the element ID or CLASS specified');

// $('#test').prepend('PREPEND makes content render at the top of the element ID or CLASS specified');

// $('#test');
// $('#test').append('<li>This is from jQuery-create items in the DOM from jQuery!!!!<li>');

//Exercise

$(document).on('ready', function() {
	$('body').append('<ul id="test"></ul>');
	var games=['Braid', 'Swapper', 'Project Zomboid'];
	console.log(games);
	

	for (var i=0; i<games.length; i++){
		var currentGame= games[i];
		$('#test').append('<li>' + currentGame + '</li>');
		console.log('<li>' + currentGame + '</li>');
	};


//using CLONE & storing it in a variable

var newGameUL=$('#test').clone();
newGameUL.append('<li>This is a clone</li>');
newGameUL.css('backgroundColor', '#F00');

$('body').append(newGameUL);


//FIRST USE OF .empty
//$('ul').empty();


// $('li:first');
// //CDT <li>Braid</li>
// $('li:first').remove();
//CDT removes <li>Braid<li>

//using the power of $()
//storing jQuery as a variable
//assigning it CSS rules
//dynamically injecting it into the DOM

var newElement = $('<h1>Here is an H1</h1>');
newElement.css('color', '#F00');
$('body').prepend(newElement);


//Alternative shorthands for the "on Ready, document ready, methods"

// $(document).on('ready', function(){});
// $(document).ready(function(){});
// $(function (){});






});
//