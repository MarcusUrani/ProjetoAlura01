//Limpando o console.
console.clear();

var nome = document.querySelector("#nome");
console.log(nome.value);

//Função responsável pelo cálculo da média.
function calculaMedia() {
    var notaPrimeiroBimestre = parseFloat(document.querySelector(".notaPrimeiro").value);
    var notaSegundoBimestre = parseFloat(document.querySelector(".notaSegundo").value);
    var notaTerceiroBimestre = parseFloat(document.querySelector(".notaTerceiro").value);
    var notaQuartoBimestre = parseFloat(document.querySelector(".notaQuarto").value);

    //Variável utilizada para a soma das notas.
    var somaNota =
        notaPrimeiroBimestre +
        notaSegundoBimestre +
        notaTerceiroBimestre +
        notaQuartoBimestre;

    //Variável para calcular a média das notas.
    var calculaMedia = somaNota / 4;

    //Variável para corrigir valores decimais.
    var notaFinal = calculaMedia.toFixed(1);
    // var notaFinalCorrigida = parseInt(notaFinal);

    console.log(notaFinal);

    //Função responsável por conferir se o aluno está aprovado ou não.
    if (notaFinal >= 5) {
        var mediaFinal = `Parabéns, você foi aprovado, ${nome.value}, sua média final   foi ${notaFinal}`;
        document.querySelector("#mediaFinal").innerHTML = mediaFinal;
    } else {
        var mediaFinal = `Infelizmente você não foi aprovado ${nome.value}, sua média   final foi ${notaFinal}`;
        document.querySelector("#mediaFinal").innerHTML = mediaFinal;
    }
}

