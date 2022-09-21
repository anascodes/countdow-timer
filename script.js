let givenTime = prompt("Enter starting time in minutes:");
let time = givenTime * 60;
const cowntdownEl = document.getElementById("Countdown");

setInterval(updateCounter, 1000)

function updateCounter() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    cowntdownEl.innerHTML = `${minutes} : ${seconds}`
    time--;

    if (minutes == 0 && seconds == 0) {
        time-- ;
    }
}
