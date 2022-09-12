/*Crie um array com 5 strings. 
Faça um programa que percorra este array e imprima as strings
 em formato de ranking, como no exemplo abaixo:*/

 const maioresPaises = ["Rússia", "Canadá", "China", "EUA", "Brasil"];
 let raking = 1

 for (let i = 0; i < maioresPaises.length; i++)
    console.log(`Os maiores países nsão: ${raking++} ${maioresPaises[i]}`)