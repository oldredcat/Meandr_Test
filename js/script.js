$(function(){
	
	"use strict";
	
	/* Page Preloader
	========================================================*/
	if ($('#page-preloader').length > 0) {
		$(window).on('load', function () {
			$('#page-preloader').removeClass('visible');
		});
	}
	
	/* Scroll to Feedback
	========================================================*/
	if ($('#toFeedback').length > 0) {
		$('#toFeedback').on('click', function(e){
			e.preventDefault();
			$([document.documentElement, document.body]).animate({
				scrollTop: $("#feedback").offset().top
			}, 1000);
		});
	}
	
	/* Animate Init
	========================================================*/
	new WOW().init();
	
});