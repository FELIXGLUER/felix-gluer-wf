// Language modal
$(".navbar_lang_trigger").on("click", function () {
  $(".navbar_lang_modal").addClass("show-lang-modal");
});

$(".navbar_lang_close").on("click", function () {
  $(".show-lang-modal").removeClass("show-lang-modal");
});

// Scroll to top function
function scrollToTop(element) {
  element.scrollTop(0);
}

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

// swiper home package
$(document).ready(function () {
  const heroSlider = $("#hero");
  if (heroSlider.length) {
    const heroSliderA = new Swiper("#hero", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      autoHeight: true,
      grabCursor: true,
      a11y: false,
      spaceBetween: 10,
      allowTouchMove: true,
      navigation: {
        nextEl: ".slider_right",
        prevEl: ".slider_left",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        767: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
      },
    });
  }
});

$(document).ready(function () {
  const newsSlider = $("#news-slider");
  if (newsSlider.length) {
    const newsSliderA = new Swiper("#news-slider", {
      slidesPerView: 1,
      slidesPerGroup: 1,
      loop: true,
      autoHeight: true,
      watchSlidesProgress: true,
      grabCursor: true,
      slideFullyVisibleClass: "fully-visible",
      a11y: true,
      spaceBetween: 10,
      clickable: true,
      allowTouchMove: true,
      navigation: {
        nextEl: "#news-right",
        prevEl: "#news-left",
      },
      pagination: {
        el: "#news-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 7000,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          autoHeight: false,
        },
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          autoHeight: false,
        },
        767: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
      },
    });
  }
});

$(document).ready(function () {
  const testimonialSlider = $("#testimonial-slider");
  if (testimonialSlider.length) {
    const testimonialSliderA = new Swiper("#testimonial-slider", {
      slidesPerView: 3,
      slidesPerGroup: 1,
      loop: true,
      autoHeight: false,
      watchSlidesProgress: true,
      grabCursor: true,
      slideFullyVisibleClass: "fully-visible",
      a11y: true,
      spaceBetween: 10,
      clickable: true,
      allowTouchMove: true,
      navigation: {
        nextEl: "#testimonial-right",
        prevEl: "#testimonial-left",
      },
      pagination: {
        el: ".slider_pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          autoHeight: false,
        },
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
          autoHeight: false,
        },
        767: {
          slidesPerView: 2,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 10,
        },
      },
    });
  } else {
  }
});

$(document).ready(function () {
  const modalSlider = $("#slide-slider");
  if (modalSlider.length) {
    const modalSliderA = new Swiper("#slide-slider", {
      slidesPerView: 4,
      slidesPerGroup: 1,
      loop: true,
      autoHeight: true,
      watchSlidesProgress: false,
      grabCursor: true,
      slideFullyVisibleClass: "fully-visible",
      a11y: true,
      spaceBetween: 20,
      clickable: true,
      allowTouchMove: true,
      navigation: {
        nextEl: "#modal-right",
        prevEl: "#modal-left",
      },
      pagination: {
        el: "#modal-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
          loop: true,
        },
        480: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 10,
          loop: true,
        },
        767: {
          slidesPerView: 3,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 4,
          slidesPerGroup: 1,
          spaceBetween: 20,
        },
      },
    });
  }
});

// Function to check and toggle visibility of down button
function toggleDownButtonVisibility() {
  navbarDropdownLists.forEach(function (navbarDropdownList) {
    const downButtonWrap = navbarDropdownList.querySelector(
      ".c-navbar_down-button-wrap"
    );
    if (navbarDropdownList.scrollHeight > navbarDropdownList.clientHeight) {
      downButtonWrap.style.opacity = "1";
    } else {
      downButtonWrap.style.opacity = "0";
    }
  });
}

document.addEventListener("DOMContentLoaded", toggleDownButtonVisibility);

const navbarDropdownLists = document.querySelectorAll(
  ".c-navbar_dropdown-list"
);

navbarDropdownLists.forEach(function (navbarDropdownList) {
  const downButtonWrap = navbarDropdownList.querySelector(
    ".c-navbar_down-button-wrap"
  );

  navbarDropdownList.addEventListener("scroll", function () {
    if (navbarDropdownList.scrollTop > 10) {
      downButtonWrap.style.opacity = "0";
    } else {
      downButtonWrap.style.opacity = "1";
    }
  });
});

// footer form submit

$(document).ready(function () {
  $('[data-trigger="submit"]').click(function (event) {
    var form = $(this).closest("form");
    var emailField = form.find('input[type="email"]');
    var emailValue = emailField.val();

    if (emailValue === "" || !emailValue.includes("@")) {
      alert("Please enter a correct email.");
      event.preventDefault();
      return;
    }

    form.submit();
  });
});

// tabs scroll

window.addEventListener("click", function (e) {
  if (window.location.pathname.includes("/contact-us")) {
    var trigger = e.target.outerText.trim();

    if (trigger) {
      if (
        trigger === "SERVICE REQUEST" ||
        trigger === "BOOK A DEMO" ||
        trigger === "REQUEST A CONSULT" ||
        trigger === "Service request form"
      ) {
        $("html, body").animate(
          {
            scrollTop: $("#get-in-touch").offset().top,
          },
          600
        );
      }
    }
  }
});

// override href on link
$("a.non-standard").attr("href", "/contact-us");

// Navbar active page indicator

var currentLink = $('[aria-current="page"]').eq(0);
var mainLabel = currentLink
  .closest(".c-navbar_menu-dropdown")
  .find('[data-element="main-label"]');
mainLabel.addClass("active");

$("[data-item='current-date']").text(new Date().getFullYear());

// line animate

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

// Accordion animation handler

function accordionToggle(
  accordionQuestionClass,
  accordionAnswerClass,
  openClass
) {
  $(accordionAnswerClass).css("height", "0px");

  $(accordionQuestionClass).click(function () {
    var currentItem = $(this);
    var currentlyOpenItem = $(accordionQuestionClass + "." + openClass);
    if (currentItem.hasClass(openClass)) {
      currentItem.removeClass(openClass);
      currentItem.parent().removeClass("child-open");
      currentItem.find(".faq4_icon-wrappper").css("transform", "rotate(0deg)");
      currentItem
        .next(accordionAnswerClass)
        .animate({ height: "0px" }, 300, "easeInOutQuint");
    } else {
      currentItem.parent().addClass("child-open");
      let autoHeight = currentItem
        .next(accordionAnswerClass)
        .css("height", "auto")
        .height();
      currentItem.next(accordionAnswerClass).height("0px");
      if (currentlyOpenItem.length) {
        currentlyOpenItem.removeClass(openClass);
        currentlyOpenItem.parent().removeClass("child-open"); // Add child-open class to parent
        currentlyOpenItem
          .find(".faq4_icon-wrappper")
          .css("transform", "rotate(0deg)");
        currentlyOpenItem
          .next(accordionAnswerClass)
          .animate({ height: "0px" }, 200, "easeInOutQuint", function () {
            openCurrentItem();
          });
      } else {
        openCurrentItem();
      }
      function openCurrentItem() {
        currentItem.addClass(openClass);
        currentItem.parent().addClass("child-open");
        currentItem
          .find(".faq4_icon-wrappper")
          .css("transform", "rotate(90deg)");
        currentItem
          .next(accordionAnswerClass)
          .animate({ height: autoHeight }, 300, "easeInOutQuint");
      }
    }
  });
}

accordionToggle(".faq4_question", ".faq4_answer", "is-open");

$('.footer form[action^="https://submit-form.com"]').each(function (i, el) {
  var form = $(el);
  form.submit(function (e) {
    e.preventDefault();
    form = $(e.target);
    var action = form.attr("action");
    var data = form.serialize();
    $.ajax({
      url: action,
      method: "POST",
      data: data,
      dataType: "json",
      success: function () {
        var parent = $(form.parent());
        parent.children("form").css("display", "none");
        parent.children(".w-form-done").css("display", "block");
      },
      error: function () {
        var parent = $(form.parent());
        parent.find(".w-form-fail").css("display", "block");
      },
    });
  });
});

// CTAs redirections

$(document).ready(function () {
  $('a[id^="rc-"], a[id^="sr-"], a[id^="ba-"]').on("click", function () {
    const targetValue = $(this).data("target-value");
    const targetId = $(this).data("target-id");
    localStorage.setItem("target-value", targetValue);
    localStorage.setItem("target-id", targetId);
  });

  const targetValue = localStorage.getItem("target-value");
  const targetId = localStorage.getItem("target-id");

  if (targetValue && targetId) {
    setTimeout(function () {
      let $targetItem = $(`a[data-item='${targetId}']`).filter(function () {
        return $(this).text().trim() === targetValue;
      });

      if ($targetItem.length) {
        $targetItem.click();
        const dropdown = $targetItem.closest(".fs-select");
        const dropdownToggle = dropdown.find(".input_field div").eq(1);
        const dropdownWrapper = dropdown.find(".input_field");
        const selectField = $targetItem.closest("nav").find("select");

        dropdownToggle.text(targetValue);

        selectField.val(targetValue);

        $targetItem
          .attr("tabindex", "0")
          .attr("aria-selected", "true")
          .addClass("w--current");
        $(dropdownWrapper).addClass("is-disabled");

        $targetItem
          .siblings(`a[data-item='${targetId}']`)
          .attr({
            tabindex: "-1",
            "aria-selected": "false",
          })
          .removeClass("w--current");
      }

      localStorage.removeItem("target-value");
      localStorage.removeItem("target-id");
    }, 500);
  }
});

// Anchor Menu

$(document).ready(function () {
  let menuWrapper = $("[data-item='anchor-menu-wrapper']");
  if (menuWrapper.length) {
    let menuItems = menuWrapper.children("a");
    let leftArrow = $("#anchor-left");
    let rightArrow = $("#anchor-right");
    let arrowWrapper = $("[data-item='anchor-menu-arrows']");
    let isAnimating = false;

    function updateArrowVisibility() {
      let isAtStart = (function checkStart() {
        let firstItemLeft = menuItems.first().offset().left;
        let wrapperLeft = menuWrapper.offset().left;
        return firstItemLeft >= wrapperLeft;
      })();

      let isAtEnd = (function checkEnd() {
        let lastItemRight =
          menuItems.last().offset().left + menuItems.last().outerWidth(true);
        let wrapperRight = menuWrapper.offset().left + menuWrapper.innerWidth();
        return lastItemRight <= wrapperRight;
      })();

      let isOverflowing = (function checkOverflow() {
        let wrapperWidth = menuWrapper.innerWidth();
        let totalItemsWidth = menuItems
          .toArray()
          .reduce((total, item) => total + $(item).outerWidth(true), 0);
        return totalItemsWidth > wrapperWidth;
      })();

      if (!isOverflowing) {
        menuWrapper.css("justify-content", "center");
        leftArrow.add(rightArrow).css({ opacity: "0", display: "none" });
        return;
      }

      menuWrapper.css("justify-content", "flex-start");

      if (isAtStart) {
        leftArrow.css({ opacity: "0", display: "none" });
      } else {
        leftArrow.css({ opacity: "1", display: "flex" });
      }

      if (isAtEnd) {
        rightArrow.css({ opacity: "0", display: "none" });
      } else {
        rightArrow.css({ opacity: "1", display: "flex" });
      }
    }

    function updateMenuState(isInitialLoad = false) {
      let currentItem = menuItems.filter(".w--current");
      if (currentItem.length) {
        menuWrapper.removeClass("is-stack");
        if (!isInitialLoad) {
          scrollToCenter(currentItem);
        }
      } else {
        menuWrapper.addClass("is-stack");
      }
      updateArrowVisibility();
    }

    function scrollToCenter(element, immediate = false) {
      if (!element.length) return;

      let elementLeft = element.offset().left;
      let elementWidth = element.outerWidth(true);
      let wrapperLeft = menuWrapper.offset().left;
      let wrapperWidth = menuWrapper.innerWidth();
      let currentScroll = menuWrapper.scrollLeft();
      let newScroll = currentScroll;

      if (elementLeft + elementWidth > wrapperLeft + wrapperWidth) {
        newScroll += elementLeft + elementWidth - (wrapperLeft + wrapperWidth);
      } else if (elementLeft < wrapperLeft) {
        newScroll -= wrapperLeft - elementLeft;
      } else {
        return;
      }

      if (immediate) {
        menuWrapper.scrollLeft(newScroll);
        updateArrowVisibility();
      } else {
        isAnimating = true;
        menuWrapper.stop().animate({ scrollLeft: newScroll }, 300, () => {
          isAnimating = false;
          updateArrowVisibility();
        });
      }
    }

    function navigateMenu(direction) {
      let currentItem = menuItems.filter(".w--current");
      let nextItem;

      if (currentItem.length === 0) {
        nextItem = direction === "right" ? menuItems.first() : menuItems.last();
      } else {
        nextItem =
          direction === "right"
            ? currentItem.next("a").length
              ? currentItem.next("a")
              : menuItems.first()
            : currentItem.prev("a").length
            ? currentItem.prev("a")
            : menuItems.last();
      }

      if (currentItem.length) {
        currentItem.removeClass("w--current");
      }
      nextItem.addClass("w--current");

      // let currentSection = currentItem.attr("href");
      // let nextSection = nextItem.attr("href");
      // console.log(`Current section: ${currentSection || "none"}, Going to ${direction === "right" ? "next" : "previous"} section: ${nextSection}`);

      nextItem.trigger("click");
      scrollToCenter(nextItem, false);
      updateMenuState();
    }

    function scrollFull(direction) {
      if (isAnimating) return;
      isAnimating = true;

      let wrapperWidth = menuWrapper.innerWidth();
      let fullWidth = menuWrapper[0].scrollWidth;
      arrowWrapper.attr("data-scrolling", "true");

      menuWrapper
        .stop()
        .animate(
          { scrollLeft: direction === "right" ? fullWidth - wrapperWidth : 0 },
          300,
          function () {
            arrowWrapper.attr("data-scrolling", "false");
            isAnimating = false;
            updateArrowVisibility();
          }
        );
    }

    rightArrow.on("click", function () {
      if (!isAnimating && rightArrow.css("opacity") !== "0") {
        navigateMenu("right");
      }
    });

    leftArrow.on("click", function () {
      if (!isAnimating && leftArrow.css("opacity") !== "0") {
        navigateMenu("left");
      }
    });

    menuWrapper.on("scroll", function () {
      if (!isAnimating) {
        (function handleScroll() {
          if (isAnimating) return;
          let currentItem = menuItems.filter(".w--current");
          scrollToCenter(currentItem, false);
          updateMenuState();
          updateArrowVisibility();
        })();
      }
    });

    $(window).on("resize", function () {
      updateArrowVisibility();
    });

    $(window).on("load", function () {
      updateArrowVisibility();
      updateMenuState(true);
      let currentItem = menuItems.filter(".w--current");
      if (currentItem.length) {
        scrollToCenter(currentItem, true);
      }
    });

    menuItems.on("classChange", function () {
      updateMenuState();
    });

    let originalAddClass = $.fn.addClass;
    let originalRemoveClass = $.fn.removeClass;

    $.fn.addClass = function () {
      let result = originalAddClass.apply(this, arguments);
      $(this).trigger("classChange");
      return result;
    };

    $.fn.removeClass = function () {
      let result = originalRemoveClass.apply(this, arguments);
      $(this).trigger("classChange");
      return result;
    };

    updateArrowVisibility();
  }
});

// Language Switch

$(document).ready(function () {
  function getCurrentLanguage() {
    var path = window.location.pathname;

    var exactLangMatch = path.match(/^\/([a-z]{2})$/);
    if (exactLangMatch) {
      return exactLangMatch[1];
    }

    var subDirLangMatch = path.match(/^\/([a-z]{2})\//);
    if (subDirLangMatch) {
      return subDirLangMatch[1];
    }

    return "en";
  }

  function updateLanguageDisplay() {
    var currentLang = getCurrentLanguage();

    var $trigger = $('[data-lang="trigger"]');
    $trigger.text(currentLang.toUpperCase());

    $("[data-lang]").each(function () {
      var lang = $(this).attr("data-lang");
      if (lang === "es") {
        $(this).addClass("hide");
      } else if (lang === currentLang) {
        $(this).addClass("hide");
      } else {
        $(this).removeClass("hide");
      }
    });
  }

  function switchLanguage(lang) {
    var newPath = lang === "en" ? "/" : "/" + lang + "/";
    window.location.href = newPath;
  }

  $("[data-lang]")
    .not('[data-lang="trigger"]')
    .on("click", function (e) {
      e.preventDefault();
      var lang = $(this).attr("data-lang");
      switchLanguage(lang);
    });

  updateLanguageDisplay();

  $(window).on("load", function () {
    updateLanguageDisplay();
  });
});

// typing animation

$(function () {
  function getCurrentLanguage() {
    var path = window.location.pathname;
    var exactLangMatch = path.match(/^\/([a-z]{2})$/);
    if (exactLangMatch) return exactLangMatch[1];
    var subDirLangMatch = path.match(/^\/([a-z]{2})\//);
    if (subDirLangMatch) return subDirLangMatch[1];
    return "en";
  }

  function createTypingEffect(selector, phrases) {
    var element = document.querySelector(selector);
    if (element) {
      new Typed(selector, {
        strings: phrases,
        typeSpeed: 30,
        backSpeed: 20,
        loop: true,
        backDelay: 3000,
      });
    }
  }

  // Define phrases for different languages
  var phrases = {
    en: {
      phrases1: [
        "on all materials",
        "all around the world",
        "in all industries",
      ],
      phrases2: [
        "UPGRADE your gluing division?",
        "have an easily scaled production?",
        "have better productivity?",
        "use different glue types on one element?",
        "use less glue?",
        "glue with 100% repetition?",
        "glue 4 times faster?",
      ],
    },
    de: {
      phrases1: [
        "auf allen Materialien",
        "überall auf der Welt",
        "in allen Branchen",
      ],
      phrases2: [
        "Ihre Klebeabteilung AUFRÜSTEN?",
        "eine leicht skalierbare Produktion haben?",
        "eine bessere Produktivität haben?",
        "verschiedene Klebstofftypen auf einem Element verwenden?",
        "weniger Klebstoff verwenden?",
        "mit 100% Wiederholung kleben?",
        "4-mal schneller kleben?",
      ],
    },
  };
  var currentLang = getCurrentLanguage();
  var currentPhrases = phrases[currentLang] || phrases["en"];

  createTypingEffect('[data-element="typing"]', currentPhrases.phrases1);
  createTypingEffect('[data-element="typing-2"]', currentPhrases.phrases2);
});
