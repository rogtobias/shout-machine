$(document).ready(function() {
  $(".form-inline").submit(function(event) {
  var calmInput = $("input#userInput").val();
  $("#toYell").text(calmInput);

  event.preventDefault();
  });
});
