const adicionarComentario = document.getElementById("paragrafo")
adicionarComentario.innerHTML += " SALVEFAMÍLIA"



const valorInput = () =>{
    const valor = document.getElementById("texto")

    console.log(valor.value);

}


const alterarP = () => {
    const alterar = document.getElementById("texto")

    adicionarComentario.innerHTML = alterar.value
}
