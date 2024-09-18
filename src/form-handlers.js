$(document).ready(function() {
    // Footer form submit
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
  
    // Form submission for footer
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
  });
  