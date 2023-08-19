const palavras = ["Branding", "Social media", "Identidade", "Comunicação", "Web Dev"];
const elementoPalavra = document.getElementById("palavra");
const elementoCursor = document.getElementById("cursor");

function digitarPalavras() {
    let indicePalavra = 0;
    let palavraAtual = palavras[indicePalavra];
    let indiceLetra = 0;
    let velocidadeDigitacao = 150; // Ajuste a velocidade de digitação em milissegundos

    function digitarLetra() {
        if (indiceLetra < palavraAtual.length) {
            elementoPalavra.textContent = palavraAtual.substring(0, indiceLetra + 1);
            indiceLetra++;
            setTimeout(digitarLetra, velocidadeDigitacao);
        } else {
            elementoCursor.style.display = "none";
            setTimeout(apagarPalavra, 1000); // Atraso antes de apagar a palavra
        }
    }

    function apagarPalavra() {
        if (indiceLetra > 0) {
            elementoPalavra.textContent = palavraAtual.substring(0, indiceLetra - 1);
            indiceLetra--;
            setTimeout(apagarPalavra, velocidadeDigitacao / 2);
        } else {
            elementoCursor.style.display = "inline-block";
            indiceLetra = 0;
            indicePalavra = (indicePalavra + 1) % palavras.length;
            palavraAtual = palavras[indicePalavra];
            setTimeout(digitarLetra, 500); // Atraso antes de digitar nova palavra
        }
    }

    digitarLetra(); // Iniciar a animação
}

digitarPalavras();