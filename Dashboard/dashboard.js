$(document).ready(function() {
    // Toggle between login and register forms with transition
    $("#register-link").click(function(e) {
      e.preventDefault();
      $(".login-form-container").fadeOut(300, function() {
        $(".register-form-container").fadeIn(300);
      });
    });
  
    $("#login-link").click(function(e) {
      e.preventDefault();
      $(".register-form-container").fadeOut(300, function() {
        $(".login-form-container").fadeIn(300);
      });
    });
  });
  