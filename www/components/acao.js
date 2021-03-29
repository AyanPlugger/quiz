// This is a JavaScript file

var display = "";
var n1 = 0;
var n2 = 0;
var ope = "";

$(document).on('click', ".num", function(){
  var n = $(this).html();
  display += n;
  $("#display").html(display);

});
function CE(){
  $("#display").html(0);
  display = ""
}
$(document).on('click', ".ce", function(){
  CE();
});  
$(document).on('click', ".op", function(){
  n1 = display;
  ope = $(this).html();
  CE();
});  
$(document).on('click', ".calcular", function(){
  n2 = display;
  if(ope == "+"){
    var result = parseFloat(n1)+parseFloat(n2);
    $("#display").html(result);
  }
  if(ope == "*"){
    var result = parseFloat(n1)*parseFloat(n2);
    $("#display").html(result);
  }
  if(ope == "-"){
    var result = parseFloat(n1)-parseFloat(n2);
    $("#display").html(result);
  }
  if(ope == "/"){
    var result = parseFloat(n1)/parseFloat(n2);
    $("#display").html(result);
  }
  display = result;
 
});  