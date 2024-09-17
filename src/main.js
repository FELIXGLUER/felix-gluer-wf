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
  let t = $("[data-item='anchor-menu-wrapper']");
  if (t.length) {
    let e = t.children("a"),
      n = $("#anchor-left"),
      r = $("#anchor-right"),
      i = $("[data-item='anchor-menu-arrows']"),
      l = !1;
    function s() {
      let i = (function n() {
          let r = e.first().offset().left,
            i = t.offset().left;
          return r >= i;
        })(),
        l = (function n() {
          let r = e.last().offset().left + e.last().outerWidth(!0),
            i = t.offset().left + t.innerWidth();
          return r <= i;
        })(),
        s = (function n() {
          let r = t.innerWidth(),
            i = e.toArray().reduce((t, e) => t + $(e).outerWidth(!0), 0);
          return i > r;
        })();
      if (!s) {
        t.css("justify-content", "center"),
          n.add(r).css({ opacity: "0", display: "none" });
        return;
      }
      t.css("justify-content", "flex-start"),
        i
          ? n.css({ opacity: "0", display: "none" })
          : n.css({ opacity: "1", display: "flex" }),
        l
          ? r.css({ opacity: "0", display: "none" })
          : r.css({ opacity: "1", display: "flex" });
    }
    function o(n = !1) {
      let r = e.filter(".w--current");
      r.length
        ? (t.removeClass("is-stack"), n || c(r))
        : t.addClass("is-stack"),
        s();
    }
    function c(e, n = !1) {
      if (!e.length) return;
      let r = e.offset().left,
        i = e.outerWidth(!0),
        o = t.offset().left,
        c = t.innerWidth(),
        a = t.scrollLeft(),
        f = a;
      if (r + i > o + c) f += r + i - (o + c);
      else {
        if (!(r < o)) return;
        f -= o - r;
      }
      n
        ? (t.scrollLeft(f), s())
        : ((l = !0),
          t.stop().animate({ scrollLeft: f }, 300, () => {
            (l = !1), s();
          }));
    }
    function a(t) {
      let n = e.filter(".w--current"),
        r;
      (r =
        0 === n.length
          ? "right" === t
            ? e.first()
            : e.last()
          : "right" === t
          ? n.next("a").length
            ? n.next("a")
            : e.first()
          : n.prev("a").length
          ? n.prev("a")
          : e.last()),
        n.length && n.removeClass("w--current"),
        r.addClass("w--current");
      let i = n.attr("href"),
        l = r.attr("href");
      console.log(
        `Current section: ${i || "none"}, Going to ${
          "right" === t ? "next" : "previous"
        } section: ${l}`
      ),
        r.trigger("click"),
        c(r, !1),
        o();
    }
    function f(e) {
      if (l) return;
      l = !0;
      let n = t.innerWidth(),
        r = t[0].scrollWidth;
      i.attr("data-scrolling", "true"),
        t
          .stop()
          .animate({ scrollLeft: "right" === e ? r - n : 0 }, 300, function () {
            i.attr("data-scrolling", "false"), (l = !1), s();
          });
    }
    r.on("click", function () {
      l ||
        "0" === r.css("opacity") ||
        (console.log("Right arrow clicked"), a("right"));
    }),
      n.on("click", function () {
        l ||
          "0" === n.css("opacity") ||
          (console.log("Left arrow clicked"), a("left"));
      }),
      t.on("scroll", function () {
        l ||
          (function t() {
            if (l) return;
            let n = e.filter(".w--current");
            c(n, !1), o(), s();
          })();
      }),
      $(window).on("resize", function () {
        s();
      }),
      $(window).on("load", function () {
        s(), o(!0);
        let t = e.filter(".w--current");
        t.length && c(t, !0);
      }),
      e.on("classChange", function () {
        o();
      });
    let u = $.fn.addClass,
      h = $.fn.removeClass;
    ($.fn.addClass = function () {
      let t = u.apply(this, arguments);
      return $(this).trigger("classChange"), t;
    }),
      ($.fn.removeClass = function () {
        let t = h.apply(this, arguments);
        return $(this).trigger("classChange"), t;
      }),
      s();
  }
});
