$(document).ready(function() {
    // Event handler for clicks outside dropdown elements
    $(document).on("click", function (event) {
      // For desktop view (992 pixels or above)
      if ($(window).width() >= 992) {
        if (
          !$(event.target).closest(
            ".c-navbar_dropdown-toggle, .c-navbar_dropdown-list, .c-icon_dropdown, .c-dropdown_icon-toggle"
          ).length
        ) {
          $(".is-active-dropdown").removeClass("is-active-dropdown");
          $(".is-active-dropdown-contact").removeClass(
            "is-active-dropdown-contact"
          );
        }
      }
  
      // For mobile view (less than 991 pixels)
      if ($(window).width() < 991) {
        if (
          !$(event.target).closest(
            ".c-navbar_menu-button, .c-navbar_dropdown-toggle, .c-icon_dropdown, .c-dropdown_icon-toggle"
          ).length
        ) {
          $(".is-active-dropdown").removeClass("is-active-dropdown");
        }
      }
    });
  
    // Event handler for navbar_dropdown-toggle and dropdown_icon-toggle
    $(".c-navbar_dropdown-toggle, .c-dropdown_icon-toggle").on(
      "click",
      function () {
        if ($(window).width() >= 992) {
          $(".c-navbar_dropdown-toggle")
            .not(this)
            .removeClass("is-active-dropdown");
          $(".c-icon_dropdown").not(this).removeClass("is-active-dropdown-contact");
          $(".c-navbar_dropdown-list")
            .not($(this).siblings(".c-navbar_dropdown-list"))
            .removeClass("is-active-dropdown");
  
          // Toggle classes on the clicked element
          $(this).toggleClass("is-active-dropdown");
          $(this)
            .siblings(".c-navbar_dropdown-list")
            .toggleClass("is-active-dropdown");
          if ($(this).hasClass("c-dropdown_icon-toggle")) {
            setTimeout(() => {
              $(this)
                .siblings(".c-icon_dropdown")
                .toggleClass("is-active-dropdown-contact");
            }, 10);
          }
  
          // Scroll to top of the dropdown list
          if (
            $(this)
              .siblings(".c-navbar_dropdown-list")
              .hasClass("is-active-dropdown")
          ) {
            scrollToTop($(this).siblings(".c-navbar_dropdown-list"));
          }
        }
      }
    );
  
    // Event handler for mobile menu button
    $(".c-navbar_menu-button").on("click", function () {
      // For mobile view (less than 991 pixels)
      if ($(window).width() < 991) {
        $(this).toggleClass("is-active-burger");
        $(".c-navbar_menu").toggleClass("is-active-menu");
        setTimeout(() => {
          $(".is-active-dropdown").removeClass("is-active-dropdown");
        }, 300); // Adjust the delay time as needed
  
        // Scroll to top of the menu
        if ($(".c-navbar_menu").hasClass("is-active-menu")) {
          scrollToTop($(".c-navbar_menu"));
        }
      }
    });
  
    // Event handler for navbar_dropdown-toggle in mobile view
    $(".c-navbar_dropdown-toggle").on("click", function () {
      if ($(window).width() < 991) {
        $(this).siblings(".c-navbar_dropdown-list").addClass("is-active-dropdown");
        scrollToTop($(this).siblings(".c-navbar_dropdown-list"));
      }
    });
  
    // Event handler for navbar_back in mobile view
    $(".c-navbar_back").on("click", function () {
      if ($(window).width() < 991) {
        $(".c-navbar_dropdown-list").removeClass("is-active-dropdown");
      }
    });
  });
  