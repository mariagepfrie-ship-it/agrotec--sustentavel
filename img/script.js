function mostrarMensagem() {
    alert("O Agro Forte acredita que a produção sustentável é o caminho para o futuro!");
}

let contador = 0;

function plantarArvore() {
    contador++;
    document.getElementById("arvores").innerText = contador;
}
