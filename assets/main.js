// Login modal
$(function() {
  $("#login").click(function() {
    $(".login").modal("show");
  });
  $(".login").modal({
    closable: true
  });
});

// Signup modal
$(function() {
  $("#signup").click(function() {
    $(".signup").modal("show");
  });
  $(".signup").modal({
    closable: true
  });
});

// Dropdown menu setup
$(document).ready(function() {
  $(".ui.dropdown").dropdown();
});

$(document).ready(function() {
  $(".rating").rating({
    initialRating: 0,
    maxRating: 5
  });
});
