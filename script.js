const time = document.querySelector(".stop-watch h1");
const myStop = document.querySelector(".buttons button:nth-child(1)");
const myStart = document.querySelector(".buttons button:nth-child(2)");
const myReset = document.querySelector(".buttons button:nth-child(3)");
let x = true;
let mySeconds = 0;
let myMinutes = 0;
let myHours = 0;
let myInterval = null;
let sec, min, hrs;

myStart.addEventListener("click", () => {
    if (x == true) {
        myInterval = setInterval( printTime, 1000);
        x = false;
    }
});

myStop.addEventListener("click", () => {
    console.log("good");
    clearInterval(myInterval);
    x = true;
});


myReset.addEventListener("click", () => { 
    console.log("reset");
    mySeconds = 0;
    myMinutes = 0;
    myHours = 0
    time.innerHTML = `00:00:00`;
});;

function printTime() {
    mySeconds++;
    myMinutes = Math.floor(mySeconds / 60);
    myHours = Math.floor(myMinutes / 60);

    // if ((mySeconds % 60) <= 10) {
    //     sec = `0${(mySeconds % 60)}`;
    // } else {
    //     sec = mySeconds % 60;
    // }

    // if ((myMinutes % 60) <= 10) {
    //     min = `0${(myMinutes % 60)}`;
    // } else {
    //     min = myMinutes % 60;
    // }

    // if (myHours <= 10) {
    //     hrs = `0${myHours}`;
    // } else {    
    //     hrs = myHours % 60;
    // }
    
    sec = ((mySeconds % 60) <= 10) ? sec = `0${(mySeconds % 60)}` : sec = mySeconds % 60;
    min = ((myMinutes % 60) <= 10) ? min = `0${(myMinutes % 60)}` : min = myMinutes % 60;
    hrs = (myHours <= 10) ? hrs = `0${myHours}` : hrs = myHours

    time.innerHTML = `${hrs}:${min}:${sec}`;
}