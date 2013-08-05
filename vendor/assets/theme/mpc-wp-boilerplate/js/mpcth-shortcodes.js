jQuery(document).ready(function($) {

	var $window = $(window);

/* ---------------------------------------------------------------- */
/* Recent/Related
/* ---------------------------------------------------------------- */

	$('.mpcth-stack-animation').on('stackAnimation', function() {
		var $list = $(this).find('ul > li'),
			animation = $(this).attr('data-animation-type');

		$list.each(function(index) {
			$(this).addClass('wpb_animate_when_almost_visible wpb_' + animation);
			setTimeout(function() {
				$list.eq(index).addClass('wpb_start_animation');
			}, index * 250)
		});
	})

	if (typeof $.fn.waypoint !== 'undefined') {
		$('.mpcth-stack-animation').waypoint(function() {
			$(this).trigger('stackAnimation');
		}, { offset: '70%' });
	}

/* ---------------------------------------------------------------- */
/* CSS Animations
/* ---------------------------------------------------------------- */

	if ( typeof window['vc_waypoints'] !== 'function' ) {
		if (typeof $.fn.waypoint !== 'undefined') {
			$('.wpb_animate_when_almost_visible').waypoint(function() {
				$(this)
					.addClass('wpb_start_animation')
					.trigger('stackAnimation');

			}, { offset: '70%' });
		}
	}

/* ---------------------------------------------------------------- */
/* Icon Divider
/* ---------------------------------------------------------------- */

	if (typeof $.fn.waypoint !== 'undefined') {
		var $icon_dividers = $('.mpcth-sc-icon-divider');

		$icon_dividers.waypoint({
			offset: '50%',
			handler: function() {
				$(this).addClass('mpcth-waypoint-triggered');
			}
		});
		$icon_dividers.waypoint({
			offset: '100%',
			handler: function() {
				$(this).removeClass('mpcth-waypoint-triggered');
			}
		});
		$icon_dividers.waypoint({
			offset: '-130',
			handler: function() {
				$(this).removeClass('mpcth-waypoint-triggered');
			}
		});
	}

/* ---------------------------------------------------------------- */
/* Flipbook
/* ---------------------------------------------------------------- */

	var $flipbook = $('.flipbook-container');
	
	$flipbook.parents('.vc_span12').css('margin-left', 0);

/* ---------------------------------------------------------------- */
/* Share Count
/* ---------------------------------------------------------------- */

	$('.mpcth-sc-share-count-facebook').on('click', function(e) {
		window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(location.href), 'facebook-share', 'width=630,height=430');

		e.preventDefault();
	});

	$('.mpcth-sc-share-count-twitter').on('click', function(e) {
		window.open('https://twitter.com/intent/tweet?url=' + encodeURIComponent(location.href) + '&text=' +  encodeURIComponent(document.title), 'twitter-share', 'width=630,height=430');

		e.preventDefault();
	});

	$('.mpcth-sc-share-count-googleplus').on('click', function(e) {
		window.open('https://plus.google.com/share?url=' + encodeURIComponent(location.href), 'googleplus-share', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600')

		e.preventDefault();
	});

	function share_count(url, callback) {
		url = encodeURIComponent(url || location.href);

		var args = {
			url: "//" + (location.protocol == "https:" ? "sharedcount.appspot" : "api.sharedcount") + ".com/?url=" + url,
			cache: true,
			dataType: "json"
		};

		if ('withCredentials' in new XMLHttpRequest) {
			args.success = callback;
		} else {
			var cb = "sc_" + url.replace(/\W/g, '');
			window[cb] = callback;
			args.jsonpCallback = cb;
			args.dataType += "p";
		}

		return $.ajax(args);
	}

	function update_share_count(data) {
		$('.mpcth-sc-share-count').each(function() {
			var $this = $(this);

			if(data.Facebook.total_count != null)
				$this.find('.mpcth-sc-share-count-facebook .mpcth-sc-share-count-number').html(data.Facebook.total_count);

			if(data.Twitter != null)
				$this.find('.mpcth-sc-share-count-twitter .mpcth-sc-share-count-number').html(data.Twitter);

			if(data.GooglePlusOne != null)
				$this.find('.mpcth-sc-share-count-googleplus .mpcth-sc-share-count-number').html(data.GooglePlusOne);

			$.post($this.attr('data-ajaxurl'), {
				action: 'mpcth_social_cache',
				data: data,
				id: $this.attr('data-id')
			});
		})
	}

	if(!$('.mpcth-sc-share-count').is('.mpcth-sc-share-count-filled'))
		share_count(encodeURIComponent(location.href), update_share_count);

/* ---------------------------------------------------------------- */
/* Fullwidth Block
/* ---------------------------------------------------------------- */

	var $wraps = $('.wpb_row_wrap.mpcth-parallax-trigger');
	$window.on('scroll', function() {
		$wraps.each(function() {
			var $this = $(this),
				offset = $this.offset().top,
				height = $this.height(),
				top = $window.scrollTop();

			$this.css('background-position', '50% ' + ((top - offset) * 0.4) + 'px');
		})
	});

/* ---------------------------------------------------------------- */
/* Testimonial
/* ---------------------------------------------------------------- */

	$('.mpcth-sc-testimonial-slider').each(function() {
		var $slider = $(this),
			$slides = $slider.children('.mpcth-sc-testimonial'),
			index = 0,
			end = $slides.length,
			delay = parseInt($slider.attr('data-delay'));

			$slides.hide();
			$slides.eq(index).fadeIn(250);

			setInterval(function() {
				$slides.eq(index).fadeOut(250);

				index = index + 1 >= end ? 0 : index + 1;

				$slides.eq(index).delay(250).fadeIn();
			}, delay + 250);
	})

/* ---------------------------------------------------------------- */
/* Team Member
/* ---------------------------------------------------------------- */

	function addArc(xloc, yloc, value, total, R) {
		var alpha = 360 / total * value, a = (90 - alpha) * Math.PI / 180, x = xloc + R * Math.cos(a), y = yloc - R * Math.sin(a), path;

		if (total == value) {
			path = [ ["M", xloc, yloc - R], ["A", R, R, 0, 1, 1, xloc - 0.01, yloc - R] ];
		} else {
			path = [ ["M", xloc, yloc - R], ["A", R, R, 0, +(alpha > 180), 1, x, y] ];
		}

		return { path: path };
	};

	var radius = 60,
		circle_width = 10;

	$('.mpcth-sc-team-member').on('viewportAnimation', function(e) {
		var $member = $(this);

		if($member.is('.mpcth-sc-team-member-bars')) {
			$(this).find('.mpcth-sc-team-member-skill').each(function(index) {
				var $this = $(this),
					$val = $this.find('.mpcth-sc-team-member-skill-value'),
					$name = $this.find('.mpcth-sc-team-member-skill-name'),
					$num = $this.find('.mpcth-sc-team-member-skill-value-number'),
					width = $val.attr('data-value'),
					val = parseInt(width);

				$name.delay(index * 250).fadeIn();

				$val.delay(index * 250).animate({
					'width': width
				}, {
					duration: val * 20,
					progress: function(animation, progress, remainingMs) {
						$num.html((progress * val >> 0) + '%');
					}
				});
			});
		} else if($member.is('.mpcth-sc-team-member-circles')) {
			$(this).find('.mpcth-sc-team-member-skill').each(function(index) {
				var $this = $(this),
					ie_fix = 0;

				if($('html').is('.ie'))
					var ie_fix = 0;

				function updatePercent() {
					var attrs = _value.attr("arc");
					_percent.attr("text", (attrs[2] >> 0) + "%");
				}

				var _paper = Raphael($this[0], radius * 2, radius * 2);
				_paper.customAttributes.arc = addArc;

				var $data = $this.find('.mpcth-sc-team-member-skill-data'),
					_background = _paper.circle(radius, radius, radius - circle_width).attr({ "fill": $data.attr('data-color-background'), "stroke-width": 0 }),
					_value = _paper.path().attr({ "stroke": $data.attr('data-color-value'), "stroke-width": circle_width, arc: [radius + ie_fix, radius + ie_fix, 0, 100, radius - circle_width / 2] }),
					_name = _paper.text(radius, radius - 10, $data.attr('data-name')).attr({ "font-size": 12, "fill": $data.attr('data-color-text'), "font-style": "italic" }),
					_percent = _paper.text(radius, radius + 10, "0%").attr({ "font-size": 12, "fill": $data.attr('data-color-text'), "font-style": "italic" });

				eve.on("raphael.anim.frame.*", updatePercent);

				var _anim = Raphael.animation({ arc: [radius + ie_fix, radius + ie_fix, parseInt($data.attr('data-value')) , 100, radius - circle_width / 2] }, parseInt($data.attr('data-value')) * 20, function() {
					eve.unbind("raphael.anim.frame.*", updatePercent);
				});
				_value.animate(_anim.delay(index * 250));
			});
		}
	});

/* ---------------------------------------------------------------- */
/* Tabs
/* ---------------------------------------------------------------- */

	if($('.mpcth-sc-tabs').hasClass('mpcth-sc-tabs-vertical')) tabSetMinSize();

	$('.mpcth-sc-tabs')
		.on('click', '.mpcth-sc-tabs-title', function(e) {
			var $tab = $(this);
			var $content = $($tab.children('a').attr('href'));
			
			$tab
				.addClass('mpcth-sc-tabs-active')
				.siblings('.mpcth-sc-tabs-title')
					.removeClass('mpcth-sc-tabs-active');

			$content
				.stop(true, true)
				.fadeIn()
				.siblings('.mpcth-sc-tabs-content')
					.hide();

			e.preventDefault();
		})
		.find('.mpcth-sc-tabs-title')
			.first()
				.click();

/* ---------------------------------------------------------------- */
/* Tooltip
/* ---------------------------------------------------------------- */

	tooltipSetSize();

	$('.mpcth-sc-tooltip-wrap').on('mouseenter', function() {
		$message = $(this).children('.mpcth-sc-tooltip');
		$message.show();
	})

	$('.mpcth-sc-tooltip-wrap').on('mouseleave', function() {
		$message = $(this).children('.mpcth-sc-tooltip');
		$message.hide();
	})

/* ---------------------------------------------------------------- */
/* Fancybox
/* ---------------------------------------------------------------- */

	$("a.mpcth-sc-fancybox").live('click', function() {
		$this = $(this);
		// Lighbox Image 
		if($this.hasClass('mpcth-image')) {
			$.fancybox({
				'padding' : 0,
				'transitionIn'	: 'fade',
				'transitionOut'	: 'fade',
				'title'			: this.title,
				'href'			: this.href
			});
		// Lighbox YouTube Video 
		} else if($this.hasClass('mpcth-youtube-video')){
			$.fancybox({
				'padding' : 0,
				'autoScale'		: true,
				'transitionIn'	: 'fade',
				'transitionOut'	: 'fade',
				'title'			: this.title,
				'href'			: this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
				'type'			: 'swf',
				'swf'			: {
				'wmode'				: 'transparent',
				'allowfullscreen'	: 'true'
				}
			});
		// Lighbox Vimeo Video 
		} else if($this.hasClass('mpcth-vimeo-video')){
			$.fancybox({
				'padding' : 0,
				'autoScale'		: true,
				'transitionIn'	: 'fade',
				'transitionOut'	: 'fade',
				'title'			: this.title,
				'href'			: this.href,
				'type'			: 'iframe'
			});
		// Lighbox iFrame 
		} else if($this.hasClass('mpcth-iframe')){
			$.fancybox({
				'padding'			 : 0,
				'width'				: '75%',
				'height'			: '75%',
				'transitionIn'		: 'fade',
				'transitionOut'		: 'fade',
				'title'				: this.title,
				'href'				: this.href,
				'type'				: 'iframe'
			});
		// Lighbox SWF 
		} else if($this.hasClass('mpcth-swf')){
			$.fancybox({
				'padding' 			: 0,
				'transitionIn'		: 'fade',
				'transitionOut'		: 'fade',
				'title'				: this.title,
				'href'				: this.href,
				'type'				: 'swf'
			});
		}

		return false;
	});

/* ---------------------------------------------------------------- */
/* Alert
/* ---------------------------------------------------------------- */

	$('.mpcth-sc-alert').on('click', '.mpcth-sc-alert-close', function(e) {
		var $alert = $(this).parent();

		$alert.fadeOut(function() {
			$alert.remove();
		});

		e.preventDefault();
	})

/* ---------------------------------------------------------------- */
/* Toggle
/* ---------------------------------------------------------------- */

	toggleSetSize();

	$('.mpcth-sc-toggle')
		.data('open', false)
		.on('click', '.mpcth-sc-toggle-title', function(e) {
			var $this = $(this);
			$this.next().stop(true, true);

			if($this.data('open')) {
				$this.next().slideUp();
			} else {
				$this.next().slideDown();
			}

			$this.data('open', !$this.data('open'));

			e.preventDefault();
		})

/* ---------------------------------------------------------------- */
/* Resizing
/* ---------------------------------------------------------------- */

	$window.on('resize', function() {
		toggleSetSize();
	})

	function toggleSetSize() {
		$('.mpcth-sc-toggle-content').each(function() {
			$toggle = $(this);

			$toggle.width($toggle.siblings('.mpcth-sc-toggle-title').width());
		});
	}

	function tooltipSetSize() {
		$('.mpcth-sc-tooltip').each(function() {
			$tooltip = $(this);

			$tooltip.css({
				width: $tooltip.outerWidth(),
				position: 'absolute',
				visibility: 'visible',
				display: 'none'
			})
		});
	}

	function tabSetMinSize() {
		$('.mpcth-sc-tabs-content').each(function() {
			$tab = $(this);

			$tab.css('min-height', $tab.siblings('ul').height() - 2 * parseInt($tab.css('padding')));
		});
	}

});

jQuery(window).load(function() {
	var $ = jQuery,
		$window = $(window);

/* ---------------------------------------------------------------- */
/* Clients Slider
/* ---------------------------------------------------------------- */

	$('.mpcth-sc-client-slider').each(function() {
		var $this = $(this),
			$list = $this.children('.mpcth-sc-client-slider-list'),
			$clients = $list.children('.mpcth-sc-client-slider-logo'),
			begin_items = $clients.length,
			columns = $this.attr('data-columns'),
			rows = $this.attr('data-rows'),
			delay = $this.attr('data-delay'),
			max_height = 0,
			slider_width = $this.parent().width(),
			width = slider_width / columns,
			animate = true;

		if($window.width() < 768 && columns > 3) {
			columns = 3;
			width = slider_width / columns;
		}

		$this.fadeIn();

		$clients.width(width);
		$clients.each(function() {
			if($(this).height() > max_height)
				max_height = $(this).height();
		})
		$clients.height(max_height);
		$clients.each(function() {
			var $client = $(this),
				$logo = $client.children('img');

			if($logo.height() < max_height)
				$logo.css({'margin-top': $logo.height() / -2 >> 0, 'top': '50%'});
		})
		
		if(begin_items <= columns * rows) {
			var count = Math.ceil(columns * rows / begin_items);

			if(begin_items == columns * rows) count++;

			for (var i = 0; i < count; i++) {
				var $duplicate = $clients.clone();
				$list.append($duplicate);
			};
		}

		$clients = $list.children('.mpcth-sc-client-slider-logo');
		$list.width($clients.length * width / rows);

		if(delay > 0) {
			var sliding = setInterval(function() {
				if(animate) {
					$list.animate({'margin-left': -width}, 500, 'easeOutExpo', function() {
						$list.css('margin-left', 0);
						$list.children().first().appendTo($list);
					})
				}
			}, delay);
		}

		$this.hover(function() {
			animate = false;
		}, function() {
			animate = true;
		});

		$window.on('resize', function() {
			max_height = 0;
			slider_width = $this.parent().width();
			width = slider_width / columns;

			if($window.width() < 768 && columns > 3) {
				columns = 3;
				width = slider_width / columns;
			} else {
				columns = $this.attr('data-columns');
			}

			$clients.width(width);
			$clients.height('').each(function() {
				if($(this).height() > max_height)
					max_height = $(this).height();
			})
			$clients.height(max_height);
			$clients.each(function() {
				var $client = $(this),
					$logo = $client.children('img');

				if($logo.height() < max_height)
					$logo.css({'margin-top': $logo.height() / -2 >> 0, 'top': '50%'});
			})

			$list.width($clients.length * width / rows);
		})
	});
})