$(document).ready(function(){
	//плавный переход по якорям
    $(".menu nav a.anchor").on("click", function(e){
      e.preventDefault();
      var id = $(this).attr("href"),
          top = $(id).offset().top;
        $("html, body").animate({scrollTop: top}, 1000);
    });

    $(".menu nav a").on("click", function(e){
      e.preventDefault();
    });

    
    	$(window).scroll(function() {
   			if($(window).scrollTop() >= 100) {
   				$("#header").addClass("clone");
	    	} else {
	    		$("#header").removeClass("clone");
   			}   
	});﻿

    	//mobile menu
	$(function() {
			var pull 		= $('#pull');
				menu 		= $('nav');
				menuHeight	= menu.height();

			$(pull).on('click', function(e) {
				e.preventDefault();
				menu.slideToggle();
			});

			$(window).resize(function(){
        		var w = $(window).width();
        		if(w > 320 && menu.is(':hidden')) {
        			menu.removeAttr('style');
        		}
    		});
		});
	//mobile menu end

	
	$(".box .btn").on("mouseover", function(e){
		e.preventDefault();
		var basic = $(this).parent().parent().find(".basic");
		$(this).css({"background-color" : "#49cbcd", "transition":"0.5s ease"});
		$(basic).css({"background-color" : "#49cbcd", "transition":"0.5s ease"});
	});

	$(".box .btn").on("mouseout", function(e){
		e.preventDefault();
		var basic = $(this).parent().parent().find(".basic");
		$(this).css({"background-color" : "#788492", "transition":"0.5s ease"});
		$(basic).css({"background-color" : "#485460", "transition":"0.5s ease"});
	});
   
});