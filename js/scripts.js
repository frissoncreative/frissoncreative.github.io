$(function() {
	$('.scroll').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ 
			scrollTop: $('#who').offset().top
		}, 500, 'swing');
	});
});