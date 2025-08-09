let gameseq = [];
let userseq = [];
let h2  = document.querySelector("h2");
let  btns = ["yellow" , "red", "purple", "green"];


let started = false;
let level = 0;
document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("game has started");
        started = true;
        levelup();
    }
})
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },  300)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },  300)
}
function levelup(){
    userseq = [];
    level++;
    h2.innerText =  `level ${level}`;
    // random button choose
    let ranInd = Math.floor(Math.random() * 3);
    let randcolor = btns[ranInd];
    let ranbtn = document.querySelector(`.${randcolor}`);
    // console.log(ranbtn);
    // console.log(ranInd);
    // console.log(randcolor);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(ranbtn);
}
function checkans(idx){
    //console.log("Current level: ",level);
    //let idx = level - 1;
    if(userseq[idx] == gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup, 1000);
            //levelup();
        }
        //console.log("same value");
    }else{
        h2.innerHTML= ` Game over ! your score was <b> ${level} </b>  <br> Press any key `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}
function btnPress(){
    console.log("button press");
    let btn = this;
    userflash(btn);
    usercolor = btn.getAttribute("id");
    //console.log(usercolor);
    userseq.push(usercolor);
    checkans(userseq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameseq =[];
    userseq = [];
    level = 0;
}