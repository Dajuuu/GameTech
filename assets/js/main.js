/**
* Template Name: Vlava - v2.2.1
* Template URL: https://bootstrapmade.com/vlava-free-bootstrap-one-page-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 15;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

//        if ($(this).parents('.nav-menu, .mobile-nav').length) {
//          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
//          $(this).closest('li').addClass('active');
//        }


      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
//  $(document).ready(function() {
//    if (window.location.hash) {
//      var initial_nav = window.location.hash;
//      if ($(initial_nav).length) {
//        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
//        $('html, body').animate({
//          scrollTop: scrollto
//        }, 1500, 'easeInOutExpo');
//      }
//    }
//  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

//      if (cur_pos >= top && cur_pos <= bottom) {
//        if (cur_pos <= bottom) {
//          main_nav.find('li').removeClass('active');
//        }
//        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
//      }
//      if (cur_pos < 300) {
//        $(".nav-menu ul:first li:first").addClass('active');
//      }
    });
  });

  // Toggle .header-scrolled class to #header when page is scrolled
    /* Added: making script to work only on the certain pages 
    */
$(window).scroll(function() {
//    if($location.pathname=='../index.html' || $location.pathname=='../games.html' || $location.pathname=='../tech.html'){
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            $('.mobile-nav-toggle').addClass('mobile-nav-toggle-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
            $('.mobile-nav-toggle').removeClass('mobile-nav-toggle-scrolled');
            }
});
if(location.pathname=='/index.html' || location.pathname=='/games.html' || location.pathname=='/tech.html'){
if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
    $('.mobile-nav-toggle').addClass('mobile-nav-toggle-scrolled');
} 
}
    
//      $(window).scroll(function() {
//    if ($(this).scrollTop() > 100) {
//      $('#header').addClass('header-scrolled');
//    } else {
//      $('#header').removeClass('header-scrolled');
//    }
//  });
//
//  if ($(window).scrollTop() > 100) {
//    $('#header').addClass('header-scrolled');  
//  } 
    
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.mobile-nav-toggle').addClass('mobile-nav-toggle-scrolled');
    } else {
      $('.mobile-nav-toggle').removeClass('mobile-nav-toggle-scrolled');
    }
  });
    

/* 
    This is the scroll-to-top-button function, that appears in the 
    bottom right corner of the screen after user is below fixed y coord.
    - This section was copied and modified
    - https://codepen.io/matthewcain/pen/ZepbeR
    - More in the report.html 
*/   
$(window).scroll(function() {
    if ($(window).scrollTop() > 400) {
        $('.scroll-to-top-button').fadeIn('slow');
    } 
    else {
        $('.scroll-to-top-button').fadeOut('slow');
    }
});

$('.scroll-to-top-button').click(function() {
    $('html, body').animate({scrollTop: 0}, 1200, 'easeInOutExpo');
    return false;
});
    
/* end of scroll to the top button*/
    
    
    
    
//$(document).ready(function(){
//    $(".shop-image-below").slice(0, 4).show();
//    $("#loadMore").on("click", function(e){
//        e.preventDefault();
//    $(".shop-image-below:hidden").slice(0, 4).slideDown(2000, 'linear');
//        
//    if($(".shop-image-below:hidden").length == 0) {
//        $("#loadMore").text("").addClass("noContent");
//    }
//  });
//})
$(document).ready(function(){
  $(".shop-image-below").slice(0, 4).show();
  $("#loadMore").on("click", function(e){
    e.preventDefault();
    $(".shop-image-below:hidden").slice(0, 4).slideDown();
    if($(".shop-image-below:hidden").length == 0) {
      $("#loadMore").text("").addClass("noContent");
    }
  });
})
//    $(document).ready(function(){
//    $(".shop-image-below").slice(0, 4).show();
//    $("#loadMore").on("click", function(e){
//        e.preventDefault();
//    $(".shop-image-below:hidden").slice(0, 4).slideDown(1000);
//    if($(".shop-image-below:hidden").length == 0) {
//        $("#loadMore").text("").addClass("noContent");
//    }
//  });
//})
    
})(jQuery);