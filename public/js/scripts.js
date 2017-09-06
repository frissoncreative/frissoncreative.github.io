// On the load, resize dynamic images so fill the screen
$(window).load(function(){
  resizeFeatureImage();
});
// On the resize of the window, resize dynamic images so fill the screen
var rtime;
var timeout = false;
var delta = 300;
$(window).resize(function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeEnd, delta);
    }
});

function resizeEnd() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeEnd, delta);
    } else {
        timeout = false;
        resizeFeatureImage();
    }               
}

function resizeFeatureImage() {
    if ($(window).width() > 1200) {
		fullWidth = $('.categories').width();
		width = fullWidth / 3;
		$('.categories .category').each( function(index, element) {
			$(element).height(width - 40);
		});
    }
}







function play() {
	var audio = document.getElementById("audio");
	audio.play();
}

var url = location.search;
var urlParams = {};
    url.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) {
        urlParams[$1] = $3;
    }
);
if (urlParams.hasOwnProperty("email")) {
	$('#thankyou').addClass('show');
}

function sending(button) {
	console.log('sending');
}

function showContent(target) {
	$(target + ' .default').removeClass('show');
	$(target + ' .copy').addClass('show');
}
function hideContent(target) {
	$(target + ' .default').addClass('show');
	$(target + ' .copy').removeClass('show');
}

$( "nav a" ).click(function(event) {
	event.preventDefault();
	target = $ (this).attr('href');
	$('html, body').animate({
	    scrollTop: ($(target).offset().top - 75)
	}, 500);
});

$( "#down" ).click(function(event) {
	event.preventDefault();
	target = $ (this).attr('href');
	$('html, body').animate({
	    scrollTop: ($(target).offset().top - 75)
	}, 500);
});