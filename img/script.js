
function mostrarInfo(){
    document.getElementById("info").style.display = "block";
}

function iniciarContador(){

    let litros = 0;

    const contador = setInterval(() => {

        litros += 25;

        document.getElementById("litros").textContent = litros;

        if(litros >= 1000){
            clearInterval(contador);
        }

    }, 100);
}
