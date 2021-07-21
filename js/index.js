function currentTime() {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let mon = date.getMonth();
    let curr_date = date.getDate();
    let year = date.getFullYear();
    let month_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];;
    let day_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let show_day = document.querySelectorAll(".day-wrapper span");
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    curr_date = updateTime(curr_date);
    document.querySelector(".day").innerHTML = `${day_name[day]}`;
    document.querySelector(".date").innerHTML = `${curr_date}`;
    document.querySelector(".month").innerHTML = `${month_name[mon]}`;
    document.querySelector(".year").innerHTML = `${year}`;
    document.querySelector(".hour").innerHTML = `${hour}`;
    document.querySelector(".min").innerHTML = `${min}`;
    document.querySelector(".sec").innerHTML = `${sec}`;
    document.querySelector(".midday").innerHTML = `${midday}`;
}
function updateTime(k) {
    if (k < 10) {
        return "0" + k;
    }
    else {
        return k;
    }
}
setInterval(currentTime, 1000);

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const body = document.body;

const theme = localStorage.getItem("theme");

if (theme) {
    body.classList.add(theme);
}
if (theme === "dark") {
    darkButton.classList.add("dispn");
    lightButton.classList.remove("dispn");
}
else if (theme === "light") {
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
}
else {
    body.classList.add("light");
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
}
const removeAllClasses = () => {
    body.classList.remove(...body.classList.value.split(" "));
};

darkButton.onclick = () => {
    removeAllClasses();
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    darkButton.classList.add("dispn");
    lightButton.classList.remove("dispn");
};

lightButton.onclick = () => {
    removeAllClasses();
    body.classList.add("light");
    localStorage.setItem("theme", "light");
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
};
for (let i = 0; i < 4; ++i) {
    document.querySelectorAll(".expand-check")[i].addEventListener("mouseover", () => {
        document.querySelectorAll(".expand-nav")[i].classList.add("expand-show");
        document.querySelectorAll(".expand-nav")[i].classList.remove("expand-hide");
    })
    document.querySelectorAll(".expand-check")[i].addEventListener("mouseout", () => {
        document.querySelectorAll(".expand-nav")[i].classList.remove("expand-show");
        document.querySelectorAll(".expand-nav")[i].classList.add("expand-hide");
    })
}

/* const mediaQuery = window.matchMedia('(max-width: 1050px)');
if (mediaQuery.matches) {} */