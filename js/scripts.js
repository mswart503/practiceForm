$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var plantInput = $("input:radio[name=plant]:checked").val();
    var shippingInput = $("#shipping").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".plant").text(plantInput);
    $(".shipping").text(shippingInput);
    $("#receipt").show();

    event.preventDefault();
  });

  $("#addressBook form").submit(function(event) {
    var contactNameInput = $("input#contactName").val();
    var contactAddressInput = $("input#contactAddress").val();
    var contactNumberInput = $("input#contactNumber").val();

    $("button#addContact").click(function(){
      $("#accordion").append("");
    });

  });
});
