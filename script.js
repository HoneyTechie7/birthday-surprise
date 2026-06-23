const password = "sivamoni";

function hideAll(){

document
.querySelectorAll(".screen")
.forEach(screen => {

screen.classList.remove("active");

});

}

function showPassword(){

hideAll();

document
.getElementById("passwordScreen")
.classList.add("active");

}

function checkPassword(){

const entered =
document.getElementById("password").value;

if(entered === password){

hideAll();

document
.getElementById("missionScreen")
.classList.add("active");

}else{

document
.getElementById("error")
.innerHTML =
"❌ Wrong Password Hero";
}
}

function acceptMission(){

hideAll();

document
.getElementById("dashboard")
.classList.add("active");

}

/* Floating Hearts */

function createHeart(){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML =
Math.random() > 0.5 ? "❤️" : "✨";

heart.style.left =
Math.random() * 100 + "vw";

heart.style.animationDuration =
Math.random() * 4 + 5 + "s";

document.body.appendChild(heart);

setTimeout(() => {

heart.remove();

},9000);
}

setInterval(createHeart,500);

/* Funny Alerts */

const messages = [

"⚠️ Too Much Handsomeness Detected",

"🏆 Achievement Unlocked: Best Boyfriend",

"❤️ Stole Monika's Heart",

"🎂 Birthday Boy Located",

"😎 Agent Siva Online"

];

setInterval(() => {

console.log(
messages[
Math.floor(
Math.random()*messages.length
)
]
);

},5000);