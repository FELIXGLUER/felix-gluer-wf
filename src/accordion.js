function accordionToggle(accordionQuestionClass, accordionAnswerClass, openClass) {
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
          currentlyOpenItem.parent().removeClass("child-open");
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
  
  $(document).ready(function() {
    accordionToggle(".faq4_question", ".faq4_answer", "is-open");
  });
  