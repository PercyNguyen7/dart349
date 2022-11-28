//Tabs is on nav, Pages is on Main area
var tabs = document.getElementsByClassName("tabs-wrapper");
var pages = document.getElementsByClassName("pages");
// var slidesWelcome = document.getElementsByClassName("welcome-slides");
var homeTab = document.getElementById('home-tab');
var homePage = document.getElementById('home-page');
var profileTab = document.getElementById('profile-tab');
var profilePage = document.getElementById('profile-page');

//Daily Suggestions for 
var dailyInfoSection = document.getElementById('daily-info-section');
var dailySuggestionSection = document.getElementById('daily-suggestion-section');
var twitterInterfaceSection = document.getElementById('twitter-interface-section')

let recommendButton1 = document.getElementById('recommend-button-1');
let recommendButton2 = document.getElementById('recommend-button-2');
let recommendButtonNav = document.getElementById('recommend-button-nav');

// let state = 0;
let gameState = 'explore';
let dayCounter = 0;
//eventLocked for extra step for Daily Info 
let eventLocked = true;
//instruction Locked to lock it when instruction slides are not on
let instructionLocked = false;
let instructionButton = document.getElementById('instruction-button');

var dataTab = document.getElementById('data-tab');
var dataPage = document.getElementById('data-page');
var activityTab = document.getElementById('activity-tab');
var activityPage = document.getElementById('activity-page');
var pages = document.getElementsByClassName('pages');

window.addEventListener("load", () => {
    console.log("page is fully loaded");
    // slidesOrder[0].setAttribute("data-slide-active", false);  
    // twitterInterfaceSection.setAttribute("data-visible", true);
    // instructionLocked = true;

});
// INFO PHASE INFO PHASE INFO PHASE INFO PHASE INFO PHASE INFO PHASE   
document.body.addEventListener('click', () => {
    // dayEventCounter = 0;
    if (gameState =='info' && eventLocked ==true){
        eventLocked = false;
        console.log('hello');
    }
    else if (gameState =='info' && eventLocked == false) {
        gameState ='recommend';
        dailyInfoSection.setAttribute("data-visible",false);
        dailySuggestionSection.setAttribute("data-visible",true);
        twitterInterfaceSection.setAttribute("data-visible",false);
        eventLocked =true;
        console.log('goodbye');

        // console.log(eventLocked);
    }
});

// RECOMMEND PHASE RECOMMEND PHASE RECOMMEND PHASE RECOMMEND PHASE 
recommendButton1.addEventListener('click',()=>{
    if (gameState =='recommend') {
        gameState ='explore';
        // dayEventCounter++;
        alert("Recommended to Trevor!")
        dailyInfoSection.setAttribute("data-visible", false);
        dailySuggestionSection.setAttribute("data-visible", false);
        twitterInterfaceSection.setAttribute("data-visible", true);
        
    }
})
recommendButton2.addEventListener('click',()=>{
    // dayEventCounter = 1;
    // console.log('clicked');
    // console.log(dayEventCounter);
    if (gameState =='recommend') {
        gameState ='explore';
        
        alert("Recommended to Trevor!")
        dailyInfoSection.setAttribute("data-visible", false);
        dailySuggestionSection.setAttribute("data-visible", false);
        twitterInterfaceSection.setAttribute("data-visible", true);
        
    }
})
// RECOMMEND PHASE RECOMMEND PHASE RECOMMEND PHASE RECOMMEND PHASE 

// TWITTER PHASE TWITTER PHASE TWITTER PHASE TWITTER PHASE TWITTER PHASE 
recommendButtonNav.addEventListener('click', () => {
    // dayEventCounter=2;
    // if(dayEventCounter ==0){

    // }
    // else if (dayEventCounter ==1){
    //     dailyInfoSection.setAttribute("data-visible",false);
    //     dailySuggestionSection.setAttribute("data-visible",true);
    //     twitterInterfaceSection.setAttribute("data-visible",false);
    // }
    if (gameState =='explore') {
        // dayEventCounter=0;
        gameState ='info'
        dayCounter++;
        dailyInfoSection.setAttribute("data-visible", true);
        dailySuggestionSection.setAttribute("data-visible", false);
        twitterInterfaceSection.setAttribute("data-visible", false);
        console.log(gameState);
    } 
    // console.log(dayEventCounter);
});



homeTab.addEventListener('click', () => {
    hidePages();
    homeTab.setAttribute("data-tab-active", true);
    homePage.setAttribute("data-visible", true);
});

profileTab.addEventListener('click', () => {
    hidePages();
    profileTab.setAttribute("data-tab-active", true);
    profilePage.setAttribute("data-visible", true);
});

dataTab.addEventListener('click', () => {
    hidePages();
    dataTab.setAttribute("data-tab-active", true);
    dataPage.setAttribute("data-visible", true);
});

activityTab.addEventListener('click', () => {
    hidePages();
    activityTab.setAttribute("data-tab-active", true);
    activityPage.setAttribute("data-visible",true);
});

function hidePages() {
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].setAttribute("data-tab-active", false);
        pages[i].setAttribute("data-visible", false);
    }
    // homePage.setAttribute("data-visible",false);
    // homePage.setAttribute("data-visible",false);
    // profilePage.setAttribute("data-visible",false);
    // dataPage.setAttribute("data-visible",false);
    // activityPage.setAttribute("data-visible",false);
}

var tooltips = document.querySelectorAll('.rm-indicator');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};



let slidesOrder = document.getElementsByClassName("welcome-slides");
let slideCounter = 0;

    document.body.addEventListener('click', () => {
        // move slide forward
        if (slideCounter< 4 && !instructionLocked){
        console.log(slideCounter);
            slidesOrder[slideCounter].setAttribute("data-slide-active", false);  
            slideCounter ++;
            slidesOrder[slideCounter].setAttribute("data-slide-active", true);
        } //else, reset slide number
        else if (slideCounter === 4 && !instructionLocked){
            // window.location.href = "experience.html";
            slidesOrder[4].setAttribute("data-slide-active", false);  
            twitterInterfaceSection.setAttribute("data-visible", true);
            slideCounter = 0;
            instructionLocked = true;
        }
    });

    instructionButton.addEventListener('click',()=>{
        
        slidesOrder[0].setAttribute("data-slide-active", true);  
        twitterInterfaceSection.setAttribute("data-visible", false);
        instructionLocked = false;
    })