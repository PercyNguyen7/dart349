//Tabs is on nav, Pages is on Main area
var tweetSFX = new Audio('./assets/audios/tweet.mp3');


var tabs = document.getElementsByClassName("tabs-wrapper");
var pages = document.getElementsByClassName("pages");
// var slidesWelcome = document.getElementsByClassName("welcome-slides");
var homeTab = document.getElementById('home-tab');
var homePage = document.getElementById('home-page');
var profileTab = document.getElementById('profile-tab');
var profilePage = document.getElementById('profile-page');

let infoRevenueCounter = document.getElementById('revenue-counter');
let infoDayCounter =document.getElementById('day-counter');
let navRevenueCounter =document.getElementById('revenue-counter-nav');
let navDayCounter =document.getElementById('day-counter-nav');

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

let rmBar;
let rmScore = 0;
rmBar= new RevenueMeter(document.querySelector('.rm-bar'));


window.addEventListener("load", () => {
    console.log("page is fully loaded");
    // slidesOrder[0].setAttribute("data-slide-active", false);  
    // twitterInterfaceSection.setAttribute("data-visible", true);
    // instructionLocked = true;

});
// INFO PHASE INFO PHASE INFO PHASE INFO PHASE INFO PHASE INFO PHASE   
document.body.addEventListener('click', () => {
    if (gameState =='info' && eventLocked ==true){
        eventLocked = false;
        console.log('hello');
    }
    else if (gameState =='info'&& eventLocked ==false) {
        gameState ='explore';
        dailyInfoSection.setAttribute("data-visible",false);
        twitterInterfaceSection.setAttribute("data-visible",true);
        dailySuggestionSection.setAttribute("data-visible",false);
        eventLocked =true;
        // console.log(eventLocked);
    }
});

// RECOMMEND PHASE RECOMMEND PHASE RECOMMEND PHASE RECOMMEND PHASE 
recommendButton1.addEventListener('click',()=>{
    if (gameState =='recommend') {
        gameState ='info';
        // dayEventCounter++;
        tweetSFX.play();
        alert("Recommended to Trevor! Waiting for user feedback...");
        
        dailyInfoSection.setAttribute("data-visible",true);
        twitterInterfaceSection.setAttribute("data-visible",false);
        dailySuggestionSection.setAttribute("data-visible",false);
        
        rmScore-= 10;
    }
    updateRM();
    updateDailyInfo();
    
});

recommendButton2.addEventListener('click',()=>{
    // dayEventCounter = 1;
    // console.log('clicked');
    // console.log(dayEventCounter);
    if (gameState =='recommend') {
        gameState ='info';
        tweetSFX.play();
        alert("Recommended to Trevor! Wait for user feedback...");
       
        dailyInfoSection.setAttribute("data-visible",true);
        twitterInterfaceSection.setAttribute("data-visible",false);
        dailySuggestionSection.setAttribute("data-visible",false);
        rmScore += 15;
    }

    updateRM();
    updateDailyInfo();
});

function updateRM(){
    if (rmScore <0){
        rmScore = 0
    }
    if (rmScore >100){
        rmScore = 100;
    }
    rmBar.setValue(rmScore);
}
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
        gameState ='recommend'
  
        dailyInfoSection.setAttribute("data-visible",false);
        twitterInterfaceSection.setAttribute("data-visible",false);
        dailySuggestionSection.setAttribute("data-visible",true);
    } 
    // console.log(dayEventCounter);
});

function updateDailyInfo(){
    dayCounter++;
    infoDayCounter.innerHTML = 'Day '+ dayCounter;
    infoRevenueCounter.innerHTML= rmScore+ '$';

    navDayCounter.innerHTML = 'Day '+ dayCounter;
    navRevenueCounter.innerHTML= rmScore+ '$';
}

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

// CODE TO DISPLAY REVENUE METER NEXT TO MOUSE
var tooltips = document.querySelectorAll('.rm-indicator');

window.onmousemove = function (e) {
    var x = (e.clientX + 20) + 'px',
        y = (e.clientY + 20) + 'px';
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
    }
};


// INSTRUCTION SLIDSE
let slidesOrder = document.getElementsByClassName("welcome-slides");
let slideCounter = 0;
    document.body.addEventListener('click', () => {
        // move slide forward
        if (slideCounter< 5 && !instructionLocked){
        console.log(slideCounter);
            slidesOrder[slideCounter].setAttribute("data-slide-active", false);  
            slideCounter ++;
            slidesOrder[slideCounter].setAttribute("data-slide-active", true);
        } //else, reset slide number
        else if (slideCounter === 5 && !instructionLocked){
            // window.location.href = "experience.html";
            slidesOrder[5].setAttribute("data-slide-active", false);  
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




   

    