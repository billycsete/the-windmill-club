/*jslint node: true */
'use strict';

// dropkick the size dropdowns for custom steeze
$('.size').dropkick( { mobile: true });
// create lookbook gallery
initializeLooksGallery();
// fire up google analytics
initializeAnalytics();
// init scroll controller
var controller = new ScrollMagic.Controller();
// set up hero parallax
initializeHeaderParallax();
// details grid scroll/fade into view
initializeDetailsAnimation();
// set up sticky nav with scrollTo links
initializeStickyNav();
// create toggle animation for size charts
initializeSizeCharts();



// Add animate in effect on scroll for the details grid
function initializeDetailsAnimation () {
	// build tween
	var tweenOne = TweenMax.staggerFromTo(".western", 2, {y: 400, opacity:0}, {y: 0, opacity:1}, 0.4);
	var tweenTwo = TweenMax.staggerFromTo(".polo", 2, {y: 400, opacity:0}, {y: 0, opacity:1}, 0.4);

	// build scene
	var sceneOne = new ScrollMagic.Scene({triggerElement: "#trigger-western", duration: 460})
		.setTween(tweenOne)
		// .addIndicators({name: "stagger westerns"})
		.addTo(controller);

	var sceneTwo = new ScrollMagic.Scene({triggerElement: "#trigger-polo", duration: 460})
		.setTween(tweenTwo)
		// .addIndicators({name: "stagger polos"})
		.addTo(controller);
}


// Add parallax to the header background
function initializeHeaderParallax( ) {
	// Header parallax animation
	var headerParallax = TweenMax.fromTo("#header", 1, {css: {backgroundPositionY: "50%"}}, {css:{backgroundPositionY: "120%"}} );
	// 160% is 160% of the viewport height
	var headerScene = new ScrollMagic.Scene({ triggerElement: '#header', duration: '160%' })
		.setTween(headerParallax)
		// .addIndicators({name: "2 (duration: 100%)"})
		.addTo(controller);
}


// Set up sticky nav with scrollTo links
function initializeStickyNav( ) {
	// add scrollTo animation for nav links
	$('.nav-link').on('click', scrollTo);

	var navScene = new ScrollMagic.Scene({triggerElement: "#looks"})
		// trigger animation by adding a css class
		.setClassToggle("#nav", "stick")
		.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
		.addTo(controller);
}


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
	_gaq.push(['_setAccount', 'UA-43275048-8']);
	_gaq.push(['_trackPageview']);

	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
}

