$(document).ready(function() {
	/*Scroll smooth*/
	$(document).on('click', '.scrollsmth[href^="#"]', function (event) {
	    event.preventDefault();

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 110}, 900);		
	});

	$('.navbar-nav>li>a').on('click', function(){
	    $('.navbar-collapse').collapse('hide');
	});
});