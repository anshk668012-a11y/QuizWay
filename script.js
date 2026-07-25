const questions=[

{

question:"Which language runs in the browser?",

answers:["Java","Python","JavaScript","C"],

correct:2

},

{

question:"HTML stands for?",

answers:[

"Hyper Text Markup Language",

"High Text Machine Language",

"Hyperlinks Text Markup Language",

"None"

],

correct:0

},

{

question:"Which CSS property changes text color?",

answers:["background","font-style","color","text"],

correct:2

},

{

question:"Which company developed Java?",

answers:["Google","Microsoft","Sun Microsystems","Apple"],

correct:2

},

{

question:"Which symbol is used for comments in JavaScript?",

answers:["//","<!-- -->","#","**"],

correct:0

}

];

let current=0;

let score=0;

let timer=15;

let interval;

const startBtn=document.getElementById("startBtn");

const quiz=document.getElementById("quiz-screen");

const start=document.getElementById("start-screen");

const result=document.getElementById("result-screen");

const question=document.getElementById("question");

const answers=document.getElementById("answers");

const nextBtn=document.getElementById("nextBtn");

const scoreText=document.getElementById("score");

const finalScore=document.getElementById("finalScore");

const time=document.getElementById("time");

const progress=document.getElementById("progress-bar");

startBtn.onclick=()=>{

start.classList.add("hide");

quiz.classList.remove("hide");

loadQuestion();

}

function loadQuestion(){

clearInterval(interval);

timer=15;

time.innerHTML=timer;

interval=setInterval(countdown,1000);

nextBtn.classList.add("hide");

let q=questions[current];

question.innerHTML=(current+1)+". "+q.question;

answers.innerHTML="";

progress.style.width=((current)/questions.length)*100+"%";

q.answers.forEach((ans,index)=>{

const btn=document.createElement("button");

btn.innerHTML=ans;

btn.classList.add("answer");

btn.onclick=()=>selectAnswer(btn,index);

answers.appendChild(btn);

});

}

function countdown(){

timer--;

time.innerHTML=timer;

if(timer==0){

clearInterval(interval);

nextQuestion();

}

}

function selectAnswer(btn,index){

clearInterval(interval);

let correct=questions[current].correct;

document.querySelectorAll(".answer").forEach(b=>b.disabled=true);

if(index===correct){

btn.classList.add("correct");

score++;

scoreText.innerHTML=score;

}else{

btn.classList.add("wrong");

document.querySelectorAll(".answer")[correct].classList.add("correct");

}

nextBtn.classList.remove("hide");

}

nextBtn.onclick=()=>{

nextQuestion();

}

function nextQuestion(){

current++;

if(current<questions.length){

loadQuestion();

}else{

showResult();

}

}

function showResult(){

quiz.classList.add("hide");

result.classList.remove("hide");

progress.style.width="100%";

finalScore.innerHTML=`${score} / ${questions.length}`;

}

function restartQuiz(){

current=0;

score=0;

scoreText.innerHTML=0;

result.classList.add("hide");

quiz.classList.remove("hide");

loadQuestion();

}