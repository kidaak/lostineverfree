jQuery(document).ready(function($) {
	var $window = $(window);

/*-----------------------------------------------------------------------------------*/
/*	Menu 
/*-----------------------------------------------------------------------------------*/

	// add custom classes to the menu
	$('.menu > li:first-child').addClass('first-item');
	$('.menu > li:last-child').addClass('last-item');
	
	$('.sub-menu li:first-child').addClass('first-item');
	$('.sub-menu li:last-child').addClass('last-item');

	$('#mpcth_menu ul.sub-menu').parents('li, ul').addClass('parent_menu_item');

	// Header menu item with drop down hover
	$('#mpcth_page_header_content .menu li').hover(function() {
		$(this).children('ul').css({
			'visibility': 'visible',
			'display': 'none',
			'overflow': 'visible'
		}).stop(true).slideDown(300);

	}, function() {
		$(this).children('ul').stop(true).slideUp(300);
	});

	// Aside menu item with drop down hover 
	$('#mpcth_aside_menu_section .menu li.parent_menu_item > a').on('click', function(e) {
		var $this = $(this).parent(),
			dropDown = $this.children('ul:first');
		
		if(dropDown.css('display') == 'none') {
			$this.children('ul:first').slideDown();
		} else {
			$this.children('ul:first').slideUp();
		}

		e.preventDefault();
	});

	$('#mpcth_page_header_content ul.sub-menu li ul.sub-menu').each(function() {
		var $this = $(this).parent('li'),
			dropDown = $this.parent('ul');
		
		$this.children('ul.sub-menu').css('left', -$this.children('ul.sub-menu').width() + 2);
	});

	// hide drop downs
	$('.menu ul').css('display', 'none');

	// Floating Current Indicator
	var $block = $('#mpcth_header_divider_block'),
		$current = $('#mpcth_menu > li.current-menu-parent, #mpcth_menu > li.current-menu-item');

	if($current.length == 0 && $('#mpcth_menu > li').length > 0) {
		var is_visible = false,
			start_pos = $('#mpcth_menu > li').first().offset().left;
		
		$block.css({
			'opacity': 0,
			'left': start_pos
		});

		$('#mpcth_menu > li').hover(function() {
			var $this = $(this);
			$block.width($this.outerWidth());
			$block.css('left', $this.offset().left);

			if(!is_visible) {
				$block.css('opacity', 1);
			}
		}, function() {
			$block.css({
				'opacity': 0,
				'left': start_pos,
				'width': 0
			});
		});
	} else if($current.length > 0) {
		var start_pos = $current.offset().left,
			start_width = $current.outerWidth();
		
		$block.css({
			'left': start_pos,
			'width': start_width
		});

		$('#mpcth_menu > li').hover(function() {
			var $this = $(this);
			$block.width($this.outerWidth());
			$block.css('left', $this.offset().left);
		}, function() {
			$block.css({
				'left': start_pos,
				'width': start_width
			});
		});
	}

/* ---------------------------------------------------------------- */
/* Mediaelements
/* ---------------------------------------------------------------- */

	videoLoadTimeout = setTimeout(function() {
		$window.trigger('MediaPlayerLoaded');
	}, 2000);

	$window.on('MediaPlayerLoaded', function() {
		clearTimeout(videoLoadTimeout);

		$('.mejs-container').css('visibility', 'visible');
	})

/* ---------------------------------------------------------------- */
/* Flexslider
/* ---------------------------------------------------------------- */

	$window.load(function() {
		$('.wpb_flexslider').each(function() {
			var this_element = $(this);
			var sliderSpeed = 800,
				sliderTimeout = parseInt(this_element.attr('data-interval'))*1000,
				sliderFx = this_element.attr('data-flex_fx'),
				slideshow = true;
			if ( sliderTimeout == 0 ) slideshow = false;

			this_element.flexslider({
				animation: sliderFx,
				slideshow: slideshow,
				slideshowSpeed: sliderTimeout,
				sliderSpeed: sliderSpeed,
				smoothHeight: true
			});
		});
	})

/* ---------------------------------------------------------------- */
/* Top Widget Area
/* ---------------------------------------------------------------- */
	
	var $topAreaWidgets = $('#mpcth_top_widget_area_widgets');

	$('#mpcth_top_widget_area_handle').on('click', function() {
		if($topAreaWidgets.hasClass('mpcth-top-widget-hidden')) {
			$topAreaWidgets.removeClass('mpcth-top-widget-hidden');
			$topAreaWidgets.slideDown();
		} else {
			$topAreaWidgets.addClass('mpcth-top-widget-hidden');
			$topAreaWidgets.slideUp();
		}
	})

/* ---------------------------------------------------------------- */
/* Header
/* ---------------------------------------------------------------- */

	var $top_menu = $('#mpcth_secondary_nav_wrap');
	var $logo = $('#mpcth_logo');
	var $logo_img = $logo.children('img');
	var $menu_item = $('#mpcth_menu > li');
	var $sub_menu = $('#mpcth_menu > li > ul.sub-menu');
	var $wrap = $('#mpcth_header_middle_wrap');
	var $main_wrap = $('#mpcth_page_header_wrap');
	var $header = $('#mpcth_page_header_content');
	var $spacer = $('#mpcth_menu_spacer');
	var is_retina = false;
	var is_image = false;
	var is_mobile = $window.width() < 960;
	var img_def_w = 0;
	var img_def_h = 0;
	var spacer_min_h;
	var spacer_max_h;
	var menu_min_h;
	var menu_max_h;

	if($logo_img.length)
		is_image = true;

	if(window.devicePixelRatio != undefined && window.devicePixelRatio > 1)
		is_retina = true;

	if(is_retina && is_image && $logo_img.attr('data-retina') != '') {
		$logo_img.attr('src', $logo_img.attr('data-retina')).addClass('mpcth-retina-logo');
	} else {
		is_retina = false;
	}

	function setup_header() {
		if(!is_mobile) {
			spacer_min_h = $logo.height() > $menu_item.height() ? $logo.height() : $menu_item.height();
			spacer_max_h = $main_wrap.height();

			menu_min_h = $menu_item.outerHeight() - 40;
			menu_max_h = $menu_item.outerHeight();

			$header.stop(true).animate({'opacity': 1}, 1000);
			$spacer.height($main_wrap.height());

			$sub_menu.css('top', menu_max_h);

			if(is_image)
				$logo_img.addClass('mpcth-animations');
		} else {
			$header.stop(true).animate({'opacity': 1}, 1000);
			$spacer.height($main_wrap.height());

			if(is_image)
				$logo_img.addClass('mpcth-animations');
		}
	}

	if(is_image) {
		var $temp_img = $('<img>');
		
		$temp_img
			.on('load', function() {
				img_def_w = $logo_img.width();
				img_def_h = $logo_img.height();

				if(is_retina) {
					img_def_w = img_def_w * 0.5 >> 0;
					img_def_h = img_def_h * 0.5 >> 0;
				}

				$logo_img.css({
					'width': img_def_w,
					'height': img_def_h
				});

				setTimeout(setup_header, 100);
			})
			.attr('src', $logo_img.attr('src'));
	} else {
		setup_header();
	}

	$window.on('resize', function() {
		if($window.width() < 960)
			is_mobile = true;
		else
			is_mobile = false;

		setup_header();
	})

	$window.on('scroll', function() {
		if($window.scrollTop() > 0) {
			if(!$main_wrap.is('.mpcth-header-slim')) {
				if(!is_mobile) {
					$main_wrap.addClass('mpcth-header-slim');
					$spacer.height(spacer_min_h + 15);
					$top_menu.slideUp(250);
					$sub_menu.css('top', menu_min_h);
				}

				if(is_image)
					$logo_img.css({
						'width': img_def_w * 0.5,
						'height': img_def_h * 0.5
					});
			}
		} else {
			if(!is_mobile) {
				$main_wrap.removeClass('mpcth-header-slim');
				$spacer.height(spacer_max_h);
				$top_menu.stop(true, true).slideDown(250);
				$sub_menu.css('top', menu_max_h);
			}

			if(is_image)
				$logo_img.css({
					'width': img_def_w,
					'height': img_def_h
				});
		}
	})

/* ---------------------------------------------------------------- */
/* Comments Rates
/* ---------------------------------------------------------------- */

	var $comments = $('#comments article.comment');

	$comments.on('click', '.comment-fold', function(e) {
		var $this = $(this),
			$comment = $this.parents('article.comment'),
			$content = $comment.children('.comment-content'),
			$children = $comment.siblings('.children');

		if($comment.is('.comment-folded')) {
			$content.slideDown(250);
			$children.slideDown(250);
			$comment.removeClass('comment-folded');
		} else {
			$content.slideUp(250);
			$children.slideUp(250);
			$comment.addClass('comment-folded');
		}

		e.preventDefault();
	})

	$comments.on('click', '.comment-rate-up', function(e) {
		var $this = $(this),
			$comment = $this.parents('article.comment');
		
		$.post(ajaxurl, {
			action: 'mpcth_comments_rates',
			rate: 'up'
		}, function(response) {
			
		});

		e.preventDefault();
	})
	$comments.on('click', '.comment-rate-down', function(e) {
		var $this = $(this),
			$comment = $this.parents('article.comment');
		
		$.post(ajaxurl, {
			action: 'mpcth_comments_rates',
			rate: 'down'
		}, function(response) {
			
		});
		
		e.preventDefault();
	})

/* ---------------------------------------------------------------- */
/* Modern Blog Template
/* ---------------------------------------------------------------- */

	var $posts = $('.blog-type-compressed #mpcth_page_articles .post');

	if($('.blog-type-compressed #mpcth_page_articles .post').length > 0) {
		$('.blog-type-compressed #mpcth_page_articles').on('click', '.post', function() {
			var $this = $(this),
				$open = $posts.filter('.mpcth-post-open');

			if($open.length && $this[0] == $open[0]) {
				$open.find('.mpcth-post-thumbnail').stop(true).slideUp();
				$open.find('.mpcth-post-content').stop(true).slideUp();
				$open.removeClass('mpcth-post-open');
			} else if($open.length) {
				$open.find('.mpcth-post-thumbnail').stop(true).slideUp();
				$open.find('.mpcth-post-content').stop(true).slideUp(function() {
					$open.removeClass('mpcth-post-open');

					$this.find('.mpcth-post-thumbnail').slideDown();
					$this.find('.mpcth-post-content').slideDown();
					$this.addClass('mpcth-post-open');
				});
			} else {
				$this.find('.mpcth-post-thumbnail').slideDown();
				$this.find('.mpcth-post-content').slideDown();
				$this.addClass('mpcth-post-open');
			}
		});
	}

/* ---------------------------------------------------------------- */
/* Full-width/Home Header
/* ---------------------------------------------------------------- */

	if($('body').is('.page-template-full-width-template-php') || $('body').is('.page-template-home-template-php')) {
		var $headers = $('#mpcth_page_wrap #mpcth_page_articles article > .wpb_row_wrap > .wpb_row > .vc_span12 > .wpb_wrapper > .mpcth-sc-icon-divider:first-child');

		$headers.each(function() {
			var $this = $(this),
				$wrap = $this.parents('.wpb_row_wrap'),
				$wrap_prev = $wrap.prev('.wpb_row_wrap'),
				divider_height = $this.children('.mpcth-sc-icon-divider-wrap').outerHeight();

				$this.css({
					'margin-top': divider_height * -0.5 - 20
				})

				$wrap.prev('.wpb_row_wrap').css({
					'padding-bottom': divider_height * 0.5
				})
		})
	}

/* ---------------------------------------------------------------- */
/* Twitter Widget
/* ---------------------------------------------------------------- */

	var $twitterWidgets = $('.mpcth-twitter-wrap');

	$twitterWidgets.each(function() {
		var $this = $(this);

		if(!$this.is('.mpcth-twitter-cached')) {
			var unique = $this.attr('data-unique'),
				id = $this.attr('data-id'),
				number = $this.attr('data-number'),
				src = document.createElement('script');

			mpcthFetcher['callback_' + unique] = function(data) {
				var $body = $('<div>').html(data.body),
					$tweets = $body.find('.stream .h-feed .tweet').slice(0, number);

				$tweets.each(function() {
					var $tweet = $(this),
						$time = $tweet.find('a.permalink'),
						$author = $tweet.find('div.header'),
						$content = $tweet.find('div.e-entry-content'),
						$detail = $tweet.find('div.detail-expander'),
						$footer = $tweet.find('div.footer');

					$tweet.append($time);

					$detail.remove();

					$footer.remove();

					$author.find('span.verified').remove();
				})

				$tweets.last().addClass('last');

				$('#mpcth_twitter_' + unique).append($tweets);

				$.post(ajaxurl, {
					action: 'cache_twitter',
					tweets: encodeURI($('#mpcth_twitter_' + unique).html()),
					id: id,
					number: number
				}, function(response) {
					
				});
			}

			src.type = 'text/javascript';
			src.src = '//cdn.syndication.twimg.com/widgets/timelines/' + id + '?&lang=en&callback=mpcthFetcher.callback_' + unique + '&suppress_response_codes=true';
			document.getElementsByTagName('head')[0].appendChild(src);
		}
	});

/* ---------------------------------------------------------------- */
/* Parallax Header
/* ---------------------------------------------------------------- */

	var $parallax_holder = $('#mpcth_header_image_holder'),
		$parallax_wrap = $('#mpcth_header_image_wrapper');

	if($parallax_holder.is('.mpcth-header-type-embed')) {
		var frame_height = parseInt($parallax_wrap.children('iframe').attr('height'));
		$parallax_holder.data({
			'height_4_4': frame_height,
			'height_3_4': frame_height * 0.75,
			'height_2_4': frame_height * 0.5,
			'height_1_4': frame_height * 0.25
		})
	}

	$window.on('scroll', function() {
		$parallax_wrap.css('top', $window.scrollTop() * 0.4);
	});

	$window.on('resize', function() {
		var width = $window.width();

		if(width < 480)
			$parallax_holder.height($parallax_holder.data('height_1_4'));
		else if(width < 768)
			$parallax_holder.height($parallax_holder.data('height_2_4'));
		else if(width < 960)
			$parallax_holder.height($parallax_holder.data('height_3_4'));
		else
			$parallax_holder.height($parallax_holder.data('height_4_4'));
	});
});

var mpcthFetcher = {};

jQuery(window).load(function() {
	var $ = jQuery,
		$window = $(window);

/* ---------------------------------------------------------------- */
/* Minimal Page Height
/* ---------------------------------------------------------------- */

	var $mpcth_page_container = $('#mpcth_page_container'),
		is_footer_hidden = $('#mpcth_footer_content').is('.mpcth-footer-hidden'),
		footer_content_height = is_footer_hidden ? 0 : $('#mpcth_footer_content').height(),
		is_admin = $('#wpadminbar').length > 0,
		admin_panel_height = is_admin ? 28 : 0,
		min_height = $mpcth_page_container.height() + $window.height() - $('body').height() - admin_panel_height + footer_content_height;

	$mpcth_page_container.css('min-height', min_height);

/* ---------------------------------------------------------------- */
/* Pause/Resume Revoslider
/* ---------------------------------------------------------------- */

	$('.rev_slider_wrapper').each(function() {
		var $slider = $(this),
			id = $slider.attr('id').split('_')[2];
		
		if(window['revapi' + id] != null) {
			var temp = window['revapi' + id];

			temp.on('revolution.slide.onloaded', function() {
				temp.waypoint({
					offset: '0',
					handler: function(dir) {
						if(dir == 'down')
							temp.revpause();
						else
							temp.revresume();
					}
				});
				temp.waypoint({
					offset: '100%',
					handler: function(dir) {
						if(dir == 'down')
							temp.revresume();
						else
							temp.revpause();
					}
				});
			})

		}
	});

/* ---------------------------------------------------------------- */
/* Waypoint Animation
/* ---------------------------------------------------------------- */

	$.waypoints('refresh');

	$('.mpcth-waypoint-trigger').waypoint({
		offset: 'bottom-in-view',
		triggerOnce: true,
		handler: function() {
			$(this).trigger('viewportAnimation');
		}
	});

	$('#mpcth_footer').waypoint({
		offset: '100%',
		triggerOnce: true,
		handler: function() {
			$('.wpb_animate_when_almost_visible')
				.addClass('wpb_start_animation')
				.trigger('stackAnimation');
		}
	});
});