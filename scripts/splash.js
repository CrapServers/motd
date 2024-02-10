const splashes = [
    "Even worse!",
    "MAXIMUM OVERDRIVE!",
    "Intel Pentium my beloved",
    "Brought to you by Source",
    "Garry's Mod 2",
    "Suffering from Brainrot",
    "Guaranteed Server crash!"
]
const choice = Math.floor(Math.random()*splashes.length);

window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("splash").innerHTML = splashes[choice];
});