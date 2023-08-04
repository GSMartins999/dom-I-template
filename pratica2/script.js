///////////////Pegar nome, endereço, email///////////////////////////


const pegarNome = () => {
  const nomeDoImput = document.getElementById("nome");
  console.log(nomeDoImput.value);
};



const pegarEndereco = () => {
  const nomeDoEndereco = document.getElementById("endereco");
  console.log(nomeDoEndereco.value);
};



const pegarEmail = () => {
  const nomeEmail = document.getElementById("email");
  console.log(nomeEmail.value);
};




///////////////////////////Limpar///////////////////////////////////
const nomeDoInput = document.getElementById("nome");
const nomeDoEndereco = document.getElementById("endereco");
const nomeEmail = document.getElementById("email");


const limparNome = () => {
  nomeDoInput.value = "";
};


const limparEndereco = () => {
    nomeDoEndereco.value = ""
}

const limparEmail = () =>{
    nomeEmail.value = ""
}