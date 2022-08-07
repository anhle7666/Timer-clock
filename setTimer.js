let click = () => {
    let date = new Date();
    let year = date.getFullYear();
    let mon = date.getMonth() + 1;
    let day = date.getDate();

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let clockTime = document.querySelector("h1#timer");
    let clockDay = document.querySelector("#date");
    hour < 10 ? (hour = `0${hour}`) : hour;
    minute < 10 ? (minute = `0${minute}`) : minute;
    second < 10 ? (second = `0${second}`) : second;

    //template literals
    clockDay.innerHTML = `${day} - ${mon} - ${year}`;
    clockTime.innerHTML = `${hour}:${minute}:${second}`;
    console.log(day);
};

setInterval(click, 1000);
