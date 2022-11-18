var tabs = document.getElementsByClassName("tabs-wrapper");
var homeTab = document.getElementById('home-tab');
var homePage = document.getElementById('home-page');
var profileTab = document.getElementById('profile-tab');
var profilePage = document.getElementById('profile-page');

var dataTab = document.getElementById('data-tab');
var dataPage = document.getElementById('data-page');
var activityTab = document.getElementById('activity-tab');
var activityPage = document.getElementById('activity-page');
var pages = document.getElementsByClassName('pages');


console.log(tabs)

homeTab.addEventListener('click', () => {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute("data-tab-active", false);
    }
    hidePages();
    homeTab.setAttribute("data-tab-active", true);
    homePage.setAttribute("data-visible",true);
});

profileTab.addEventListener('click', () => {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute("data-tab-active", false);
    }
    hidePages();
    profileTab.setAttribute("data-tab-active", true);
    profilePage.setAttribute("data-visible",true);
});

dataTab.addEventListener('click', () => {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute("data-tab-active", false);
    }
    dataTab.setAttribute("data-tab-active", true);
});

activityTab.addEventListener('click', () => {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute("data-tab-active", false);
    }
    activityTab.setAttribute("data-tab-active", true);
});

function hidePages(){
    homePage.setAttribute("data-visible",false);
    profilePage.setAttribute("data-visible",false);
    // dataPage.setAttribute("data-visible",false);
    // activityPage.setAttribute("data-visible",false);
}