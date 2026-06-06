function showReward(){
    document.getElementById("reward").innerHTML =
    "🎉 Congratulations! You've just earned 200 Buckies";
}

function downloadGame(){
    alert("Download will begin soon!");
}

function learnMore(){
    alert("Coming soon!");
}

let player = 35;

function addPlayer(){
    player++;
    document.getElementById("playerCount").innerHTML =
    player;
}