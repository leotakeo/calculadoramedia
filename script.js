function calcularMedia() {
  var ElementoPrimeiraNota = document.getElementById("valorPrimeiraNota");
  var ElementoSegundaNota = document.getElementById("valorSegundaNota");
  var ElementoTerceiraNota = document.getElementById("valorTerceiraNota");
  var ElementoQuartaNota = document.getElementById("valorQuartaNota");
  
  var primeiraNota = parseFloat(ElementoPrimeiraNota.value);
  var segundaNota = parseFloat(ElementoSegundaNota.value);
  var terceiraNota = parseFloat(ElementoTerceiraNota.value);
  var quartaNota = parseFloat(ElementoQuartaNota.value);
  
  var calculoNotaFinal = parseFloat((primeiraNota + segundaNota + terceiraNota + quartaNota)/4) 
  var calculoNotaFinalFixada = calculoNotaFinal.toFixed(1)
  
  var media = 6
  var elementonotaFinal = document.getElementById("notaFinal");
  
  if (calculoNotaFinalFixada >= media) {
    var notaFinal = "Você passou! Sua média final é:  " + calculoNotaFinalFixada;
    elementonotaFinal.innerHTML = notaFinal;
  } else {
    var notaFinal = "Você não passou! Sua média final é:  " + calculoNotaFinalFixada;
    elementonotaFinal.innerHTML = notaFinal;
  }
   
}