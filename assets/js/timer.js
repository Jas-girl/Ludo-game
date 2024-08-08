const timer=document.getElementById('watch');
var hr=0;
var min=0;
var sec=0;
var stoptime=true;
var count=0;
function startTimer(){
    if(stoptime==true){
        stoptime=false;
        timerCycle();
    }
}
function timerCycle(){
    if(count>2){
        stopTimer();
    }
    if(stoptime==false){
        hr=parseInt(hr);
        min=parseInt(min);
        sec=parseInt(sec);
        sec=sec+1;
        if(sec=60){
            min=min+1;
            sec=0;
        }
        if(min=60){
            hr=hr+1;
            min=0;
            sec=0;
        }
        timer.innerHTML=hr+":"+min+":"+sec;
        setTimeout("timerCycle()",1000);
        count++;
    }
}
function resetTimer(){
    timer.innerHTML="00:00:00";
    stoptime=true;
}
function stopTimer(){
    if(stoptime==false){
        stoptime=true;
    }
}