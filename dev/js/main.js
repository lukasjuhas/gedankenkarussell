jQuery(document).ready(function($) { 
	$('.impressum').on('click', function(e) {
		e.preventDefault();
		$('.impressum-content').slideToggle();

		 $('html, body').animate({
	        scrollTop: $(".impressum-content").offset().top
	    }, 2000);
	});
});
