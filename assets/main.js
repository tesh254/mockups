// Login modal
$(function () {
  $("#login").click(function () {
    $(".login").modal("show");
  });
  $(".login").modal({
    closable: true
  });
});

// Signup modal
$(function () {
  $("#signup").click(function () {
    $(".signup").modal("show");
  });
  $(".signup").modal({
    closable: true
  });
});

// Dropdown menu setup
$(document).ready(function () {
  $(".ui.dropdown").dropdown();
});

$(document).ready(function () {
  $(".rating").rating({
    initialRating: 0,
    maxRating: 5
  });
});

$(function () {

  $('#tags input').on('focusout', function () {
    var txt = this.value.replace(/[^a-zA-Z0-9\+\-\.\#]/g, ''); // allowed characters list
    if (txt) $(this).before('<span class="tag">' + txt + '</span>');
    this.value = "";
    // this.focus();
  }).on('keyup', function (e) {
    // comma|enter (add more keyCodes delimited with | pipe)
    if (/(188|13)/.test(e.which)) $(this).focusout();
  });

  $('#tags').on('click', '.tag', function () {
    $(this).remove();
  });

});
