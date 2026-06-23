const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwj2i_x1zid_nyg7F7r1GhaZJPfaMTgHhDummVIWQUzJN-0M0w1UDVr7SZ9R9gmUdOjPg/exec";

const quiz = [

{
type:"mcq",
question:"When did our Love Journey Started?",
options:["Dec 7th","June 20th","July 18th","June 24th"],
correct:"June 24th"
},

{
type:"mcq",
question:"Which year our Love Journey Started?",
options:["2018","2019","2020","2021"],
correct:"2021"
},

{
type:"mcq",
question:"Nee Chinnapudud nuv ela undevedivi?",
options:["Silent","Good Boy","Chittini panulu chesevadivi","Edchevadivi"],
correct:"Chittini panulu chesevadivi"
},

{
type:"mcq",
question:"Veetilo nenu first edi prefer chestanu?",
options:["Chocolates","Veg-Manchuria","Ice-Cream","Chicken Biryani"],
correct:"Veg-Manchuria"
},

{
type:"mcq",
question:"Non-Veg pedte week ki enni days tintavu",
options:["7 days","6 days","5 days","4 days"],
correct:"6 days"
},

{
type:"mcq",
question:"Veetilo edi nenu ekkuva prefer chesta",
options:["Tinadam","Nidrapodam","Tiragadam","TV Chudadam"],
correct:"Nidrapodam"
},

{
type:"mcq",
question:"Place you want to visit with me immediately after marriage?",
options:["Araku","Tirupathi","Kasi","Lambasingh"],
correct:"Tirupathi"
},

{
type:"text",
question:"🤫 One thing you never told me?"
},

{
type:"mcq",
question:"😎 Free day means?",
options:["Cars","Food","Cars + Food","Sleep"],
correct:"Cars + Food"
},

{
type:"text",
question:"❤️ Message to future Siva"
}

];

let current = 0;
let score = 0;
let responses = [];

showQuestion();

function showQuestion(){

if(current >= quiz.length){
return;
}

const q = quiz[current];

document.getElementById("progress").innerHTML =
`🏁 Pit Stop ${current + 1} / ${quiz.length}`;

document.getElementById("question").innerHTML =
q.question;

let html = "";

if(q.type === "mcq"){

q.options.forEach(option => {

html += `
<label class="option">
<input type="radio"
name="answer"
value="${option}">
${option}
</label>
`;

});

}
else{

html = `
<textarea
id="textAnswer"
rows="5"
placeholder="Write here..."></textarea>
`;

}

document.getElementById("answers").innerHTML = html;

}

function nextQuestion(){

if(current >= quiz.length){
return;
}

const q = quiz[current];

if(q.type === "mcq"){

const selected =
document.querySelector(
'input[name="answer"]:checked'
);

if(!selected){

alert("Choose an answer ❤️");
return;

}

responses.push(selected.value);

if(selected.value === q.correct){
score++;
}

}
else{

const text =
document.getElementById("textAnswer").value;

responses.push(text || "");

}

current++;

if(current === quiz.length){

document.querySelector(".next-btn").disabled = true;

submitQuiz();

return;

}

showQuestion();

}

async function submitQuiz(){

const data = {
name:"Siva",
q1:responses[0] || "",
q2:responses[1] || "",
q3:responses[2] || "",
q4:responses[3] || "",
q5:responses[4] || "",
q6:responses[5] || "",
q7:responses[6] || "",
q8:responses[7] || "",
q9:responses[8] || "",
q10:responses[9] || "",
score:score
};

try{

await fetch("https://formspree.io/f/mrewblln",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

document.body.innerHTML = `
<div class="quiz-card">

<h1>🏆 Mission Complete</h1>

<h2>${score}/8 Correct</h2>

<p>
🚗 Cars Lover<br>
🍗 Food Explorer<br>
🚀 Dream Chaser<br>
🔥 Future Hubby
</p>

<p>
Happy Birthday Siva ❤️🎂
</p>

<button
class="next-btn"
onclick="location.href='gift.html'">

🎁 Unlock Final Level

</button>

</div>
`;

}
catch(error){

console.log(error);

alert("Submission Failed 😢");

}

}