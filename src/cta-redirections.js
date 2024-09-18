$(document).ready(function() {
    // CTAs redirections
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
  