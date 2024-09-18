$(document).ready(function() {
    // Hero slider
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
  
    // News slider
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
  
    // Testimonial slider
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
    }
  
    // Modal slider
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
  