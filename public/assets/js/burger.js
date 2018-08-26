$(function() {

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
        burger_name: $("#b_name").val().trim(),
        devoured : 0
        };

        // Send the POST request.
        $.ajax("/burger", {
        type: "POST",
        data: newBurger
        }).then(
        function() {
            console.log("Burger Added");
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });

    $(".ate-it").on("click", function(event) {
        var id = $(this).data("id");
    
    
        // Send the PUT request.
        $.ajax("/burger/" + id, {
          type: "PUT",
          data: {devoured : 1}
        }).then(
          function() {
            console.log("changed devoured to true");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
});