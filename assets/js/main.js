!(function($) {
  "use strict";

//--------------------------------------------    
// Mobile Navigation
// ***
// This part was kept almost without any change as this was exactly what I needed
//  - changed: some variable names
    if ($('.nav-menu').length) {
        var mobile_nav = $('.nav-menu').clone().prop(
        {class: 'mobile-nav d-lg-none'});

        // Adding classes to the html
        $('body').append(mobile_nav);
        $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
        $('body').append('<div class="mobile-nav-overly"></div>');

        // Changes the icons when clicked
        $(document).on('click', '.mobile-nav-toggle', function() {
            $('body').toggleClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').toggle();
        });
        
        // When user clicks on the screen outside of the nav-bar box, the bar itself fades out
        $(document).click(function(fadeOutBox) {
            
            var container = $(".mobile-nav, .mobile-nav-toggle");
            
            if (!container.is(fadeOutBox.target) && container.has(fadeOutBox.target).length === 0) {
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

        var bar_pos = $('.mobile-nav');

        if ($(this).scrollTop() > 100) {
            $(bar_pos).css("top", "70px");
        } else {
            $(bar_pos).css("top", "100px");
        }
    });       

//--------------------------------------------
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

    $('.scroll-to-top-button').click(function() {
        $('html, body').animate({scrollTop: 0}, 1200, 'easeInOutExpo');
        return false;
    });
    
//--------------------------------------------
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

    $('.scroll-to-top-button').click(function() {
        $('html, body').animate({scrollTop: 0}, 1200, 'easeInOutExpo');
        return false;
    });
//--------------------------------------------
// Progress bar
// ***
// When user scrolls the progress bar indicates how long is to reach the bottom of the page
// - This code was written by myself

    $(window).scroll(function() {
        
        var yCoord = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var line = yCoord / pageHeight * 100;

        $(".progressBar").css("width", line + "%");
        
        if ($(window).scrollTop() > 100 && $(window).width() > 991) {
            $(".progressBar").css("opacity" , "0.7"); 
        } else {
            $(".progressBar").css("opacity" , "0");
        }
    });
    
//--------------------------------------------    
// This is the alert that pops up when clicking buttons and images on the shop page
// - This code was written by myself

    var btn_alert = $('.shop-image .description .btn , .shop-image-below');
    
    $(btn_alert).click(function() {
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