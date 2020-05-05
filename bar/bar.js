( function( $ ) {

	$('.theme_panel .toggle_bts').on('click', 'a.sett', function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
            $('.theme_panel').removeClass('active');
		}
		else {
			$(this).addClass('active');
            $('.theme_panel').addClass('active');
		}
		return false;
	});

	//colors panel
	$('.theme_panel .layout_style').on('click', 'a', function(){
		$(this).closest('.segment').find('a').removeClass('active');
		$(this).addClass('active');

		var color = $(this).attr('data-color');
        
        if( !$('#demo_animate_css').length ) {
        	$('head').append('<link rel="stylesheet" id="demo_layout_css" href="css/template-colors/'+color+'.css" />');
        } else {
        	$('#demo_layout_css').attr('href', 'css/template-colors/'+color+'.css');
        }
        return false;
	});
    
    //dark panels
    $('.theme_panel .dark_style').on('click', 'a', function(){
    	$(this).closest('.demo_list').find('a').removeClass('active');
		$(this).addClass('active');
    	
		var dark = $(this).attr('data-dark');

		if(dark == 'dark') {
			if (!$('#demo_dark_css').length)
            	$('head').append('<link rel="stylesheet" id="demo_dark_css" href="css/template-dark/dark.css" />');
        } else if (dark == 'light') {
            $('#demo_dark_css').remove();
        }

        return false;
	});

} )( jQuery );