// var countDownDate = new Date ("jan 30, 2024 00:12:12").getTime();
// var x = setInterval(function () {
//     var now = new Date().getTime();
//     var distance = countDownDate - now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor ((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor ((distance % (1000 * 60)) / 1000);
    
//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minute").innerHTML = minutes;
//     document.getElementById("second").innerHTML = seconds ;

//     },1000);

var countDownDate = new Date("Jan 30, 2024 00:12:12").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
  document.getElementById("Hours").innerHTML = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("second").innerHTML =
    seconds < 10 ? "0" + seconds : seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("Hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
  }
}, 1000);

