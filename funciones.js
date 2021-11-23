let audio = document.getElementById("musica")
let play_btn = document.getElementById("Play")
let pausa_btn = document.getElementById("pausa")

play_btn.addEventListener("click",() => {
    audio.play();
});

pausa_btn.addEventListener("click",() => {
    audio.pause();
});

