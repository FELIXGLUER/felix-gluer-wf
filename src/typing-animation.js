$(function () {
    function getCurrentLanguage() {
      const path = window.location.pathname;
      const exactLangMatch = path.match(/^\/([a-z]{2})$/);
      if (exactLangMatch) return exactLangMatch[1];
      
      const subDirLangMatch = path.match(/^\/([a-z]{2})\//);
      if (subDirLangMatch) return subDirLangMatch[1];
      
      return "en";
    }
  
    function createTypingEffect(selector, phrases) {
      var element = document.querySelector(selector);
      if (element && !element.typed) {
        element.typed = new Typed(element, {
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
  