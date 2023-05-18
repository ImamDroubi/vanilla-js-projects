let rain = new Audio("rain.mp3");
let ocean = new Audio("ocean.mp3");
let thunder = new Audio("thunder.mp3");
let wind = new Audio("wind.mp3");
let campFire = new Audio("campfire.mp3");

let rainSlide = document.getElementById("rain");
let thunderSlide = document.getElementById("thunder");
let oceanSlide = document.getElementById("ocean");
let windSlide = document.getElementById("wind");
let campFireSlide = document.getElementById("campFire");

rain.loop = true;
ocean.loop = true;
wind.loop = true;
thunder.loop = true;
campFire.loop = true;

rainSlide.value =0 ;
oceanSlide.value =0 ;
thunderSlide.value = 0;
windSlide.value = 0;
campFireSlide.value =0 ;
rain.volume =0 ;
ocean.volume = 0;
thunder.volume =0 ;
wind.volume =0 ;
campFire.volume =0;

window.addEventListener("click" , ()=>{
    rain.play();
    ocean.play();
    thunder.play();
    wind.play();
    campFire.play();
})

rainSlide.addEventListener("input" , ()=>{
    rain.volume = (rainSlide.value/10.0);
})
thunderSlide.addEventListener("input" , ()=>{
    thunder.volume = (thunderSlide.value/10.0);
})
oceanSlide.addEventListener("input" , ()=>{
    ocean.volume = (oceanSlide.value/10.0);
})
windSlide.addEventListener("input" , ()=>{
    wind.volume = (windSlide    .value/10.0);
})
campFireSlide.addEventListener("input" , ()=>{
    campFire.volume = (campFireSlide.value/10.0);
})