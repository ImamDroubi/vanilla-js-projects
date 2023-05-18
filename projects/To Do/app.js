let typingArea = document.getElementById("newTask");
let cont = document.getElementById("container");
let check = '<svg id="check" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"> <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/> </svg> ';
let wrong = '<svg id= "delete" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>';
typingArea.addEventListener("keypress" , (event) =>{
    
    console.log(event);
    if(event.key === 'Enter'){
        event.preventDefault();
        createTask();
    }
    
})
let counter = 0 ;
function createTask(){
    let task = document.createElement("div");
    task.classList.add("task");
    let taskID = "task" + counter ;
    task.id = taskID;
    counter++;
    let txt = typingArea.value ;
    let par = document.createElement("p");
    par.setAttribute("parentsId" , taskID);
    par.innerText = txt;
    let buts = document.createElement("div");
     buts.classList.add("buttons");
    let checkEl = document.createElement("div");
    checkEl.innerHTML = check;
    checkEl.firstChild.setAttribute("parentsId" , taskID);
    checkEl.addEventListener("click" , (ev)=>{
        let idd = ev.srcElement.getAttribute("parentsId");
        document.getElementById(idd).firstChild.style.textDecoration = "line-through";
    })
    let wrongEl = document.createElement("div");
    wrongEl.innerHTML = wrong; 
    wrongEl.firstChild.setAttribute("parentsId" , taskID);
    wrongEl.addEventListener("click" , (ev)=>{
        let idd = ev.srcElement.getAttribute("parentsId");
        document.getElementById(idd).style.display = "none";
    })

    task.appendChild(par);
    

    buts.appendChild(checkEl);
    buts.appendChild(wrongEl);
    task.appendChild(buts);
   cont.appendChild(task);
   typingArea.value = null;

}
