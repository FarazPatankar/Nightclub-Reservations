// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function(){
$(window).bind('scroll', function() {
	var distanceFromTop = $(this).scrollTop();
	var headerHeight = $('.main-nav').height();
		if (distanceFromTop >= headerHeight) {
			$('.main-nav').addClass('nav-transparent')
			$('.main-nav').removeClass('black')
		}
		else {
			$('.main-nav').removeClass('nav-transparent')
			$('.main-nav').addClass('black')
		}
	});

  $('.slider').slider({full_width: true,
  										 transition: 500,
  										 height: 600,
  										 indicators: false,
  										 interval: 3500});
  $('.carousel').carousel({
            dist:-40,
            shift:0,
            padding:100,

      });
});