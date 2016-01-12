/*
    App specific methods, extends Instagram functions
*/

var App = (function() {

    var publicFunction = {};

    // event listeners
    var _eventListeners = function() {

        // menu map
        var $about = $('.about');
        var $videos = $('.property');
        var $pricing = $('.pricing');
        var $photos = $('.photography');
        var $contact = $('.contact');

        var $header = $('.header-carousel');
        var $body = $('body');
        var $nav = $('nav a');

        var menuOffset = 50;

        // sub-menu scroll
        $(window).scroll(function () {
            var pos = $(window).scrollTop();
            var headerHeight = $header.outerHeight();
            var triggerPoint = headerHeight;

            ( pos >= triggerPoint ? $body.addClass('fixed') : $body.removeClass('fixed') );
        });

        // menu click handler
        $nav.on('click', function(e) {
            e.preventDefault();

            var target = $(this).attr('class');
            var currPos = $('section' + '.' + target).position().top - menuOffset;

            // scroll here
            $("html, body").animate({ scrollTop: currPos + 'px' }, 500, "swing");
        });

    };

    var _initCarousel = function() {

        //initiate hero carousel
        $("#carousel-hero").owlCarousel({
            items: 1,
            singleItem: true,
            pagination: false,
            paginationSpeed: 800,
            slideSpeed: 300,
            autoPlay: true
        });

    };


    publicFunction.init = function() {

        _initCarousel();

        // register events
        _eventListeners();

    };

    return publicFunction;

})( App || {} );


// ready go!
$(document).ready(function() {
    // initialize app
    App.init();
});