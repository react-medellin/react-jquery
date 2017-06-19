'use strict';

// Create new <a> element with the atrributes text, class, click
var $anchor = $('<a/>', {
    text: 'JQUERY Button',
    class: 'btn btn-default',
    click: () => { handlerClick('JQUERY'); },
});

// Append <a> to <div> with id="jquery-container"
$('#jquery-container').append($anchor);	
