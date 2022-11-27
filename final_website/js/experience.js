var tabs = document.getElementsByClassName("tabs-wrapper");
var pages= document.getElementsByClassName("pages");
var slidesWelcome = document.getElementsByClassName("welcome-slides");
var homeTab = document.getElementById('home-tab');
var homePage = document.getElementById('home-page');
var profileTab = document.getElementById('profile-tab');
var profilePage = document.getElementById('profile-page');

let sleepButton = document.getElementById('sleep-button');

let state = 0;

var dataTab = document.getElementById('data-tab');
var dataPage = document.getElementById('data-page');
var activityTab = document.getElementById('activity-tab');
var activityPage = document.getElementById('activity-page');
var pages = document.getElementsByClassName('pages');

window.addEventListener("load", () => {
    console.log("page is fully loaded");
  });
    sleepButton.addEventListener('click',()=>{
});
  

homeTab.addEventListener('click', () => {
    hidePages();
    homeTab.setAttribute("data-tab-active", true);
    homePage.setAttribute("data-visible",true);
});

profileTab.addEventListener('click', () => {
    hidePages();
    profileTab.setAttribute("data-tab-active", true);
    profilePage.setAttribute("data-visible",true);
});

dataTab.addEventListener('click', () => {
    hidePages();
    dataTab.setAttribute("data-tab-active", true);
    dataPage.setAttribute("data-visible",true);
});

activityTab.addEventListener('click', () => {
    hidePages();
    activityTab.setAttribute("data-tab-active", true);
});

function hidePages(){
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute("data-tab-active", false);
        pages[i].setAttribute("data-visible",false);
    }
    // homePage.setAttribute("data-visible",false);
    // homePage.setAttribute("data-visible",false);
    // profilePage.setAttribute("data-visible",false);
    // dataPage.setAttribute("data-visible",false);
    // activityPage.setAttribute("data-visible",false);
}

var tooltips = document.querySelectorAll('.rm-black-bar span');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};