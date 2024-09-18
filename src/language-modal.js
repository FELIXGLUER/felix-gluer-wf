$(document).ready(function() {
    // Language modal
    $(".navbar_lang_trigger").on("click", function () {
      $(".navbar_lang_modal").addClass("show-lang-modal");
    });
  
    $(".navbar_lang_close").on("click", function () {
      $(".show-lang-modal").removeClass("show-lang-modal");
    });
  });
  