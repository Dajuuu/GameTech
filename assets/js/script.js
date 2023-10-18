!(function($) {
  "use strict";

//--------------------------------------------    
// Mobile Navigation
// ***
// This part was kept almost without any change as this was exactly what I needed
//  - changed: some variable names
    
    // changes the look of the header, depending on the screen width
    if ($('.nav-menu').length) {
        var mobile_nav = $('.nav-menu').clone().prop(
        {class: 'mobile-nav d-lg-none'});

        // Adding classes to the html - those classes are responsible for adding a dark overlay behind the nav-bar box, as well as the nav-bar icon indicatior 
        $('body').append(mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overlay"></div>');

        // Changes the icons when clicked
        $(document).on('click', '.mobile-nav-toggle', function() {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overlay').toggle();
        });
        
        // When user clicks on the screen outside of the nav-bar box, the bar itself fades out
        $(document).click(function(fadeOutBox) {
            
            var container = $(".mobile-nav, .mobile-nav-toggle");
            
            if (!container.is(fadeOutBox.target) && container.has(fadeOutBox.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
                    $('.mobile-nav-overlay').fadeOut();
                }
            }
        });
        
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
        $(".mobile-nav, .mobile-nav-toggle").hide();
        }

//--------------------------------------------
// Changes the header size and positioning when scrolled
// ***
// Adds the .header-scrolled class to the #header and .mobile-nav-toggle-scrolled to the .mobile-nav-toggle  
// .mobile-nav-toggle-scrolled changes the position of nav-bar icon when header shrinks
//  - added: whole .mobile-nav-toggle behaviour
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            $('.mobile-nav-toggle').addClass('mobile-nav-toggle-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
            $('.mobile-nav-toggle').removeClass('mobile-nav-toggle-scrolled');
        }
    });

//--------------------------------------------
// This part makes the nav-bar menu more responsive - when the header becomes smaller, the navbar changes its position
// - This code was written by myself

    $(window).scroll(function() {

        var barPos = $('.mobile-nav');

        if ($(this).scrollTop() > 100) {
            $(barPos).css("top", "70px");
        } else {
            $(barPos).css("top", "100px");
        }
    });       

//--------------------------------------------
// Scroll to top
// ***
// This is the scroll-to-top-button function, that appears in the 
// bottom right corner of the screen after user is below fixed y coord.
//  - changed: the y coordinate, animation time length

    $(window).scroll(function() {
        if ($(window).scrollTop() > 400) {
            $('.scroll-to-top-button').fadeIn('slow');
        } 
        else {
            $('.scroll-to-top-button').fadeOut('slow');
        }
    });

    //easing animation
    $('.scroll-to-top-button').click(function() {
        $('html, body').animate({scrollTop: 0}, 1200, 'easeInOutExpo');
        return false;
    });
    
//--------------------------------------------
// Dark mode
// ***
// This is the dark mode function, that appears in the 
// bottom right corner of the screen, above the scroll-to-top-button, after user is below fixed y coord.
//  - the $(window) part was coppied and adapted from scroll-to-top part
//  - Everything after that was written by me

    $(window).scroll(function() {
        if ($(window).scrollTop() > 20) {
            $('.dark-mode-button').fadeIn('slow');
        } 
        else {
            $('.dark-mode-button').fadeOut('slow');
        }
    });
    
    //when user clicks the button some sections of the page changes colour 
    $('.dark-mode-button').click(function() {
        //this applies to all pages
        $('.newsletter-header').toggleClass("color-change-to-white-text");
        $('.head-title').toggleClass("color-change-to-white-text");
        $('.section-color-ghostwhite').toggleClass("color-change-from-ghostwhite");
        $('.section-color-white').toggleClass("color-change-from-white");
        $('.mobile-nav').toggleClass("color-change-bg");
        
        //games/tech page
        $('.section-color-gray').toggleClass("color-change-from-gray");
        $('.news-text-color').toggleClass("color-change-to-white-text");
        
        //shop page
        $('.section-color-lightgray').toggleClass('color-change-from-lightgray');
        $('.section-color-lightgreen').toggleClass('color-change-from-lightgreen');
        
        //contact page
        $('.contact .header').toggleClass("color-change-to-white-text");
        return false;
    });
    
//--------------------------------------------
// Progress bar
// ***
// When user scrolls the progress bar indicates how long is to reach the bottom of the page
// - This code was written by myself

    $(window).scroll(function() {
        
        // calculating y position
        var yCoord = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var line = yCoord / pageHeight * 100;

        $(".progressBar").css("width", line + "%");
        
        // progress bar is not visible at the top of the page
        if ($(window).scrollTop() > 100 && $(window).width() > 991) {
            $(".progressBar").css("opacity" , "0.7"); 
        } else {
            $(".progressBar").css("opacity" , "0");
        }
    });
    
//--------------------------------------------    
// This is the alert that pops up when clicking buttons and images on the shop page
// - This code was written by myself

    var btnAlert = $('.shop-image .description .btn , .shop-image-below');
    
    $(btnAlert).click(function() {
        alert("Coming soon!");
    });

//--------------------------------------------
// This is the "Load More" button behaviour on the shop page
// - This section was copied and modified 
// - https://codepen.io/Tigran_91/pen/JyaZPz 
// - More in the report.html in Load more section

    $(document).ready(function(){
        $(".shop-image-below").slice(0, 4).show();

        $("#loadMore").on("click", function(loadMoreBtn){

            loadMoreBtn.preventDefault();
            $(".shop-image-below:hidden").slice(0, 4).slideDown();

            if($(".shop-image-below:hidden").length == 0) {
                $("#loadMore").text("").addClass("noContent");
            }
        });
    })

})(jQuery);