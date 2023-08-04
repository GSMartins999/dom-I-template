let clickInicial = 0

// Aparece no console.
const contadorDeCliques = () =>{

    clickInicial += 1
    console.log(clickInicial);
}


////////////////////////////////

//Aparece na tela.

const apareceNaTela = () =>{

    const contadorElemento = document.getElementById("botao")
    contadorElemento.innerHTML += clickInicial

}

