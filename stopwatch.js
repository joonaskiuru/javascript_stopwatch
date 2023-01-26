var start_button = document.getElementById('start');
var stop_button = document.getElementById('stop');
var reset_btn = document.getElementById('reset');

var add_ms = document.getElementById('ms');
var add_s = document.getElementById('s');
var add_m = document.getElementById('m');

var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var start;

var timer_on = false;

start_button.onclick = function() {
    document.activeElement.blur();
    if(!timer_on){
        clearInterval(start);
        start = setInterval(startTimer,10);
        timer_on = true;
    }
}

stop_button.onclick = function() {
    document.activeElement.blur();
    if(timer_on){
        clearInterval(start);
        timer_on = false;
    }
}

reset_btn.onclick = function() {
    document.activeElement.blur();
    if(!timer_on){
        clearInterval(start);
        timer_on = false;
        milliseconds = 0;
        seconds = 0;
        minutes = 0;
        add_ms.innerHTML = '00';
        add_s.innerHTML = '00';
        add_m.innerHTML = '00';
    }
}

function startTimer() {
    milliseconds++;
    if (milliseconds < 10){
        add_ms.innerHTML = '0' + milliseconds;        
    }
    else{
        add_ms.innerHTML = milliseconds;
    }

    if (milliseconds > 99){
        seconds++;
        milliseconds = 0;
        add_ms.innerHTML = '00';
    }

    if (seconds < 10 ){
        add_s.innerHTML = '0' + seconds;         
    }
    else{
        add_s.innerHTML = seconds;
    }
    
    if (seconds == 60){
        minutes++;
        seconds = 0;
        add_s.innerHTML = '00';
    }

    if (minutes < 10 ){
        add_m.innerHTML = '0' + minutes;         
    }
    else{
        add_m.innerHTML = minutes;
    }
}