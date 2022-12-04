//Tabs is on nav, Pages is on Main area
var tweetSFX = new Audio('./assets/audios/tweet.mp3');


var tabs = document.getElementsByClassName("tabs-wrapper");
var pages = document.getElementsByClassName("pages");
let racistChoices = document.getElementsByClassName('racist-tweets');
let goodChoices = document.getElementsByClassName('other-tweets');
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

let trendingTopic1 = document.getElementById('trending-topic-1');
let trendingTopic2 = document.getElementById('trending-topic-2');
let followSuggestionName = document.getElementById('follow-suggestion-name');
let followSuggestionHandle = document.getElementById('follow-suggestion-@');
let followSuggestionName2 = document.getElementById('follow-suggestion-name-2');
let followSuggestionHandle2 = document.getElementById('follow-suggestion-@-2');
// let state = 0;
let gameState = 'explore';
let dayCounter = 0;
let choiceCounter = 1;
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
    slidesOrder[0].setAttribute("data-slide-active", false);  
    twitterInterfaceSection.setAttribute("data-visible", true);
    instructionLocked = true;

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
        tweetSFX.play();
       
        
        dailyInfoSection.setAttribute("data-visible",true);
        twitterInterfaceSection.setAttribute("data-visible",false);
        dailySuggestionSection.setAttribute("data-visible",false);
        // Day 1 Racist Tweet
        if (dayCounter == 0){
            alert("Day 1 Recommended to Trevor! Wait for user feedback...");
            rmScore += 15;
            trendingTopic1.innerHTML='Elon Musk';
            trendingTopic2.innerHTML='nazis';
            followSuggestionName.innerHTML = 'Elon Musk';
            followSuggestionHandle.innerHTML = '@elonmusk' ;
            followSuggestionName2.innerHTML = 'ye';
            followSuggestionHandle2.innerHTML = '@ye24' ;
        } 
        // Day 2 Other Tweet
        else if (dayCounter ==1){
            alert("Day 2 Recommended to Trevor! Wait for user feedback...");
            rmScore-= 15;      
        }
        // Day 3 Racist Tweet
        else if (dayCounter ==2){
            alert("Day 3 Recommended to Trevor! Wait for user feedback...");
            rmScore+= 25;      
        }
        // Day 4 Racist Tweet
        else if (dayCounter ==3){
            alert("Day 4 Recommended to Trevor! Wait for user feedback...");
            rmScore+= 30;      
        }
         // Day 5 Legit Tweet
         else if (dayCounter ==4){
            alert("Day 5 Recommended to Trevor! Wait for user feedback...");
            rmScore-= 10;      
        }
      
    }
    updateRM();
    updateDailyInfo();
    updateChoices();
    
});


recommendButton2.addEventListener('click',()=>{
    // dayEventCounter = 1;
    // console.log('clicked');
    // console.log(dayEventCounter);
    if (gameState =='recommend') {
        gameState ='info';
        tweetSFX.play();
       
       
        dailyInfoSection.setAttribute("data-visible",true);
        twitterInterfaceSection.setAttribute("data-visible",false);
        dailySuggestionSection.setAttribute("data-visible",false);

         // Day 1 Other Tweet
        if (dayCounter == 0){
        alert("Day 1 Recommended to Trevor! Wait for user feedback...");
        rmScore-= 10;
        trendingTopic1.innerHTML='Homies';
        trendingTopic2.innerHTML='Funny';
        // resetFollowSuggestion();
        } 
        // Day 2 Racist
        else if (dayCounter ==1){
        alert("Day 2 Recommended to Trevor! Wait for user feedback...");
        rmScore+= 25;   
        }
        // Day 3 Other Tweet
        else if (dayCounter ==2){
        alert("Day 3 Recommended to Trevor! Wait for user feedback...");
        rmScore-= 15;   
        }
         // Day 4 Other Tweet
         else if (dayCounter ==3){
        alert("Day 3 Recommended to Trevor! Wait for user feedback...");
        rmScore-= 10;   
        }
         // Day 5 Racist Tweet
         else if (dayCounter ==3){
        alert("Day 3 Recommended to Trevor! Wait for user feedback...");
        rmScore+= 35;   
        }
    }

    updateRM();
    
    updateDailyInfo();
    updateChoices();
});
function resetFollowSuggestion(){
    followSuggestionName.innerHTML = '';
    followSuggestionHandle.innerHTML = '' ;
    followSuggestionName2.innerHTML = '';
    followSuggestionHandle2.innerHTML = '' ;
}
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

function updateChoices(){

    // switch to suggestions for day 1
    if (dayCounter ==1){
        // for (var i = 0; i < racistChoices.length; i++) {}
        racistChoices[0].setAttribute("data-visible",false);
        goodChoices[2].setAttribute("data-visible",false);
        // choiceCounter++;
        racistChoices[3].setAttribute("data-visible",true);
        goodChoices[0].setAttribute("data-visible",true);
    } 
    else if (dayCounter ==2){
        // for (var i = 0; i < racistChoices.length; i++) {}
        racistChoices[3].setAttribute("data-visible",false);
        goodChoices[0].setAttribute("data-visible",false);
        // choiceCounter++;
        racistChoices[1].setAttribute("data-visible",true);
        goodChoices[3].setAttribute("data-visible",true);
    }
    else if (dayCounter ==3){
        // for (var i = 0; i < racistChoices.length; i++) {}
        racistChoices[1].setAttribute("data-visible",false);
        goodChoices[3].setAttribute("data-visible",false);
        // choiceCounter++;
        racistChoices[2].setAttribute("data-visible",true);
        goodChoices[4].setAttribute("data-visible",true);
    }
    else if (dayCounter ==4){
        // for (var i = 0; i < racistChoices.length; i++) {}
        racistChoices[2].setAttribute("data-visible",false);
        goodChoices[4].setAttribute("data-visible",false);
        // choiceCounter++;
        racistChoices[4].setAttribute("data-visible",true);
        goodChoices[1].setAttribute("data-visible",true);
    }
}

function updateDailyInfo(){
    dayCounter++;
    infoDayCounter.innerHTML = 'Day '+ dayCounter;
    infoRevenueCounter.innerHTML= rmScore+ '$';

    navDayCounter.innerHTML = 'Day '+ dayCounter;
    navRevenueCounter.innerHTML= rmScore+ '$';

    if (dayCounter ==4){
        recommendButtonNav.innerHTML='AI Assessment';
        recommendButtonNav.style.backgroundColor = 'red';
    }
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




   

    