const firstAnswer = document.querySelector(".answer-first");
const secondAnswer = document.querySelector(".answer-second");

let nowNum = 0;
let score = 0;
let resultName = "";

const question = document.querySelector(".question-text");
const progressBar = document.querySelector(".progress-bar__text");
const progressNow = document.querySelector(".progress-bar__now");

firstAnswer.addEventListener("click", firstClick);
secondAnswer.addEventListener("click", secondClick);


function firstClick() {
    score -= 1;
    setQna(++nowNum);
}

function secondClick() {
    score += 1;
    setQna(++nowNum);
}

function setProbar(i) {
    progressBar.innerText = `${i+1}/9`;
    progressNow.style.width = `calc(100% / 9 * ${i+1})`;
}

function setQna(i) {
    checkPart(nowNum);
    if (i === 9) return;
    question.innerText = qnaArray[i].q;
    firstAnswer.innerText = qnaArray[i].a[0];
    secondAnswer.innerText = qnaArray[i].a[1];
    setProbar(i);
}

function checkPart(nowNum) {
    if (nowNum === 3) {
        calcResult(score)
        score = 0;
    }
    else if (nowNum === 6) {
        calcResult(score)
        score = 0;

    }
    else if (nowNum === 9) {
        calcResult(score)
        progress.classList.add("hidden");
        result.classList.remove("hidden");
        setResult();
    }
}

function calcResult(score) {
    if (score < 0) {
        resultName += "A";
    }
    else {
        resultName += "B";
    }
}

setQna(0); // 문제 초기화
