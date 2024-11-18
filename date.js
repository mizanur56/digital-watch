function myTime() {
  let myDate = new Date();

  // Time formatting
  let hr =
    myDate.getHours() === 0
      ? 12
      : myDate.getHours() > 12
      ? myDate.getHours() - 12
      : myDate.getHours();
  let min =
    myDate.getMinutes() < 10 ? "0" + myDate.getMinutes() : myDate.getMinutes();
  let sec =
    myDate.getSeconds() < 10 ? "0" + myDate.getSeconds() : myDate.getSeconds();
  let am = myDate.getHours() >= 12 ? "PM" : "AM";

  // Update time in the DOM
  document.getElementById("time").innerHTML = hr + ":" + min + ":" + sec;
  document.getElementById("am").innerHTML = am;

  // Day and date formatting
  let myDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let myMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentDate =
    myDay[myDate.getDay()] +
    ", " +
    myMonth[myDate.getMonth()] +
    " " +
    myDate.getDate() +
    ", " +
    myDate.getFullYear();

  // Update date in the DOM
  document.getElementById("date").innerHTML = currentDate;
}

// time update every second
myTime();
setInterval(myTime, 1000);
