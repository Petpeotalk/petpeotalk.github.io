(function($) {
  "use strict"; // Start of use strict

  var topOffset = 160;

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - topOffset)
        }, 1000, "easeOutCubic");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: topOffset
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  $(window).scroll(function() {
    var bottomHeight = 1100;
    if($(document).height() - $(window).scrollTop() < bottomHeight ) {
      $('#btn-kakao').css('bottom', '-500px');
    } else {
      $('#btn-kakao').css('bottom', '10px');
    }
 });

  // button effect
  $('#feature-bgm').click(function () {
    $('#feature-bgm').addClass('active');
    $('#feature-bgm-description').addClass('active');
    $('#feature-video').removeClass('active');
    $('#feature-video-description').removeClass('active');
    $('#feature-image').removeClass('active');
    $('#feature-image-description').removeClass('active');

    $('#feature-mockup-bgm').addClass('active');
    $('#feature-mockup-video').removeClass('active');
    $('#feature-mockup-image').removeClass('active');
  })

  $('#feature-video').click(function () {
    $('#feature-video').addClass('active');
    $('#feature-video-description').addClass('active');
    $('#feature-bgm').removeClass('active');
    $('#feature-bgm-description').removeClass('active');
    $('#feature-image').removeClass('active');
    $('#feature-image-description').removeClass('active');

    $('#feature-mockup-video').addClass('active');
    $('#feature-mockup-bgm').removeClass('active');
    $('#feature-mockup-image').removeClass('active');
  })

  $('#feature-image').click(function () {
    $('#feature-image').addClass('active');
    $('#feature-image-description').addClass('active');
    $('#feature-video').removeClass('active');
    $('#feature-video-description').removeClass('active');
    $('#feature-bgm').removeClass('active');
    $('#feature-bgm-description').removeClass('active');

    $('#feature-mockup-image').addClass('active');
    $('#feature-mockup-video').removeClass('active');
    $('#feature-mockup-bgm').removeClass('active');
  })

})(jQuery); // End of use strict
