dynamicBackground();
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
