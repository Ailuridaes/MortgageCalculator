$(function(){

  $("#calculate").click(function() {
    var resultDiv = $("#result");
    resultDiv.removeClass();

    //TODO: check if inputs are valid

    var p = $("#balance").val();
    var r = $("#rate").val() / 100 / 12;
    var n = $("#term").val() * $("#period").val();

    var result = p * r * Math.pow((1+r), n) / (Math.pow((1+r), n) - 1);

    resultDiv.html('Your payment amount is $' + result.toFixed(2) + '.');
  });

});
