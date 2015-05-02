(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// google analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-43275048-8', 'auto');
ga('send', 'pageview');

},{}],2:[function(require,module,exports){
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

},{"./analytics":1}]},{},[2]);
