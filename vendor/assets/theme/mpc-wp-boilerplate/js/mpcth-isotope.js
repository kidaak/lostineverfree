jQuery(document).ready(function($) {

/* ---------------------------------------------------------------- */
/* Variables
/* ---------------------------------------------------------------- */
	var max_pages = parseInt(paginationInfo.max_pages),
		posts_count = parseInt(paginationInfo.posts_count),
		posts_per_page = parseInt(paginationInfo.posts_per_page),
		post_type = paginationInfo.post_type,
		page = parseInt(paginationInfo.page) + 1,
		path = paginationInfo.path,
		next_page_link = paginationInfo.next_page_link,
		loading_text = paginationInfo.loading_text,
		load_more_text = paginationInfo.load_more_text,
		columns_number = parseInt(paginationInfo.blog_post_columns_number),
		effect_type = paginationInfo.blog_type,
		customs = paginationInfo.custom,

		mpcth_settings = paginationInfo.mpcth_settings,

		$load_more = $('#mpcth-lm'),
		$button = $('.mpcth-lm-button'),
		$container = $("#mpcth_page_articles"),
		$loaded = $('.mpcth-lm-info'),

		is_masonry = $container.is('.mpcth-masonry'),

		cwidth = $container.width(),
		externalMarginLeft = 0,
		externalMarginRight = 0,
		colNum = 0,
		colWidth = 0,
		currentURL = '',
		currentPosts = page > max_pages? posts_count : (page - 1) * posts_per_page,
		canUpdateURL = typeof history.pushState === "function" ? true : false;

	$loaded.text(currentPosts + ' / ' + posts_count);
	
	if(posts_count <= posts_per_page) 
		$load_more.hide();

/* ---------------------------------------------------------------- */
/* Refreshing events
/* ---------------------------------------------------------------- */

	var spinner = addLoadMore();
	$(window).load(function (){
		$container.hide().fadeTo(250, 1);
		if(is_masonry)
			$container.isotope({
				resizable: false,
				animationEngine: 'css',
				masonry: { 
					columnWidth: colWidth + (externalMarginLeft + externalMarginRight)
				}
			});
		spinner.stop();
		if(is_masonry)
			$container.isotope('reLayout');
	});

	var videoLoadTimeout;

	$(window).on('MediaPlayerLoaded', function() {
		clearTimeout(videoLoadTimeout);

		$(window).trigger('resize');

		$('.mejs-container').css('visibility', 'visible');

		setTimeout(function(player) {
			$(window).trigger('resize');
		}, 300)
	})

/* ---------------------------------------------------------------- */
/* Isotope
/* ---------------------------------------------------------------- */

	if(is_masonry)
		initIsotope();

	function initIsotope() {
		$(window).on('isotopeResize', mpcth_resize_isotope);

		mpcth_column_width();

		$(window).resize(function(){
			mpcth_resize_isotope();
		});
	}

	function mpcth_resize_isotope(){
		mpcth_column_width();

		$container.isotope({ masonry: { columnWidth: colWidth + (externalMarginLeft + externalMarginRight) } });
	}

	function mpcth_column_width() {
		cwidth = $container.width();
	
		if(effect_type == 'masonry') {
			if(cwidth < 650) {
				colNum = 1;
			} else {
				colNum = columns_number;
			}

			if(colNum == 0) colNum = 1;
		
			colWidth = Math.floor(cwidth / colNum) - (externalMarginLeft + externalMarginRight);
		} else {
			colWidth = cwidth - (externalMarginLeft + externalMarginRight);
		}
	}

/* ---------------------------------------------------------------- */
/* Load More
/* ---------------------------------------------------------------- */

	$load_more.on('click', initLoadMore);

	function initLoadMore(e) {
		$load_more.off('click');

		if (page <= max_pages) {
			$button.text(loading_text);

			var spinner = addLoadMore();
			
			$('#mpcth-lm-container').load(path + '/mpc-wp-boilerplate/php/parts/load-more.php',
				{
					offset: posts_per_page * (page - 1),
					post_type: post_type,
					mpcth_settings: mpcth_settings,
					posts_per_page: posts_per_page,
					customs: customs,
					modern_meta: $('#mpcth_page_container').is('.meta-type-modern'),
					blog_compressed: $('#mpcth_page_container').is('.blog-type-compressed')
				},
				function() {

					videoLoadTimeout = setTimeout(function() {
						$(window).trigger('MediaPlayerLoaded');
					}, 2000);

					var $posts = $(this).children();
						
					page++;

					if(next_page_link.indexOf('page/') != -1) {
						next_page_link = next_page_link.replace(/page\/[0-9]+\//, 'page/' + page + '/');
						currentURL = next_page_link.replace(/page\/[0-9]+\//, 'page/' + (page - 1) + '/');
					} else {
						next_page_link = next_page_link.replace(/paged=[0-9]+/, 'paged=' + page);
						currentURL = next_page_link.replace(/paged=[0-9]+/, 'paged=' + (page - 1));
					}

					if (page <= max_pages) {
						$button.text(load_more_text);
						$loaded.text((posts_per_page * (page - 1)) + ' / ' + posts_count);
					} else {
						$load_more.hide();
						$loaded.text(posts_count + ' / ' + posts_count);
					}
					
					$posts.css({'opacity' : 0 });
					
					$container.append($posts);

					spinner.stop();
					
					$posts.addClass('no-transition');
					
					$container.imagesLoaded(function() {
						if(is_masonry)
							mpcth_resize_isotope();
						reinitGallery($posts);

						if(is_masonry) {
							$container.isotope('addItems', $posts, function() {
								mpcth_resize_isotope();

								$posts.animate({ 'opacity' : 1}, 1000, 'easeOutExpo', function() {
									$posts.removeClass('no-transition');
								});

								updateCategoryButtons();

								$load_more.on('click', initLoadMore);
							});
						} else {
							$posts.animate({ 'opacity' : 1}, 1000, 'easeOutExpo', function() {
								$posts.removeClass('no-transition');
							});

							updateCategoryButtons();

							$load_more.on('click', initLoadMore);
						}
					});

					if(canUpdateURL)
						history.pushState(null, null, currentURL);
				}
			);
		} else {
			$load_more.hide();
		}

		e.preventDefault();
	}

/* ---------------------------------------------------------------- */
/* Load More Categories
/* ---------------------------------------------------------------- */

	$('.mpcth-filterable-categories ul li').on('click', function() {
		var $this = $(this);
		var selector = '';

		$this.siblings().removeClass('active');
		$this.addClass('active');

		if($(this).data('link') == 'post')
			selector = '.' + $(this).data('link');
		else
			selector = '.category-' + $(this).data('link');
		
		$container.isotope({ filter: selector });
		return false;
	})

	function updateCategoryButtons() {
		$('.mpcth-filterable-categories ul li').each(function() {
			if($(this).data('link') == 'post')
				selector = '.' + $(this).data('link');
			else
				selector = '.category-' + $(this).data('link');

			if($container.find(selector).length == 0) {
				$(this).hide();
			} else {
				$(this).fadeIn(500, function() {
					$(this).css('display', 'inline-block');
				});
			}
		})
	}

	updateCategoryButtons();

/* ---------------------------------------------------------------- */
/* Gallery after Load More
/* ---------------------------------------------------------------- */

	function reinitGallery($posts) {
		$posts.find('.wpb_flexslider').each(function() {
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
	}

});