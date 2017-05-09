//Display the current day and
//time in a specific format
let today = new Date();
let days = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
let day = days[today.getDay()];

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();
let period;

if (hours >= 12) {
  hours = hours - 12;
  period = "PM :";
} else {
  period = "AM :";
}

console.log("today is : " + day);
console.log("current time is : " + hours + period + minutes + ":" + seconds);
