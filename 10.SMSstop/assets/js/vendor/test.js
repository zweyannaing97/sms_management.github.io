let countdownNumberEl = document.getElementById('countdown-number');
let countdown = 60;

countdownNumberEl.textContent = countdown;
console.log(countdown)

setInterval(function() {
    countdown = --countdown <= 0 ? 60 : countdown;

    countdownNumberEl.textContent = countdown;
    setTimeout(function(){
        window.location.replace("10.resendotp.html");
    },58500)
    
}, 1000);