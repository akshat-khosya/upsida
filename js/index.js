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
    document.querySelector(".up-logo img").setAttribute("src", "./images/up_White.png");
    document.querySelector(".footer-img img").setAttribute("src", "./images/up_White.png");
};

lightButton.onclick = () => {
    removeAllClasses();
    body.classList.add("light");
    localStorage.setItem("theme", "light");
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
    document.querySelector(".up-logo img").setAttribute("src", "./images/up_Black.png");
    document.querySelector(".footer-img img").setAttribute("src", "./images/up_Black.png");
};
let sideBar = document.querySelector(".side-bar");
let navBar = document.querySelector(".nav-bar");
let navLink = document.querySelectorAll(".nav-list .nav-link");
let navIcon = document.querySelectorAll(".nav-list .nav-link .nav-icon");
let navLinkText = document.querySelectorAll(".nav-list .nav-link .nav-link-text");
let socialHandle = document.querySelector(".social-handle");
let expandNav = document.querySelectorAll(".expand-nav");
for (let i = 0; i < 4; ++i) {
    document.querySelectorAll(".expand-check")[i].addEventListener("mouseover", () => {
        expandNav[i].classList.add("show");
        expandNav[i].classList.remove("hide");
    })
    document.querySelectorAll(".expand-check")[i].addEventListener("mouseout", () => {
        expandNav[i].classList.remove("show");
        expandNav[i].classList.add("hide");
    })
    document.querySelectorAll(".expand-check")[i].addEventListener("click",function(e){
        e.preventDefault();
    })
    document.querySelectorAll(".expand-check")[i].addEventListener("click", () => {
        expandNav[i].classList.toggle("show");
        expandNav[i].classList.toggle("hide");
    })
}
function showSideMd() {
    sideBar.style.width = "20%";
    socialHandle.style.flexFlow = "row";
    socialHandle.style.opacity = 1;
    socialHandle.style.visibility = "visible";
    socialHandle.style.width = "auto";
    socialHandle.style.position = "relative";
    
    for (let i = 0; i < 10; ++i) {
        navLink[i].style.justifyContent = "flex-start";
        navLink[i].style.overflow = "hidden";
        navLinkText[i].style.opacity = 1;
        navLinkText[i].style.visibility = "visible";
        navLinkText[i].style.width = "auto";
        navLinkText[i].style.position = "relative";
        navIcon[i].style.opacity = 1;
        navIcon[i].style.visibility = "visible";
        navIcon[i].style.width = "auto";
        navIcon[i].style.position = "relative";
    }
}
function hideSideMd() {
    sideBar.style.width = "10%";
    socialHandle.style.flexFlow = "column";
    socialHandle.style.opacity = 1;
    socialHandle.style.visibility = "visible";
    socialHandle.style.width = "auto";
    socialHandle.style.position = "relative";
    for (let i = 0; i < 10; ++i) {
        navLink[i].style.justifyContent = "center";
        navLink[i].style.overflow = "hidden";
        navLinkText[i].style.opacity = 0;
        navLinkText[i].style.visibility = "hidden";
        navLinkText[i].style.width = 0;
        navLinkText[i].style.position = "relative";
        navIcon[i].style.opacity = 1;
        navIcon[i].style.visibility = "visible";
        navIcon[i].style.width = "auto";
        navIcon[i].style.position = "relative";
    }
}
function showSideSm() {
    console.log("ShowSideSm");
    sideBar.style.width = "50%";
    console.log(sideBar.style.width);
    socialHandle.style.flexFlow = "column";
    socialHandle.style.opacity = 1;
    socialHandle.style.visibility = "visible";
    socialHandle.style.width = "auto";
    socialHandle.style.position = "relative";
    for (let i = 0; i < 10; ++i) {
        navLink[i].style.justifyContent = "flex-start";
        navLinkText[i].style.opacity = 1;
        navLinkText[i].style.visibility = "visible";
        navLinkText[i].style.width = "auto";
        navLinkText[i].style.position = "relative";
        navIcon[i].style.opacity = 1;
        navIcon[i].style.visibility = "visible";
        navIcon[i].style.width = "auto";
        navIcon[i].style.position = "relative";
    }
}
function hideSideSm() {
    console.log("HideSideSm");
    sideBar.style.width = 0;
    console.log(sideBar.style.width);
    socialHandle.style.flexFlow = "column";
    socialHandle.style.opacity = 0;
    socialHandle.style.visibility = "hidden";
    socialHandle.style.width = 0;
    socialHandle.style.position = "relative";
    for (let i = 0; i < 10; ++i) {
        navLink[i].style.justifyContent = "center";
        navLink[i].style.overflow = "hidden";
        navLinkText[i].style.opacity = 0;
        navLinkText[i].style.visibility = "hidden";
        navLinkText[i].style.width = 0;
        navLinkText[i].style.position = "relative";
        navIcon[i].style.opacity = 0;
        navIcon[i].style.visibility = "hidden";
        navIcon[i].style.width = 0;
        navIcon[i].style.position = "relative";
    }
}
function mediafunMd(x) {
    if (x.matches) {
        hideSideMd();
        navBar.addEventListener("mouseover", () => {
            showSideMd();
        });
        navBar.addEventListener("mouseout", () => {
            hideSideMd();
        });
        document.querySelector(".side-bar-expand-btn-md").addEventListener("click",()=>{
            if(sideBar.style.width == "10%"){
                console.log("I will make show");
                showSideMd();
            }
            else{
                console.log("I will make hide");
                hideSideMd();
            }
        })
    }
    else {
        console.log("Get out medium");
        showSideMd();
        navBar.addEventListener("mouseover", () => {
            showSideMd();
        });
        navBar.addEventListener("mouseout", () => {
            showSideMd();
        });
    }
}
function mediafunSm(x) {
    console.log("I got in media query small");
    if (x.matches) {
        console.log("Small media query matched");
        hideSideSm();
        navBar.addEventListener("mouseover", () => {
            showSideSm();
        });
        navBar.addEventListener("mouseout", () => {
            showSideSm();
        });
        document.querySelector(".side-bar-expand-btn-sm").addEventListener("click",()=>{
            console.log("I can detect click");
            if(sideBar.style.width == "0px"){
                console.log("Now width is: " + sideBar.style.width);
                console.log("I will make show");
                showSideSm();
            }
            else{
                console.log("Now width is: " + sideBar.style.width);
                console.log("I will make hide");
                hideSideSm();
            }
        })
    }
    else {
        console.log("Get out small");
        showSideMd();
    }
}

let mediaMd = window.matchMedia("(max-width: 992px)");
mediafunMd(mediaMd);
mediaMd.addListener(mediafunMd);
let mediaSm = window.matchMedia("(max-width: 576px)");
mediafunSm(mediaSm);
mediaSm.addListener(mediafunSm);


mybutton = document.querySelector(".scroll-to-top");
window.onscroll = function () { scrollFunction() };
mybutton.addEventListener("click", () => {
    topFunction();
});
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        mybutton.style.display = "inline-block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
