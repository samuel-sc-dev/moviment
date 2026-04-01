const imagens = [
    "imagens/c1.png",
    "imagens/c2.png",
    "imagens/c3.png"
];

// pega um número aleatório
const index = Math.floor(Math.random() * imagens.length);

// aplica no background
document.body.style.background = `url('${imagens[index]}') no-repeat center center/cover`;

function clicouSim() {
    window.location.href = "https://samuel-sc-dev.github.io/moviment/bv.html";
}