const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");
const displayKey = document.querySelector('.key h2');

document.addEventListener("keydown", (event) => {
    if (event.keyCode == 65) {
        audioBoom.src = "sounds/boom.wav";
    } else if (event.keyCode == 83) {
        audioClap.src = "sounds/clap.wav";
    } else if (event.keyCode == 68) { 
        audioHihat.src = "sounds/hihat.wav";
    } else if (event.keyCode == 70) {
        audioKick.src = "sounds/kick.wav";
    } else if (event.keyCode == 71) {
        audioOpenHat.src = "sounds/openhat.wav";
    } else if (event.keyCode == 72) {
        audioRide.src = "sounds/ride.wav";
    } else if (event.keyCode == 74){
        audioSnare.src = "sounds/snare.wav";
    } else if (event.keyCode == 75) {
        audioTink.src = "sounds/tink.wav";
    } else if (event.keyCode == 76 ) {
        audioTom.src = "sounds/tom.wav";
    } else { displayKey.innerText = e.key}
})

boom.addEventListener("click", () => {
    audioBoom.src = "/sounds/boom.wav";
  });
clap.addEventListener("click", () => {
    audioClap.src = "sounds/clap.wav";
  });
hihat.addEventListener("click", () => {
    audioHihat.src = "sounds/hihat.wav";
  });
kick.addEventListener("click", () => {
    audioKick.src = "sounds/kick.wav";
  });
openhat.addEventListener("click", () => {
    audioOpenHat.src = "sounds/openhat.wav";
  });
ride.addEventListener("click", () => {
    audioRide.src = "sounds/ride.wav";
  });
snare.addEventListener("click", () => {
    audioSnare.src = "/sounds/snare.wav";
  });
tink.addEventListener("click", () => {
    audioTink.src = "/sounds/tink.wav";
  });
tom.addEventListener("click", () => {
    audioTom.src = "/sounds/tom.wav";
  });