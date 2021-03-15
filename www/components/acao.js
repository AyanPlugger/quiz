// This is a JavaScript file

$(document).on('click','#somar',function(){
  var valor1 = parseFloat(document.getElementById('valor1').value);
  var valor2 = parseFloat(document.getElementById('valor2').value);

  var resultado = parseFloat(valor1) + parseFloat(valor2);

  $("#resultado").val(resultado);
});
$(document).on('click','#subtrair',function(){
  var valor1 = parseFloat(document.getElementById('valor1').value);
  var valor2 = parseFloat(document.getElementById('valor2').value);

  var resultado = parseFloat(valor1) - parseFloat(valor2);

  $("#resultado").val(resultado);
});
$(document).on('click','#multiplicar',function(){
  var valor1 = parseFloat(document.getElementById('valor1').value);
  var valor2 = parseFloat(document.getElementById('valor2').value);

  var resultado = parseFloat(valor1) * parseFloat(valor2);

  $("#resultado").val(resultado); 
});
$(document).on('click','#dividir',function(){
  var valor1 = parseFloat(document.getElementById('valor1').value);
  var valor2 = parseFloat(document.getElementById('valor2').value);

  var resultado = parseFloat(valor1) / parseFloat(valor2);

  $("#resultado").val(resultado);
});
$(document).on('click','#potenciar',function(){
  var valor1 = parseFloat(document.getElementById('valor1').value);
  var valor2 = parseFloat(document.getElementById('valor2').value);

  var resultado = parseFloat(valor1) % parseFloat(valor2);

  $("#resultado").val(resultado);
});