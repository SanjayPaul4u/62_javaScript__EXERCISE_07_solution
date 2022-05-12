console.log("Exercise 06 solution");
//WALL CLOCK

function updateClock() {
    //GET THE CURRENT DATE
    let currentTime = new Date();

    //EXTRACT THE HOUR , MINUTE, SECOND FROM CURRENT DATE
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();

    //PAD 0 IF THE MINUTE, SECOND, HOURS IS LESS THEN 10(SINGLE DIGIT)
    currentHour = (currentHour < 10 ? "0" : "") + currentHour;
    currentMinute = (currentMinute < 10 ? "0" : "") + currentMinute;
    currentSecond = (currentSecond < 10 ? "0" : "") + currentSecond;


    //CONVERT RAILWAY CLOCK TO AM/PM CLOCK
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour === 0) ? 12 : currentHour;

    //CHOOSED THE AM/PM AS PER THE TIME OF THE DAY
    let timeOfDay = (currentHour < 12) ? "AM" : "PM";



    //PREPARE THE TIME STIRNG FROM HOURS, MINUTES, SECONDS
    let currentTimeString = currentHour + ":" + currentMinute + ":" + currentSecond + " " + timeOfDay;

    //INSERT THE TIME INSIDE THE DOM
    let clock = document.getElementById("clock");
    clock.innerHTML = currentTimeString;
}