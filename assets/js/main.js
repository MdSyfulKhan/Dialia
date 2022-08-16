dynamicBackground();
mobileMenu();
stickyHeader();
slickInit();
/*--------------------------------------------------------------
    2. Dynamic Background
--------------------------------------------------------------*/
function dynamicBackground() {
  // Background images
  $(".cs_dynamic_bg").each(function () {
    var src = $(this).attr("data-src");
    $(this).css({
      "background-image": "url(" + src + ")",
    });
  });
}
/*--------------------------------------------------------------
      3. Mobile Menu
--------------------------------------------------------------*/
function mobileMenu() {
  $(".cs_nav").append('<span class="cs_menu_toggle"><span></span></span>');
  $(".menu-item-has-children").append(
    '<span class="cs_menu_dropdown_toggle"></span>'
  );
  $(".cs_menu_toggle").on("click", function () {
    $(this)
      .toggleClass("cs_toggle_active")
      .siblings(".cs_nav_list")
      .slideToggle();
  });
  $(".cs_menu_dropdown_toggle").on("click", function () {
    $(this).toggleClass("active").siblings("ul").slideToggle();
  });
}
/*--------------------------------------------------------------
      4. Sticky Header
--------------------------------------------------------------*/
function stickyHeader() {
  var scroll = $(window).scrollTop();
  if (scroll >= 10) {
    $(".cs_sticky_header").addClass("cs_sticky_active");
  } else {
    $(".cs_sticky_header").removeClass("cs_sticky_active");
  }
}
/*--------------------------------------------------------------
      4. slider
--------------------------------------------------------------*/
function slickInit() {
  $('.st-slider').each(function() {
    // Slick Variable
    var $ts = $(this).find('.slick-container');
    var $slickActive = $(this).find('.slick-wrapper');
    var $sliderNumber = $(this).siblings('.slider-number');

    // Auto Play
    var autoPlayVar = parseInt($ts.attr('data-autoplay'), 10);
    // Auto Play Time Out
    var autoplaySpdVar = 3000;
    if (autoPlayVar > 1) {
      autoplaySpdVar = autoPlayVar;
      autoPlayVar = 1;
    }
    // Slide Change Speed
    var speedVar = parseInt($ts.attr('data-speed'), 10);
    // Slider Loop
    var loopVar = Boolean(parseInt($ts.attr('data-loop'), 10));
    // Slider Center
    var centerVar = Boolean(parseInt($ts.attr('data-center'), 10));
    // Pagination
    var paginaiton = $(this).children().hasClass('pagination');
    // Slide Per View
    var slidesPerView = $ts.attr('data-slides-per-view');
    if (slidesPerView == 1) {
      slidesPerView = 1;
    }
    if (slidesPerView == 'responsive') {
      var slidesPerView = parseInt($ts.attr('data-add-slides'), 10);
      var lgPoint = parseInt($ts.attr('data-lg-slides'), 10);
      var mdPoint = parseInt($ts.attr('data-md-slides'), 10);
      var smPoint = parseInt($ts.attr('data-sm-slides'), 10);
      var xsPoing = parseInt($ts.attr('data-xs-slides'), 10);
    }
    // Fade Slider
    var fadeVar = parseInt($($ts).attr('data-fade-slide'));
    (fadeVar === 1) ? (fadeVar = true) : (fadeVar = false);

    // Slick Active Code
    $slickActive.slick({
      infinite: true,
      autoplay: autoPlayVar,
      dots: paginaiton,
      centerPadding: '0',
      speed: speedVar,
      infinite: loopVar,
      autoplaySpeed: autoplaySpdVar,
      centerMode: centerVar,
      fade: fadeVar,
      prevArrow: $(this).find('.slick-arrow-left'),
      nextArrow: $(this).find('.slick-arrow-right'),
      appendDots: $(this).find('.pagination'),
      slidesToShow: slidesPerView,
      responsive: [{
        breakpoint: 1600,
        settings: {
          slidesToShow: lgPoint
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: mdPoint
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: smPoint
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: xsPoing
        }
      }
      ]
    });
  })
}