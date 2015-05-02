/*jslint node: true */
'use strict';

require('./analytics');

// dropkick the size dropdowns for custom steeze
$('.size').dropkick( { mobile: true });
// create lookbook gallery
initializeLooksGallery();
// set up sticky nav with scrollTo links
initializeStickyNav();
// create toggle animation for size charts
initializeSizeCharts();



// Set up looks carousel gallery
function initializeLooksGallery( ) {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		navText: ['<span class="icon-left-open-big"></span>','<span class="icon-right-open-big"></span>'],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
				nav: true,
				dotsEach: 1
			},
			780: {
				items: 3,
				nav: true,
				dotsEach: 1
			},
			1400: {
				items: 4,
				nav: true,
				dotsEach: 1
			}
		}
	});
}


// Set up size charts
function initializeSizeCharts( ) {
	var $chartButtons = $('.chart-button');
	var $charts = $('.chart');

	// close the size charts by default
	$charts.each( function( index, elem ) {
		$(elem).hide();
	});

	$chartButtons.on('click', function() {
		var chartName = $(this).attr('data-chart');
		// slide open size chart
		$('#' + chartName).slideToggle(200);
		// add an active class on button to style on
		$(this).toggleClass('active');
	});
}


// Set up sticky nav with scrollTo links
function initializeStickyNav( ) {
	// add scrollTo animation for nav links
	$('.nav-link').on('click', scrollTo);
}


// Scroll to sections
function scrollTo( evt ) {
	evt.preventDefault();

	var link = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(link).offset().top
	}, 500);
}
