/*jslint node: true */
'use strict';

// dropkick the size dropdowns for custom steeze
$('.size').dropkick();
// set up sticky nav with scrollTo links
initializeNav();
// create lookbook gallery
initializeLooksGallery();
// fire up google analytics
initializeAnalytics();
// create toggle animation for size charts
initializeSizeCharts();
// Insert latest instagram photo
addLatestInstagram();


// init controller
var controller = new ScrollMagic.Controller();

var headerParallax = TweenMax.fromTo("#header", 1, {css: {backgroundPositionY: "50%"}}, {css:{backgroundPositionY: "120%"}} );

// 160% is 160% of the viewport height
var headerScene = new ScrollMagic.Scene({ triggerElement: '#header', duration: '160%' })
	.setTween(headerParallax)
	.addIndicators({name: "2 (duration: 100%)"})
	.addTo(controller);


var navScene = new ScrollMagic.Scene({triggerElement: "#looks"})
	// trigger animation by adding a css class
	.setClassToggle("#nav", "stick")
	.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
	.addTo(controller);





function initializeNav( ) {
	// add scrollTo animation for nav links
	$('.nav-link').on('click', scrollTo);
}


// Set up looks carousel gallery
function initializeLooksGallery( ) {
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 10,
		responsiveClass: true,
		// navText: [&apos;next&#x27;,&#x27;prev&#x27;],
		navText: ['<span class="icon-left-open-big"></span>','<span class="icon-right-open-big"></span>'],
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2,
				nav: true
			},
			780: {
				items: 3,
				nav: true
			},
			1400: {
				items: 4,
				nav: true
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



function addLatestInstagram( ) {
	// load latest instagram
	jQuery.fn.spectragram.accessData = {
		accessToken: '17800924.fdaeaee.d0866f89ef444956ad099a86e264fe35',
		clientID: 'eb777df6aea147bab66da6a456eb0276'
	};

	$('#instagram').spectragram('getUserFeed',{
		query: 'thewindmillclub',
		max: 3,
		wrapEachWith: '<div class="column"></div>'
	});
}
