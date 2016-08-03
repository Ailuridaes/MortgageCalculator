$(function(){

  $("#calculate").click(function() {
    var resultDiv = $("#result");
    resultDiv.removeClass();

    //check if inputs are valid
    var error = false;
    $("input").each(function() {
      if($(this).val() === "") {
        resultDiv.addClass('error').text('Error: Please fill out all fields.');
        error = true;
        return;
      } else if (isNaN($(this).val())) {
        resultDiv.addClass('error').text('Error: Please input only numbers.');
        error = true;
        return;
      }
    });
    if(error) return;

    //calculate monthly payment
    var p = $("#balance").val();
    var r = $("#rate").val() / 100 / 12;
    var n = $("#term").val() * $("#period").val();

    var result = p * r * Math.pow((1+r), n) / (Math.pow((1+r), n) - 1);

    //result may still be out of bounds if numbers entered don't make sense
    if (isNaN(result)) {
      resultDiv.addClass('error').text('Error: Please check your numbers!');
      return;
    }

    resultDiv.html('Your payment amount is $' + result.toFixed(2) + '.');
  });

});
