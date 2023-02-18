const watchtag = document.getElementsByClassName("stopwatch")[0];
const startTag = document.getElementsByClassName("start")[0];
const pauseTag = document.getElementsByClassName("pause")[0];
const continueTag = document.getElementsByClassName("continue")[0];
const restartTag = document.getElementsByClassName("restart")[0];
let seconds = 0, minutes = 0, hours = 0;
//setInterval(callback,delay)
let startTime = () => {
    seconds += 1;
    if (seconds === 60) {
        minutes += 1
        seconds = 0;
        if (minutes === 60) {
            hours += 1;
            minutes = 0;
        }
    };
    const secondstext = seconds < 10 ? "0" + seconds.toString() : seconds;
    const minutestext = minutes < 10 ? "0" + minutes.toString() : minutes;
    const hourstext= hours<10? "0"+hours.toString():hours
    watchtag.textContent = hourstext + ":" + minutestext + ":" + secondstext;

    console.log(hours, minutes, seconds);
};
let variableId;
startTag.addEventListener("click", () => {
     variableId = setInterval(startTime, 100);
});

pauseTag.addEventListener("click", () => {
    clearInterval(variableId);
});
continueTag.addEventListener("click", () => {
    clearInterval(variableId);
    variableId = setInterval(startTime, 100);
});
restartTag.addEventListener("click", () => {
    clearInterval(variableId);
    (seconds = 0), (minutes = 0), (hours = 0);
    variableId = setInterval(startTime, 100);
})