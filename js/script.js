$(document).ready(function() {
  $(document).on("click", function(event) {
    if ($(event.target).parent("#container").hasClass("container") && $(event.target).text() == "") {
      $.ajax({
          url: "https://flynn.boolean.careers/exercises/api/random/int",
          method: "GET",
          success: function (data, stato) {
            $(event.target).text(data.response);
            if (data.response <= 5) {
              $(event.target).addClass("yellow");
            } else {
              $(event.target).addClass("green");
            }
          },
          error: function (richiesta, stato, errori) {
          alert("E' avvenuto un errore. " + errore);
        }
      });
    }
  });
});
