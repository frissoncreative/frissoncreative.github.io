// On the load, resize dynamic images so fill the screen
$(window).load(function(){
 	// resizeFeatureImage();
});

var waypoint = new Waypoint({
	element: document.getElementById('influencers'),
	handler: function(direction) {
	 	$('.percentage').attr("class", "start")
		$('.count').each(function () {
		    $(this).prop('Counter',0).animate({
		        Counter: $(this).attr('data-amount')
		    }, {
		        duration: 2000,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});
		this.destroy()
	}
})

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

// function resizeFeatureImage() {
//     if ($(window).width() > 1200) {
// 		fullWidth = $('.categories').width();
// 		width = fullWidth / 4;
// 		$('.categories .category').each( function(index, element) {
// 			$(element).height(width - 40);
// 		});
//     }
// }

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

$( "header a" ).click(function(event) {
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

// $('body').ihavecookies({
// 	title: "Cookies & Privacy",
// 	message: "This website uses cookies to ensure you get the best experience on our website.",
// 	link: "/privacy.html",
// 	uncheckBoxes: true,
// 	// delay: 2000,
// 	// expires: 30, 
// 	cookieTypes: [
// 		{
// 			type: 'Analytics',
// 			value: 'analytics',
// 			description: 'Cookies related to site visits, browser types, etc.'
// 		},
// 	],
// 	onAccept: function(event){
// 		console.log(event);
// 		ga('create', 'UA-106085657-1', 'auto');
// 		ga('send', 'pageview');
// 	}
// });