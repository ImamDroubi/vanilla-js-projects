let RANDOM_QUOTE_API = 'https://api.quotable.io/random';
let quoteArea = document.getElementById("quote");
let typingArea = document.getElementById("typingArea");
let timer = document.getElementById("timer");
let freez = document.getElementById("freeze");
let score = document.getElementById("score");
let restart = document.getElementById("restart");
document.getElementsByTagName("body")[0].addEventListener('click' , () =>{
    typingArea.focus();
})
typingArea.addEventListener("input" ,() => {
    let txt = typingArea.value.split('');
    let chars = quoteArea.querySelectorAll("span");
    let x = true ;
    chars.forEach((char, index) =>{
        if(txt[index] == null){
            char.classList.remove('correct');
            char.classList.remove('wrong');
            x= false;
        }else if (txt[index] === char.innerText){
            char.classList.add('correct');
            char.classList.remove('wrong');
        }else{
            char.classList.remove('correct');
            char.classList.add('wrong');
            x = false;
        }
    });
    if(x){
        document.getElementById("container").style.display = "none";
        timer.style.display = "none";
        quoteArea.style.display = "none";
        typingArea.style.display = "none";
        freeze.style.display = "flex";
        restart.style.display = "block";
        let words= Math.floor(chars.length/4);
        let time = parseInt(timer.innerText);
        let wpm  = Math.floor((60*words)/time);
        score.innerText = (wpm + "WPM");
        score.style.display = "block";
        //renderQuote();
    }
})
function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API).then(
        response => response.json().then(
            data => data.content
        )
    )
    
    
}
let currentTime ;
function setTimer(){
    timer.innerText = 0 ;
    currentTime = new Date;
    setInterval(() => {
        timer.innerText = getTimerValue();
    } , 1000)   
}
function getTimerValue(){
    return Math.floor((new Date() - currentTime )/ 1000);
}
async function renderQuote(){
    
    freeze.style.display = "none";
    restart.style.display = "none";
    document.getElementById("container").style.display = "flex";
        timer.style.display = "block";
        quoteArea.style.display = "block";
        typingArea.style.display = "block";
        typingArea.focus();
        
    setTimer();
    let quote = await getRandomQuote();
    typingArea.value = null;
    quoteArea.innerText = '';
    quote.split('').forEach(character => {
        let characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        quoteArea.appendChild(characterSpan);  
    });
    
    
    
}
renderQuote();


