let nomeHeroi = "Garantelo";
let xp = 1200000
let nivel = "";

for (let i = xp; i <= 1000; i++){
    nivel = "Ferro"
}

for (i = xp; i >= 1001 && i <= 2000; i++){
    nivel = "Bronze"
}

for (i = xp; i >= 2001 && i <= 5000; i++){
    nivel = "Prata"
}

for (i = xp; i >= 5001 && i <= 7000; i++){
    nivel = "Ouro"
}

for (i = xp; i >= 7001 && i <= 8000; i++){
    nivel = "Platina"
}

for (i = xp; i >= 8001 && i <= 9000; i++){
    nivel = "Ascendente"
}

for (i = xp; i >= 9001 && i <= 10000; i++){
    nivel = "Imortal"
}

if (i > 10000){
    nivel = "Radiante"
}
console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);