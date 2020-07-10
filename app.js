var seconds = 0;
var minutes = 0;
var hours = 0;


var displaysec = 0;
var displaymin = 0;
var displayhour = 0;


var interval = null;

var status = "stopped";




function stopWatch(){

    seconds++;

    if(seconds / 60 == 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 == 1){
            minutes = 0;
            hours++;
        }
    }

     if(seconds < 10){
         displaysec = "0" + seconds.toString();
     }
     else{
         displaysec = seconds;
     }

     if(minutes < 10){
         displaymin = "0" + minutes.toString();
     }
     else{
         displaymin = minutes;
     }


     if(hours < 10){
         displayhour = "0" + hours.toString();
     }
     else{
         displayhour = hours;
     }


     document.getElementById("display").innerHTML = displayhour + ":" + displaymin + ":" + displaysec;


}

//window.setInterval(stopWatch, 10);


function startStop(){

    if(status == "stopped"){

        interval = window.setInterval(stopWatch, 10);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";
    }

    else {

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";
    }
}

function reset() {

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";
}
