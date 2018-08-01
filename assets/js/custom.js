// Preloader
$(window).load(function() {
    "use strict";
    $(".preloader-outer").delay(350).fadeOut('slow');
});
var date = new Date;
var year = date.getFullYear();
document.getElementById("copyrightyear").innerHTML = year;
$(function() {
    "use strict";

    // One Page Nav

    $(".navigation").onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 700,
        scrollThreshold: 0.5,
        easing: 'easeInOutCubic'
    });

    // Portfolio filter

    if ($('#works .item-outer').length > 0) {
        var filterizd = $('#works .item-outer').filterizr();
    }
    $('.control ul li').on('click', function() {
        $(this).parent().find('li.active').removeClass('active');
        $(this).addClass('active');
    });

    // Hamburger Menu & Mobile Push menu

    $(".hamburger-menu, .main-nav ul li a").on('click', function() {
        $(".header").toggleClass("pushed");
        $(".main-content").toggleClass("main-pushed");
        $('.bar').toggleClass('animate');
    });

    // Carousels / facts, Testimonials /

    $(".facts-carousel").owlCarousel({
        items: 4,
        singleItem: true,
        autoPlay: true
    });


    // Backstretch Background Slider

    $("#welcome").backstretch([
        "./assets/images/slide/slide1.png",
        "./assets/images/slide/slide2.png",
        "./assets/images/slide/slide3.png",
        "./assets/images/slide/slide4.png",
        "./assets/images/slide/slide5.png",
        "./assets/images/slide/slide6.png",
        "./assets/images/slide/slide7.png",
        "./assets/images/slide/slide8.png",
        // "assets/images/your_pic.jpg" 
    ], { duration: 5000, fade: 400 });

    // Welcome & Header Height

    $("#welcome").css({ 'height': ($(window).height()) + 'px' });
    $(".header").css({ 'height': ($(window).height()) + 'px' });

    // Magnific Popup Functions

    $('.work-image').magnificPopup({
        type: 'image'
    });

});