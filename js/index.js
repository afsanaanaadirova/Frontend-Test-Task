//modal open
$(".button").click(function () {
  var buttonId = $(this).attr("id");
  $("#modal-container").removeAttr("class").addClass(buttonId);
  $("body").addClass("modal-active");
});

//modal-close
$(".close-icon").click(function () {
  $("#modal-container").addClass("out");
  $("body").removeClass("modal-active");
});

//modal forms
$("#inputtxt").on("keypress", function () {
  $("textarea#message_area").on("keypress", function (e) {
    var length2 = $("#inputtxt").val();
    var valuetext = $(this).val();
    var maxlen = $(this).attr("maxlength");
    maxlen = length2;
    var length = $(this).val().length;
    if (length > maxlen) {
      $("#textarea_message").text("max length " + maxlen + " characters only!");
      str = valuetext.substring(0, valuetext.length - 1);
      $(this).val(str);
      e.preventDefault();
    } else {
      $("#textarea_message").text("");
    }
  });
});
