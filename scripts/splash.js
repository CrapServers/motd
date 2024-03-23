const splashes = [
    "Even worse!",
    "MAXIMUM OVERDRIVE!",
    "Intel Pentium my beloved",
    "Brought to you by Source",
    "Garry's Mod 2",
    "Suffering from Brainrot",
    "Guaranteed Server Crash!",
    "Check out the GitHub!",
    "HI PLEASE ENABLE JS",
    "This is a cry for help",
    "It's not shutting down!",
    "Crazy Physics!",
    "Surprise Restarts!"
]
const choice = Math.floor(Math.random()*splashes.length);

window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("splash").innerHTML = splashes[choice];
});