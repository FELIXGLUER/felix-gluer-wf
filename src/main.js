//=require language-modal.js
//=require scroll-functions.js
//=require dropdown-handlers.js
//=require sliders.js
//=require accordion.js
//=require form-handlers.js
//=require cta-redirections.js
//=require anchor-menu.js
//=require language-switch.js
//=require typing-animation.js

$(document).ready(function() {
  // Override href on link
  $("a.non-standard").attr("href", "/contact-us");

  // Navbar active page indicator
  var currentLink = $('[aria-current="page"]').eq(0);
  var mainLabel = currentLink
    .closest(".c-navbar_menu-dropdown")
    .find('[data-element="main-label"]');
  mainLabel.addClass("active");

  $("[data-item='current-date']").text(new Date().getFullYear());

  // Line animate
  function checkVisibility() {
    $(".mark").each(function () {
      var top_of_element = $(this).offset().top;
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
      var top_of_screen = $(window).scrollTop();

      if (
        bottom_of_screen > top_of_element &&
        top_of_screen < bottom_of_element
      ) {
        $(this).addClass("animate-width");
      }
    });
  }

  checkVisibility();
  $(window).on("scroll", checkVisibility);
});
