let question = document.getElementById('question');
let choices = document.getElementById('choices');
function getQuestions(){
  return  fetch('https://the-trivia-api.com/api/questions').then((res)=>res.json()).then((data)=>data);
}

let score  =0 ;
function endScreen(){
  document.getElementById('questionBlock').style.display = 'none';
  document.getElementById('endingScreen').style.display = 'flex';
  document.getElementById('restartButton').addEventListener('click', ()=> renderQuestions());
  document.getElementById('score').innerText = score ;
  i =0;
}
let questions = [];
async function renderQuestions(){
  questions = await getQuestions();
  i =0;
  score =0 ;
  document.getElementById('questionBlock').style.display = 'flex';
  document.getElementById('endingScreen').style.display = 'none';
    
    
    renderQuestion(0);

}
function renderQuestion(i){
      
  if(i >= 10){
    return ;
  }
  question.innerText= questions[i].question;
  let isChoosed = false;
  let currentCh = 0;
  let identifier = 'ch';
  choices.innerHTML = '';
  for(let j =1;j<=4;j++){
    let choice = document.createElement('div');
    choice.classList.add('ch'+j);
    choice.id = 'ch' + j;
    choice.innerHTML = '';
    choice.classList.add(identifier+j);
    let title = document.createElement('h3');
    
  
    if(!isChoosed){
      if(j == 4){
        title.innerText = questions[i].correctAnswer;
        title.addEventListener('click' , ()=>score++);
        isChoosed = true;
      }else{
        if(Math.floor(Math.random()*2) == 0){
          title.innerText = questions[i].correctAnswer;
          title.addEventListener('click' , ()=>score++);
          isChoosed= true;
        }else{
          title.innerText = questions[i].incorrectAnswers[currentCh++];
        }
      }
    }else{
      title.innerText = questions[i].incorrectAnswers[currentCh++];
    }
    choice.appendChild(title);
    choice.addEventListener('click' , ()=>{
      if(i < 9){
        renderQuestion(i+1)
      }else endScreen();
    });
    choices.appendChild(choice);
    console.log('H');
  }
  

}
renderQuestions();

