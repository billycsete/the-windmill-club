/*jslint node: true */
'use strict';

initializeLooksGallery();
$('.nav-link').on('click', scrollTo);
initializeAnalytics();


// Set up looks carousel gallery
function initializeLooksGallery() {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			480: {
				items: 2
			},
			780: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
}


// Scroll to sections
function scrollTo( evt ) {
	evt.preventDefault();

	var link = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(link).offset().top
	}, 500);
}


// Set up google analytics
function initializeAnalytics( ) {
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', 'UA-18419850-2']);
	_gaq.push(['_trackPageview']);

	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
}
