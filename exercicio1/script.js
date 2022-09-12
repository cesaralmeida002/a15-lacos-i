/*Utilizando o laço `while`, escreva um código que recebe um `prompt`
 perguntando se a pessoa deseja comer mais coxinhas. 
 “S” deve representar “sim”, e “N” deve representar “não”. 
 Crie também uma `let conta` para guardar o valor total.*/

 let coxinha = prompt("Você comeu coxinha?").toLowerCase()
 let soma = 0

while (coxinha == "s" && coxinha !== "n") { 
    soma += 2.5   
    coxinha = prompt ("Quer mais coxinha?").toLowerCase()
      
}

console.log("você pagará:", soma)

 /*Toda vez que a resposta for **sim**, o laço deve se repetir, 
 e devemos adicionar R$2.50 ao valor total. 
 Quando a resposta não for **sim**, 
 devemos imprimir o valor total da conta.*/