$(document).ready( function() {
	// Calculate the height of the hero
	var headerHeight = $('#hero').outerHeight();
	var nav = $('#nav');
	var navHeight = nav.outerHeight();

	var isDesktop = typeof window.orientation === 'undefined';
	if (isDesktop) {
		// Add body hook for device specific styles
		$('body').addClass('desktop');
		// Only use sticky navigation for desktop
		$(window).scroll( function() {
			stickyNav(headerHeight, nav, navHeight);
		});
	} else {
		$('body').addClass('device ');
	}

	// Size chart toggle
	$('#chart-toggle').on('click', function() {
		if(isDesktop) {
			$('#chart').slideToggle(200);
			$('#chart-btn').toggleClass('active');
		} else {
			$('#chart').toggle();
			$('#chart-btn').toggleClass('active');
		}
	});

	// Flexslider setup
	$('.flexslider').flexslider({
		animation: "slide",
		animationLoop: false,
		slideshow: false,
		itemWidth: 800,
		itemMargin: 12,
		move: 1,
		minItems: 2,
		maxItems: 3,
		start: function(slider){
			$('body').removeClass('loading');
			window.slider = slider;
			updateGallery();
		}
	});

	// Set up scroll to navigation
	$('#nav li a.scroll').on('click', scrollTo);

	// Update number of photos displayed in gallery on window re-size
	$(window).resize(function() {
		updateGallery();
	});

	// Update number of photos displayed in gallery on orientation change
	$(window).on('orientationchange', function() {
		updateGallery();
	});

	// Details toggle
	$('.details-toggle').on('click', function() {
		if($(this).hasClass('active')) {
			return;
		} else {
			$('.details-toggle').toggleClass('active');
			$('#details-grid .four-col').toggle();
		}
	});

	// dropkick the size dropdowns for custom styling
	$('.size').dropkick();

	// get latest tweet
	$.getJSON("https://api.twitter.com/1/statuses/user_timeline/thewindmillclub.json?count=1&include_rts=1&callback=?", function(data) {
		// result returned
		var tweet = data[0].text;
		// process links and reply
		tweet = tweet.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, function(url) {
			return '<a href="'+url+'">'+url+'</a>';
		}).replace(/B@([_a-z0-9]+)/ig, function(reply) {
			return  reply.charAt(0)+'<a href="http://twitter.com/'+reply.substring(1)+'">'+reply.substring(1)+'</a>';
		});
		// output the result
		$("#tweet").html('&ldquo; ' + tweet + ' &rdquo;');
	});


	// load latest instagram
	jQuery.fn.spectragram.accessData = {
		accessToken: '17800924.fdaeaee.d0866f89ef444956ad099a86e264fe35',
		clientID: 'eb777df6aea147bab66da6a456eb0276'
	};

	$('#instagram').spectragram('getUserFeed',{
		query: 'thewindmillclub',
		max: 1,
		wrapEachWith: '<figure></figure>'
	});
});

// Modify number of photos in view for gallery based on widow size
function updateGallery() {
	var lookbookSlider = window.slider;

	if (window.outerWidth < 900) {
		lookbookSlider.vars.minItems = 1;
		lookbookSlider.vars.maxItems = 1;
	} else {
		lookbookSlider.vars.minItems = 2;
		lookbookSlider.vars.maxItems = 3;
	}

	lookbookSlider.update(slider.pagingCount);
	lookbookSlider.slides.width(slider.computedW);
	lookbookSlider.setProps();
};

function scrollTo(event) {
	event.preventDefault();

	var link = $(this).attr('href');
	
	if (typeof window.orientation === 'undefined') {
		$('html, body').animate({
			scrollTop: $(link).offset().top - $('#nav').outerHeight()
		}, 500);
	} else {
		$('html, body').animate({
			scrollTop: $(link).offset().top
		}, 500);
	}
}


function stickyNav(headerHeight, nav, navHeight) {
	//if scrolled down more than the hero's height
	if ($(window).scrollTop() >= headerHeight){
		// fix the nav to the top of the viewport
		nav.addClass('fixed');
		$('#arrow a').attr('href', '#top');
		$('#main').css('marginTop', headerHeight + navHeight);
	} else {
		// when scroll up or less than aboveHeight
		nav.removeClass('fixed');
		$('#arrow a').attr('href', '#looks');
		$('#main').css('marginTop', headerHeight);
	}
}
