function  CalculaIMC(){
let nome= document.getElementById('Nome').value;
let altura= document.getElementById('Altura').value;
let peso=document.getElementById('Peso').value;

let imc = peso/(altura*altura);


let result = document.getElementById('Resultado');

   

    if(imc < 18.5){
        result.innerHTML =(nome+'<br>'+'<br>Seu imc é:'+imc.toFixed(2)+'<br><br>Classificação:Magreza');
    }else if(imc >18.5 && imc<=24.9 ){
        result.innerHTML =(nome+'<br>'+'<br>Seu imc é: '+imc.toFixed(2) +'<br><br>Classificação Normal ');
    }else if(imc>=25 && imc <=29.9){
        result.innerHTML =(nome+'<br>'+'<br>Seu imc é: '+imc.toFixed(2) +'<br><br>Classificação SobrePeso Obesidade grau:1 ');
    }else if(imc>=30.0 && imc<=39.9){
        result.innerHTML =(nome+'<br>'+'<br>Seu imc é: '+imc.toFixed(2) +'<br><br>Classificação SobrePeso Obesidade grau:2 ');
    }else if(imc>40){
        result.innerHTML =(nome+'<br>'+'<br>Seu imc é: '+imc.toFixed(2) +'<br><br>Classificação SobrePeso Obesidade grau:3 ');
    }
}