$(document).ready(function() {
    // Anchor Menu
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
  
        nextItem.trigger("click");
        scrollToCenter(nextItem, false);
        updateMenuState();
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
  