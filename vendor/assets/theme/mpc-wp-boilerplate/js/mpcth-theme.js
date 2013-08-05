/*-----------------------------------------------------------------------------------*/
/*	Custom Theme JS
/*-----------------------------------------------------------------------------------*/

jQuery.noConflict();
jQuery(document).ready(function($) {

/*-----------------------------------------------------------------------------------*/
/*	Responsive Menu
/*-----------------------------------------------------------------------------------*/
	
	if($('#mpcth_page_header_content').find('#mpcth_logo').length == 0)
		$('#mpcth_logo').clone().appendTo('#mpcth_page_header_content').addClass('mpcth-hidden-desktop');

	// Create the dropdown base
	$('<div id="mpcth_mobile_nav" class="mpcth-hidden-desktop"><select id="mpcth-nav-select-menu"/><span class="mpcth-nav-select-mockup"><span class="mpcth-nav-select-border-left mpcth-sc-icon-menu"></span></span></div>').appendTo('#mpcth_page_header_content');
	
	// Populate dropdown with menu items
	$('#mpcth_nav a').each(function() {
		var el = $(this);
		var level = el.parents('li').length * 2 - 2;

		$('<option />', {
			'value' 	: el.attr('href'),
			'text' 		: ('- - - - - - - - - - - - ').substr(0, level) + el.text()
		}).appendTo('#mpcth-nav-select-menu');
	});	
	
	$('#mpcth-nav-select-menu').find('option').each( function(){
		var $this = $(this);
		if($(location).attr('href') == $this.val()){
			$this.attr('selected', 'selected');
		}
	});
	
	$("#mpcth-nav-select-menu").change(function() {
		window.location = $(this).find("option:selected").val();
	});

/* ---------------------------------------------------------------- */
/* Add '+' to Main Menu dropdowns
/* ---------------------------------------------------------------- */

	$subMenus = $('#mpcth_nav .sub-menu');
	$subMenus.each(function() {
		$this = $(this);
		$this.siblings('a').append('<span class="mpcth-drop-down-parent"> +</span>')
	});

/* ---------------------------------------------------------------- */
/*	Header Modifier
/* ---------------------------------------------------------------- */
	
	var isAdmin = $('#wpadminbar').length > 0,
		modifier = isAdmin ? 28 : 0;

	$('#mpcth_page_header_wrap').css('top', modifier);

/* ---------------------------------------------------------------- */
/*	Footer Hidder
/* ---------------------------------------------------------------- */

	var $footer = $('#mpcth_footer'),
		$footer_content = $('#mpcth_footer_content'),
		$page = $('html, body');

	if($footer.is('.mpcth-footer-toggleable')) {
		$footer.on('mouseleave', function() {
			$footer_content.stop(true, true).slideUp();
		})

		$footer.on('mouseenter', function() {
			$footer_content.stop(true, true).slideDown({
				progress: function() {
					$page.scrollTop($page.height());
				}
			});
		})
	}

/* ---------------------------------------------------------------- */
/*	Search Click
/* ---------------------------------------------------------------- */

	var searchOpen = false;

	$('.mpcth-search-block .mpcth-sc-icon-search').on('click', function() {
		var header = $('#mpcth_page_header_wrap');

		if(!searchOpen) {
			header.find('#mpcth_menu, .mpcth-search-block').animate({ opacity: 0 }, 300, function() {
				header.find('.mpcth-search-wrap #searchform').css('display', 'inline-block');
				header.find('.mpcth-search-wrap #searchform').animate({ opacity: 1 }, 300);
				header.find('.mpcth-search-wrap #searchform .mpcth-search').trigger('focus');
			});
			
			searchOpen = true;
		} 
	});

	$('#mpcth_page_header_wrap #searchform .mpcth-search').on('blur', function() {
		var header = $('#mpcth_page_header_wrap');

		if(searchOpen) {
			header.find('.mpcth-search-wrap #searchform').stop(true).animate({ opacity: 0 }, 300, function() {
				header.find('.mpcth-search-wrap #searchform').css('display', 'none');
				header.find('#mpcth_menu, .mpcth-search-block').stop(true).animate({ opacity: 1 }, 300);
			});
			
			searchOpen = false;
		} 
	});
});