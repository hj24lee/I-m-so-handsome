const clockDiv = document.getElementById("clock");
const todayDiv = document.getElementById("today");
let days = ["일", "월", "화", "수", "목", "금", "토"];

function getTime() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let day = now.getDay();
    let year = now.getFullYear();
    let noon = "오전";

    day = days[day];

    if(hour > 11) {
        noon = "오후";
        hour = hour - 12;
    }

    if(minute < 10) {
        minute = "0" + minute;
    }

    if(second < 10) {
        second = "0" + second;
    }


    if(now.getHours() == 0) {
        hour = 12;
    }

    todayDiv.textContent = year + '년 ' + month + '월 ' + date + '일 ' + day + '요일' + ' ';
    clockDiv.textContent = noon + ' ' + hour + "시 " + minute + "분 " + second + "초";
  }
  
  
  getTime();
  setInterval(getTime, 1000)