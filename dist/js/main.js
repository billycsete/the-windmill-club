(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*jslint node: true */
'use strict';

// dropkick the size dropdowns for custom steeze
// $('.size').dropkick();
// set up parallax on header background image
initializeHeaderParallax();
// set up sticky nav with scrollTo links
initializeNav();
// create lookbook gallery
initializeLooksGallery();
// fire up google analytics
initializeAnalytics();
// create toggle animation for size charts
initializeSizeCharts();


// Set up header parallax
function initializeHeaderParallax( ) {
	var $headerElement = $('#header');
	var currentBackgroundPosition = parseFloat($headerElement.css('backgroundPositionY'));

	$(window).scroll( function() {
		var headerHeight = $headerElement.height();
		var pxScrolled = $(window).scrollTop();

		var newPosition = currentBackgroundPosition + (pxScrolled / 10);

		console.log(newPosition);
		$headerElement.css('backgroundPositionY', newPosition + '%');
	});
}


function initializeNav( ) {
	// add scrollTo animation for nav links
	$('.nav-link').on('click', scrollTo);
	// add polyfill for sticky nav
	if ( $('html').hasClass('no-touch') ) {
		// FixedSticky.tests.sticky = false;
		$('.nav').fixedsticky();
	}
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


// function postLatestTweet( ) {
// 	$.getJSON("https://api.twitter.com/1/statuses/user_timeline/thewindmillclub.json?count=1&include_rts=1&callback=?", function(data) {
// 		// result returned
// 		var tweet = data[0].text;
// 		// process links and reply
// 		tweet = tweet.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function(url) {
// 			return '<a href="'+url+'">'+url+'</a>';
// 		}).replace(/B@([_a-z0-9]+)/ig, function(reply) {
// 			return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
// 		});
// 		// output the result
// 		$("#tweet").html('&ldquo; ' + tweet + ' &rdquo;');
// 	});
// }




// load latest instagram
// jQuery.fn.spectragram.accessData = {
// 	accessToken: '17800924.fdaeaee.d0866f89ef444956ad099a86e264fe35',
// 	clientID: 'eb777df6aea147bab66da6a456eb0276'
// };

// $('#instagram').spectragram('getUserFeed',{
// 	query: 'thewindmillclub',
// 	max: 1,
// 	wrapEachWith: '<figure></figure>'
// });

},{}]},{},[1]);
