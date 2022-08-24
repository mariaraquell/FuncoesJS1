var area = document.getElementById('area')

function entrar(){
    var nome = prompt("Digite seu nome: ")
    var sobrenome = prompt("Digite seu sobrenome: ")

    if(nome === '' || nome === null || sobrenome === '' || sobrenome === null){
        alert("Ops! Algo deu errado...")
        area.innerHTML = "Clique no botão para acessar..."
    }else{
        area.innerHTML = "Bem-vindo(a), " + nome + " " + sobrenome + "!";

        let botaoSair = document.createElement ("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);
    }

}

function sair(){
    alert("Até mais!")
    area.innerHTML = "Você saiu!"
}