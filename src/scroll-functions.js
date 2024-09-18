function scrollToTop(element) {
    element.scrollTop(0);
  }
  
  $(document).ready(function() {
    // Tabs scroll
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
  });
  