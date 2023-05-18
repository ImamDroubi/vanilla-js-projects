let toDo = document.getElementById("toDo")
let typing = document.getElementById("typing")
let quiz = document.getElementById("quiz")
let sounds = document.getElementById("sounds")

function changeLink(link){
  document.location.href = link;
}
toDo.addEventListener("click" , ()=>changeLink("projects/To Do/index.html"));
typing.addEventListener("click" , ()=>changeLink("projects/Typing project modified/index.html"));
quiz.addEventListener("click" , ()=>changeLink("projects/Quiz App/index.html"));
sounds.addEventListener("click" , ()=>changeLink("projects/sounds/index.html"));