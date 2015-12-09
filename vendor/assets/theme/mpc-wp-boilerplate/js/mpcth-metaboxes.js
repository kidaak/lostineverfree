jQuery(document).ready(function($) {
/* ---------------------------------------------------------------- */
/*	Custom Meta Boxes
/* ---------------------------------------------------------------- */

	// Move Post Settings below Post Editor 
	var post_settings = $('.mpcth-meta-box');
	var composer = post_settings.siblings('#wpb_visual_composer');

	if(composer.length) {
		post_settings.insertAfter(composer);
	} else {
		post_settings.siblings().first().before(post_settings);
	}

	// Hide top area & Display top area columns
	var $custom_top_area_hide = $('#mpcth_otc_hide_top_area'),
		$custom_top_area = $('#mpcth_otc_custom_top_area'),
		$custom_top_area_wrap = $custom_top_area.parents('.mpcth-of-section'),
		$custom_top_area_select = $('#mpcth_otc_custom_top_area_select'),
		$custom_top_area_select_wrap = $custom_top_area_select.parents('.mpcth-of-section'),
		$custom_top_area_columns = $('#mpcth_otc_top_area_columns'),
		$custom_top_area_columns_wrap = $custom_top_area_columns.parents('.mpcth-of-section');

		custom_top_area_next = $custom_top_area.parents('.mpcth-of-section').next('.mpcth-of-section');

	function displayCustomTopAreaCustom() {
		if(!$custom_top_area_hide.is(':checked')) {
			$custom_top_area_wrap.stop().slideDown();
			displayCustomTopAreaSelect();
		} else {
			$custom_top_area_wrap.stop().slideUp();
			$custom_top_area_select_wrap.stop().slideUp();
			$custom_top_area_columns_wrap.stop().slideUp();
		}
	}

	function displayCustomTopAreaSelect() {
		if($custom_top_area.is(':checked')) {
			$custom_top_area_select_wrap.stop().slideDown();
			displayCustomTopAreaColumns();
		} else {
			$custom_top_area_select_wrap.stop().slideUp();
			$custom_top_area_columns_wrap.stop().slideUp();
		}
	}

	function displayCustomTopAreaColumns() {
		if($custom_top_area_select.children(':selected')[0].index == 0) {
			$custom_top_area_columns_wrap.stop().slideDown();
		} else {
			$custom_top_area_columns_wrap.stop().slideUp();
		}
	}

	$custom_top_area_hide.on('click', displayCustomTopAreaCustom);

	$custom_top_area.on('click', displayCustomTopAreaSelect);

	$custom_top_area_select.on('change', displayCustomTopAreaColumns);

	displayCustomTopAreaCustom();

	// Change Header Type
	var $of_show_header = $('#mpcth_show_header'),
		$of_show_header_parent = $of_show_header.parents('.mpcth-of-section'),
		$of_header_heading = $('.mpcth-of-header'),
		$of_header_type = $('#mpcth_header_type'),
		$of_header_type_parent = $of_header_type.parents('.mpcth-of-section'),
		$of_header_type_link = $('.mpcth-of-header-link'),
		$of_header_type_text = $('.mpcth-of-header-text');

	$of_show_header.on('change', function() {
		if($of_show_header.is(':checked')) {
			$of_header_heading.slideDown();
			$of_header_type_parent.slideDown();
			$of_header_type.trigger('change');
		} else {
			$of_show_header_parent.siblings().slideUp();
		}
	})
	$of_show_header.trigger('change');

	$of_header_type.on('change', function() {
		if($of_header_type.val() == 'link') {
			$of_header_type_link.slideDown();
			$of_header_type_text.slideUp();
		} else if($of_header_type.val() == 'text') {
			$of_header_type_link.slideUp();
			$of_header_type_text.slideDown();
		} else {
			$of_header_type_link.slideUp();
			$of_header_type_text.slideUp();
		}
	})
	$of_header_type.trigger('change');


	var $of_custom_footer = $('#mpcth_show_footer'),
		$of_custom_footer_toggle = $('#mpcth_toggle_footer'),
		$of_custom_footer_toggle_wrap = $of_custom_footer_toggle.parents('.mpcth-of-section'),
		$of_custom_footer_hide = $('#mpcth_hide_footer'),
		$of_custom_footer_hide_wrap = $of_custom_footer_hide.parents('.mpcth-of-section'),
		$of_custom_footer_columns = $('#mpcth_footer_columns'),
		$of_custom_footer_columns_wrap = $of_custom_footer_columns.parents('.mpcth-of-section');

	function of_displayFooter() {
		if($of_custom_footer.is(':checked')) {
			$of_custom_footer_columns_wrap.stop().slideDown();
			$of_custom_footer_toggle_wrap.stop().slideDown();
			of_displayToggle();
		} else {
			$of_custom_footer_columns_wrap.stop().slideUp();
			$of_custom_footer_toggle_wrap.stop().slideUp();
			$of_custom_footer_hide_wrap.stop().slideUp();
		}
	}

	function of_displayToggle() {
		if($of_custom_footer_toggle.is(':checked')) {
			$of_custom_footer_hide_wrap.stop().slideDown();
		} else {
			$of_custom_footer_hide_wrap.stop().slideUp();
		}
	}

	$of_custom_footer.on('click', of_displayFooter);

	$of_custom_footer_toggle.on('change', of_displayToggle);

	of_displayFooter();
	of_displayToggle();


	// Display footer columns
	var $custom_footer = $('#mpcth_otc_custom_footer'),
		$custom_footer_toggle = $('#mpcth_otc_toggle_footer'),
		$custom_footer_toggle_wrap = $custom_footer_toggle.parents('.mpcth-of-section'),
		$custom_footer_hide = $('#mpcth_otc_hide_footer'),
		$custom_footer_hide_wrap = $custom_footer_hide.parents('.mpcth-of-section'),
		$custom_footer_select = $('#mpcth_otc_custom_footer_select'),
		$custom_footer_select_wrap = $custom_footer_select.parents('.mpcth-of-section'),
		$custom_footer_columns = $('#mpcth_otc_footer_columns'),
		$custom_footer_columns_wrap = $custom_footer_columns.parents('.mpcth-of-section');

	function displayCustomFooterSelect() {
		if($custom_footer.is(':checked')) {
			$custom_footer_select_wrap.stop().slideDown();
			$custom_footer_toggle_wrap.stop().slideDown();
			displayCustomFooterColumns();
		} else {
			$custom_footer_select_wrap.stop().slideUp();
			$custom_footer_columns_wrap.stop().slideUp();
		}
	}

	function displayCustomFooterColumns() {
		if($custom_footer_select.children(':selected')[0].index == 0) {
			$custom_footer_columns_wrap.stop().slideDown();
		} else {
			$custom_footer_columns_wrap.stop().slideUp();
		}
	}

	$custom_footer.on('click', displayCustomFooterSelect);

	$custom_footer_select.on('change', displayCustomFooterColumns);

	displayCustomFooterSelect();
	
	function displayCustomFooterHide() {
		if($custom_footer_toggle.val() == 'on') {
			$custom_footer_hide_wrap.stop().slideDown();
		} else {
			$custom_footer_hide_wrap.stop().slideUp();
		}
	}

	$custom_footer_toggle.on('change', displayCustomFooterHide);

	displayCustomFooterHide();



	// Display custom lightbox 
	var custom_lightbox = $('#mpcth_otc_lightbox_enabled'),
		custom_lightbox_next = custom_lightbox.parents('.mpcth-of-section').nextAll();

	custom_lightbox.on('click', function() {
		custom_lightbox.is(':checked') ? custom_lightbox_next.slideDown() : custom_lightbox_next.slideUp();
	});

	custom_lightbox.is(':checked') ? custom_lightbox_next.slideDown() : custom_lightbox_next.slideUp();



	// Display custom sidebar
	var custom_sidebar_position_check = $('#mpcth_otc_custom_sidebar_position'),
		custom_sidebar_position_check_parent = custom_sidebar_position_check.parents('.mpcth-of-section'),

		custom_sidebar_position = $('#mpcth_otc_sidebar_right, #mpcth_otc_sidebar_none, #mpcth_otc_sidebar_left'),
		custom_sidebar_position_parent = custom_sidebar_position.parents('.mpcth-of-section'),

		custom_sidebar = $('#mpcth_otc_custom_sidebar'),
		custom_sidebar_parent = custom_sidebar.parents('.mpcth-of-section'),

		custom_sidebar_select = $('#mpcth_otc_custom_sidebar_select'),
		custom_sidebar_select_parent = custom_sidebar_select.parents('.mpcth-of-section');

	custom_sidebar_position_check.on('change', function() {
		if(custom_sidebar_position_check.is(':checked')) {
			custom_sidebar_position_parent.stop(true).slideDown();
			custom_sidebar_position.trigger('change');
		} else {
			custom_sidebar_position_check_parent.siblings().stop(true).slideUp();
		}
	})
	custom_sidebar_position_check.trigger('change');

	custom_sidebar_position.on('change', function() {
		if($(this).is(':checked'))
			if(custom_sidebar_position.filter(':checked').val() != 'none') {
				custom_sidebar_parent.stop(true).slideDown();
				custom_sidebar.trigger('change');
			} else {
				custom_sidebar_parent.stop(true).slideUp();
			}
	})

	custom_sidebar.on('change', function() {
		if(custom_sidebar.is(':checked')) {
			custom_sidebar_select_parent.stop(true).slideDown();

		} else {
			custom_sidebar_select_parent.stop(true).slideUp();
		}
	})

/* ---------------------------------------------------------------- */
/* Showreel Background
/* ---------------------------------------------------------------- */

	var $sr_background = $('#mpcth_otc_background_type'),
		$sr_types = $('.mpcth-showreel-type-image, .mpcth-showreel-type-gallery, .mpcth-showreel-type-embed')

	$sr_background.on('change', function() {
		$sr_types.stop(true, true).slideUp();
		$('.mpcth-showreel-type-' + $sr_background.val()).stop(true, true).slideDown();
	})
	$sr_background.trigger('change');

/* ---------------------------------------------------------------- */
/* Blog & Portfolio Settigs
/* ---------------------------------------------------------------- */

	$('#mpcth_otc_blog_type, #mpcth_otc_portfolio_type').on('change', switchType);
	switchType();

	function switchType() {
		if($('#mpcth_otc_blog_type').val() == 'masonry'){
			$('#mpcth_otc_blog_pagination').val('loadmore').change().parents('.mpcth-of-section').slideUp();
		} else {
			$('#mpcth_otc_blog_pagination').parents('.mpcth-of-section').slideDown();
		}
	}

	$('#mpcth_otc_blog_pagination, #mpcth_otc_portfolio_pagination').on('change', switchPagination);
	switchPagination();

	function switchPagination() {
		if($('#mpcth_otc_blog_pagination').val() == 'loadmore') {
			$('#mpcth_otc_blog_lm_info, #mpcth_otc_blog_category_filter').parents('.mpcth-of-section').slideDown();
		} else { 
			$('#mpcth_otc_blog_lm_info, #mpcth_otc_blog_category_filter').parents('.mpcth-of-section').slideUp();
		}
	}

/* ---------------------------------------------------------------- */
/* Custom Post Types
/* ---------------------------------------------------------------- */

	if($('#post-formats-select').length) {
		displayPostFormatType($('#post-formats-select input:checked').val());

		$('#post-formats-select input').on('change', function() {
			displayPostFormatType($(this).val());
		});
	}

	function displayPostFormatType(type) {
		if(type == 0) type = 'standard';

		$('.mpcth-meta-box .mpcth-post-format-setup .mpcth-of-section').stop().slideUp();
		$('.mpcth-meta-box div.mpcth-post-format-all, .mpcth-meta-box div.mpcth-post-format-' + type).stop().slideDown();
	}

/* ---------------------------------------------------------------- */
/* Disable Lightbox On Post Types Different Then Image/Gallery
/* ---------------------------------------------------------------- */

	if($('#post-formats-select').length) {
		toggleLightboxSettings($('#post-formats-select input:checked').val());

		$('#post-formats-select input').on('change', function() {
			toggleLightboxSettings($(this).val());
		});
	}

	function toggleLightboxSettings(type) {
		if(type == 0) type = 'standard';
		var $section = $('.mpcth-of-lightbox-settings');

		if(type == 'image' || type == 'gallery' || type == 'standard') {
			$('.mpcth-of-lightbox-settings').stop().slideDown();
		} else {
			$('.mpcth-of-lightbox-settings').stop().slideUp();

			if($section.hasClass('mpcth-of-ac-open'))
				$section.click();

			if($('#mpcth_otc_lightbox_enabled').is(':checked'))
				$('#mpcth_otc_lightbox_enabled').click();
		}
	}

/* ---------------------------------------------------------------- */
/* Custom Page Template
/* ---------------------------------------------------------------- */

	if($('#page_template').length) {
		displayPageFormatType($('#page_template').val());

		$('#page_template').on('change', function() {
			displayPageFormatType($(this).val());
		});
	}

	function displayPageFormatType(type) {
		var $sidebars = $('#mpcth_otc_custom_sidebar_position').parents('.mpcth-of-accordion-content');
		$sidebars.stop(true, true).slideDown();
		$sidebars.prev('.mpcth-of-accordion-heading').stop(true, true).slideDown();

		switch(type) {
			case 'blog-template.php':
				var id = '#mpcth_blog_settings';
				break;
			case 'full-width-template.php':
				var id = '#mpcth_full_width_settings';
				$sidebars.slideUp();
				$sidebars.prev('.mpcth-of-accordion-heading').slideUp();
				break;
			case 'home-template.php':
				var id = '#mpcth_home_settings';
				break;
			case 'portfolio-template.php':
				var id = '#mpcth_portfolio_settings';
				break;
			case 'showreel-template.php':
				var id = '#mpcth_showreel_settings';
				$sidebars.slideUp();
				$sidebars.prev('.mpcth-of-accordion-heading').slideUp();
				break;
			default:
				var id = '';
		}

		$('.mpcth-meta-box:not(#mpcth_page_settings)').stop().fadeOut();
		$(id).stop().delay(200).fadeIn();
	}

/* ---------------------------------------------------------------- */
/* Team Skills
/* ---------------------------------------------------------------- */

	var $skills = $('#mpcth_team_skillchecklist input');

	if($('#mpcth_team_skillchecklist').length) {
		displaySelectedSkills();

		$skills.on('change', displaySelectedSkills);
	}

	function displaySelectedSkills() {
		$skills.each(function() {
			var $skill = $(this);

			if($skill.is(':checked'))
				$('.mpcth-of-section-skill-' + $skill.val()).slideDown();
			else
				$('.mpcth-of-section-skill-' + $skill.val()).stop(true, true).slideUp();
		})
	}

/* ---------------------------------------------------------------- */
/* Fullwidth
/* ---------------------------------------------------------------- */

	var $headerSelect_fw = $('.mpcth-fw-header-select');
	$headerSelect_fw.on('change', toggleHeaderContent_fw);

	function toggleHeaderContent_fw() {
		$('.mpcth-fw-header-image, .mpcth-fw-header-gallery, .mpcth-fw-header-embed, .mpcth-fw-header-shortcode').height('').slideUp();
		$('.mpcth-fw-header-' + $headerSelect_fw.val()).stop(true, true).slideDown();
	}

	toggleHeaderContent_fw();

/* ---------------------------------------------------------------- */
/* Home
/* ---------------------------------------------------------------- */

	var $headerSelect_home = $('.mpcth-home-header-select');
	$headerSelect_home.on('change', toggleHeaderContent_home);

	function toggleHeaderContent_home() {
		$('.mpcth-home-header-image, .mpcth-home-header-gallery, .mpcth-home-header-embed, .mpcth-home-header-shortcode').height('').slideUp();
		$('.mpcth-home-header-' + $headerSelect_home.val()).stop(true, true).slideDown();
	}

	toggleHeaderContent_home();

/* ---------------------------------------------------------------- */
/* Gallery Upload
/* ---------------------------------------------------------------- */

	$('.upload_gallery_button').on('click', function(e) {
		var $this = $(this);
			ids = $this.siblings('.mpcth-gallery-images-val').val();
		if(ids == '') ids = ' ';
		
		var $gallery = wp.media.gallery.edit('[gallery ids="' + ids + '"]');

		$gallery.on('update', function(obj) {
			var images = obj.models;
			var list = [];
			var markup = '';

			for(i = 0; i < images.length; i++) {
				list[i] = images[i].id;
				markup += '<img width="100" height="100" src="' + images[i].attributes.sizes.thumbnail.url + '" class="mpcth-gallery-image" alt="Gallery image ' + i + '">';
			}

			$this.siblings('.mpcth-gallery-images-val').val(list.join(','));
			$this.siblings('.mpcth-gallery-images-wrap').html(markup);
		})

		e.preventDefault();
	})

/* ---------------------------------------------------------------- */
/* Patterns
/* ---------------------------------------------------------------- */

	var $patterns = $('#section-mpcth_background_pattern input');

	if($patterns.filter(':checked').length == 0)
		$patterns.first().attr('checked', 'checked').nextAll('img:first').addClass('of-radio-img-selected');

/* ---------------------------------------------------------------- */
/* Widget Column
/* ---------------------------------------------------------------- */

	var $widget_area_type = $('#mpcth_otc_widget_area_type'),
		$widget_area_columns = $('#mpcth_otc_widget_area_columns').parents('.mpcth-of-section');

	$widget_area_type.on('change', function() {
		displayWidgetAreaColumns();
	});

	function displayWidgetAreaColumns() {
		if($widget_area_type.val() == 'sidebar')
			$widget_area_columns.stop().slideUp();
		else
			$widget_area_columns.stop().slideDown();
	}

	displayWidgetAreaColumns();

/* ---------------------------------------------------------------- */
/* Blog Layout
/* ---------------------------------------------------------------- */

	var $blog_layout = $('#mpcth_otc_blog_layout'),
		$side_meta_parent = $('#mpcth_otc_meta_layout').parents('.mpcth-of-section');

	$blog_layout.on('change', function() {
		if($blog_layout.val() == 'compressed') {
			$side_meta_parent.slideUp();
		} else {
			$side_meta_parent.slideDown();
		}
	})
	$blog_layout.trigger('change');

/* ---------------------------------------------------------------- */
/* Custom Header
/* ---------------------------------------------------------------- */

	var $hide_header = $('#mpcth_otc_hide_header'),
		$hide_header_parent = $hide_header.parents('.mpcth-of-section'),
		$show_header = $('#mpcth_otc_custom_header'),
		$show_header_parent = $show_header.parents('.mpcth-of-section'),
		$header_heading = $('.mpcth-of-header'),
		$header_type = $('#mpcth_otc_header_type'),
		$header_type_parent = $header_type.parents('.mpcth-of-section'),
		$header_type_link = $('.mpcth-of-header-link'),
		$header_type_text = $('.mpcth-of-header-text');

	$hide_header.on('change', function() {
		if(!$hide_header.is(':checked')) {
			$show_header_parent.stop(true).slideDown();
			$show_header.trigger('change');
		} else {
			$hide_header_parent.siblings().stop(true).slideUp();
		}
	})
	$hide_header.trigger('change');

	$show_header.on('change', function() {
		if($show_header.is(':checked')) {
			$header_heading.stop(true).slideDown();
			$header_type_parent.stop(true).slideDown();
			$header_type.trigger('change');
		} else {
			$show_header_parent.siblings().stop(true).slideUp();
			$hide_header_parent.stop(true).slideDown();
		}
	})
	$show_header.trigger('change');

	$header_type.on('change', function() {
		if($header_type.val() == 'link') {
			$header_type_link.stop(true).slideDown();
			$header_type_text.stop(true).slideUp();
		} else if($header_type.val() == 'text') {
			$header_type_link.stop(true).slideUp();
			$header_type_text.stop(true).slideDown();
		} else {
			$header_type_link.stop(true).slideUp();
			$header_type_text.stop(true).slideUp();
		}
	})
	$header_type.trigger('change');

/* ---------------------------------------------------------------- */
/* Hide Unused Portfolio Types
/* ---------------------------------------------------------------- */

	var $post_type = $('#post_type');
	
	if($post_type.val() == 'portfolio') {
		$('#post-formats-select input').each(function() {
			var $input = $(this);

			if($input.is('#post-format-aside, #post-format-link, #post-format-status, #post-format-quote')) {
				$input.add($input.nextUntil('input')).remove();
			}
		});
	}
});