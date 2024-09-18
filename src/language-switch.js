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
  
      // Remove the hiding of languages
      $("[data-lang]").removeClass("hide");
    }
  
    function switchLanguage(lang) {
      var currentLang = getCurrentLanguage();
      
      if (lang === currentLang) {
        // If clicked language is the same as current, remove the modal
        $(".navbar_lang_modal").removeClass("show-lang-modal");
      } else {
        // Otherwise, proceed with language switch
        var newPath = lang === "en" ? "/" : "/" + lang + "/";
        window.location.href = newPath;
      }
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
  