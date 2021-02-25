const again = document.querySelector(".again");
const resultTitle = document.querySelector(".result-title__char");
const resultText = document.querySelector(".result-title__text");
const resultDetails = document.querySelector(".result-details__text");
const recommList = document.querySelector(".result-recommend__conlist");
const recommChar = document.querySelector(".recommend-details");


again.addEventListener("click", restart);   // 다시하기 버튼을 클릭하면 페이지 새로 로드

function setResult() {
    resultArray.forEach(function(item) {
        if (item.resName === resultName) {
            resultTitle.innerText = item.resName;
            resultText.innerText = item.resDesc;
            resultDetails.innerText = item.resText;
            recommChar.innerText = item.recoChar;
        }
    })    
}

function restart() {
    location.reload(true);
}

