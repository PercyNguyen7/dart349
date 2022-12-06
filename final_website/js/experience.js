//Tabs is on nav, Pages is on Main area
var tweetSFX = new Audio('./assets/audios/tweet2.mp3');
var tabSFX = new Audio('./assets/audios/beep-sfx.mp3');
var recommendSFX =new Audio('./assets/audios/recommend-sfx.mp3');


var tabs = document.getElementsByClassName("tabs-wrapper");
var pages = document.getElementsByClassName("pages");
let racistChoices = document.getElementsByClassName('racist-tweets');
let otherChoices = document.getElementsByClassName('other-tweets');
let homeRacistTweets = document.getElementsByClassName('home-racist-tweets');
let homeOtherTweets = document.getElementsByClassName('home-other-tweets');
let activityOtherFeedback = document.getElementsByClassName('activity-other-feedback');
let activityRacistFeedback = document.getElementsByClassName('activity-racist-feedback');
let profileOtherTweets = document.getElementsByClassName('profile-other-tweets');
let profileRacistTweets = document.getElementsByClassName('profile-racist-tweets');

// var slidesWelcome = document.getElementsByClassName("welcome-slides");
var homeTab = document.getElementById('home-tab');
var homePage = document.getElementById('home-page');
var profileTab = document.getElementById('profile-tab');
var profilePage = document.getElementById('profile-page');

let profilePic = document.getElementsByClassName('profile-pic');
let profileTweetPFP = document.getElementsByClassName('profile-tweet-pfp');
let trevorPFP = document.getElementsByClassName('trevor-pfp');
let profileBG =document.getElementsByClassName('profile-bg');

let endSlideLost = document.getElementById('end-slide');
let endSlideWin = document.getElementById('end-slide-win');
let finalScore = document.getElementById('final-rmScore');


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

let aboutButton = document.getElementById('about-button');
let aboutSection = document.getElementById('artist-statement');
let closeButton = document.getElementById('close-button');

window.addEventListener("load", () => {
    console.log("page is fully loaded");
    // TOGGLE TO DISABLE INSTRUCTION AT THE BEGINNING
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
        tweetSFX.play();
        gameState ='explore';
        dailyInfoSection.setAttribute("data-visible",false);
        twitterInterfaceSection.setAttribute("data-visible",true);
        dailySuggestionSection.setAttribute("data-visible",false);
        eventLocked =true;
        setTimeout(updateRM, 100);
        
        // console.log(eventLocked);
    }
});

// RECOMMEND PHASE RECOMMEND PHASE RECOMMEND PHASE RECOMMEND PHASE 
recommendButton1.addEventListener('click',()=>{
    playRecommendSFX();
    if (gameState =='recommend') {
        gameState ='info';
       
        
        dailyInfoSection.setAttribute("data-visible",true);
        twitterInterfaceSection.setAttribute("data-visible",false);
        dailySuggestionSection.setAttribute("data-visible",false);
        // Day 1 Racist Tweet
        if (dayCounter == 0){
            alert("Day 1 Recommended to Trevor! Wait for user feedback...");
            rmScore += 15;
            homeRacistTweets[4].setAttribute("data-visible",true);
            activityRacistFeedback[4].setAttribute("data-visible",true);

            trendingTopic1.innerHTML='Elon Musk';
            trendingTopic2.innerHTML='Nazis';
            followSuggestionName.innerHTML = 'Elon Musk';
            followSuggestionHandle.innerHTML = '@elonmusk' ;
            followSuggestionName2.innerHTML = 'Ye';
            followSuggestionHandle2.innerHTML = '@kanyewest' ;
        } 
        // Day 2 Other Tweet
        else if (dayCounter ==1){
            alert("Day 2 Recommended to Trevor! Wait for user feedback...");
            rmScore-= 10;      
            homeOtherTweets[3].setAttribute("data-visible",true);
            activityOtherFeedback[3].setAttribute("data-visible",true);
            trendingTopic1.innerHTML='Abolition of Slavery';
            trendingTopic2.innerHTML='United Nations';
            followSuggestionName.innerHTML = 'United Nations';
            followSuggestionHandle.innerHTML = '@UN' ;
            followSuggestionName2.innerHTML = 'António Guterres';
            followSuggestionHandle2.innerHTML = '@antonioguterres' ;
        }
        // Day 3 Racist Tweet
        else if (dayCounter ==2){
            alert("Day 3 Recommended to Trevor! Wait for user feedback...");
            rmScore+= 25;   
            homeRacistTweets[2].setAttribute("data-visible",true);
            activityRacistFeedback[2].setAttribute("data-visible",true);
            profileRacistTweets[2].setAttribute("data-visible",true);

            trendingTopic1.innerHTML='Blacks';
            trendingTopic2.innerHTML='Outrage';
            followSuggestionName.innerHTML = 'QUINCY WILSON';
            followSuggestionHandle.innerHTML = '@BIGDADDYWIL' ;
            followSuggestionName2.innerHTML = 'On The Level with Shawn Waugh';
            followSuggestionHandle2.innerHTML = '@RealOnTheLevel' ;    
        }
        // Day 4 Racist Tweet
        else if (dayCounter ==3){
            alert("Day 4 Recommended to Trevor! Wait for user feedback...");
            rmScore+= 30; 
            homeRacistTweets[1].setAttribute("data-visible",true);
            activityRacistFeedback[1].setAttribute("data-visible",true);
            profileRacistTweets[1].setAttribute("data-visible",true);

            trendingTopic1.innerHTML='White Replacement';
            trendingTopic2.innerHTML='Conspiracy';
            followSuggestionName.innerHTML = 'Ella Maulding';
            followSuggestionHandle.innerHTML = '@ellamaulding' ;
            followSuggestionName2.innerHTML = 'Beau Dixon';
            followSuggestionHandle2.innerHTML = '@BeauDixon__' ;        
        }
         // Day 5 Other Tweet
         else if (dayCounter ==4){
            alert("Day 5 Recommended to Trevor! Wait for user feedback...");
            rmScore-= 5;    
            homeOtherTweets[0].setAttribute("data-visible",true);
            profileOtherTweets[0].setAttribute("data-visible",true);
            
            trendingTopic1.innerHTML='Brainwashed';
            trendingTopic2.innerHTML='Died Suddenly';
            followSuggestionName.innerHTML = 'Died Suddenly';
            followSuggestionHandle.innerHTML = '@DiedSuddenly_';
            followSuggestionName2.innerHTML = 'Red Always';
            followSuggestionHandle2.innerHTML = '@PATRIOT2117';  
       
        }
    }
    
    updateDailyInfo();
    updateChoices();
    
});


recommendButton2.addEventListener('click',()=>{
    playRecommendSFX();
    // dayEventCounter = 1;
    // console.log('clicked');
    // console.log(dayEventCounter);
    if (gameState =='recommend') {
        gameState ='info';
        
       
        dailyInfoSection.setAttribute("data-visible",true);
        twitterInterfaceSection.setAttribute("data-visible",false);
        dailySuggestionSection.setAttribute("data-visible",false);

         // Day 1 Other Tweet
        if (dayCounter == 0){
        alert("Day 1 Recommended to Trevor! Wait for user feedback...");
        rmScore-= 10;
        homeOtherTweets[4].setAttribute("data-visible",true);
        activityOtherFeedback[4].setAttribute("data-visible",true);

        trendingTopic1.innerHTML='Homies';
        trendingTopic2.innerHTML='Funny';
        followSuggestionName.innerHTML = '𝑮𝒊𝒐';
        followSuggestionHandle.innerHTML = '@Palace_gio' ;
        followSuggestionName2.innerHTML = 'a.☆*ﾟ';
        followSuggestionHandle2.innerHTML = '@SHUTTHEDIOR' ;  
        // resetFollowSuggestion();
        } 
        // Day 2 Racist
        else if (dayCounter ==1){
        alert("Day 2 Recommended to Trevor! Wait for user feedback...");
        rmScore+= 20;
        homeRacistTweets[3].setAttribute("data-visible",true);
        activityRacistFeedback[3].setAttribute("data-visible",true);

        profileRacistTweets[3].setAttribute("data-visible",true);

        trendingTopic1.innerHTML='Slavery';
        trendingTopic2.innerHTML='All Lives Matter';
        followSuggestionName.innerHTML = 'Escape The Matrix';
        followSuggestionHandle.innerHTML = '@matrix_escapee' ;
        followSuggestionName2.innerHTML = 'theSprocket';
        followSuggestionHandle2.innerHTML = '@thesprocket' ; 
        }
        // Day 3 Other Tweet
        else if (dayCounter ==2){
        alert("Day 3 Recommended to Trevor! Wait for user feedback...");
        rmScore-= 5; 
        homeOtherTweets[2].setAttribute("data-visible",true); 
        activityOtherFeedback[2].setAttribute("data-visible",true);
        profileOtherTweets[2].setAttribute("data-visible",true);

        trendingTopic1.innerHTML='Oppression';
        trendingTopic2.innerHTML='Abolition Voter';
        followSuggestionName.innerHTML = 'Black Lives Matter';
        followSuggestionHandle.innerHTML = '@BlkLivesMatter' ;
        followSuggestionName2.innerHTML = 'HuffPost BlackVoices';
        followSuggestionHandle2.innerHTML = '@blackvoices' ; 
        }
         // Day 4 Other Tweet
         else if (dayCounter ==3){
        alert("Day 3 Recommended to Trevor! Wait for user feedback...");
        rmScore-= 5;   
        homeOtherTweets[1].setAttribute("data-visible",true);
        activityOtherFeedback[1].setAttribute("data-visible",true);
        profileOtherTweets[1].setAttribute("data-visible",true);

        trendingTopic1.innerHTML='Oppression';
        trendingTopic2.innerHTML='Abolition Voter';
        followSuggestionName.innerHTML = 'UN Climate Change';
        followSuggestionHandle.innerHTML = '@UNFCCC' ;
        followSuggestionName2.innerHTML = 'World Meteorological Organization';
        followSuggestionHandle2.innerHTML = '@WMO' ; 
        }
         // Day 5 Racist Tweet
         else if (dayCounter ==4){
        alert("Day 4 Recommended to Trevor! Wait for user feedback...");
        rmScore+= 35; 
        homeRacistTweets[0].setAttribute("data-visible",true);
        activityRacistFeedback[0].setAttribute("data-visible",true);
        profileRacistTweets[0].setAttribute("data-visible",true);

        trendingTopic1.innerHTML='White Replacement';
        trendingTopic2.innerHTML='Conspiracy';
        followSuggestionName.innerHTML = 'Derrick Evans';
        followSuggestionHandle.innerHTML = '@DerrickEvans_WV' ;
        followSuggestionName2.innerHTML = 'MAGA 𝘰𝘳𝘪𝘨𝘪𝘯𝘢𝘭𝘪𝘴𝘵';
        followSuggestionHandle2.innerHTML = '@MAGAoriginalist' ;   

            profileBG[0].setAttribute("data-extreme",true);
            profilePic[0].setAttribute("data-extreme",true);
            trevorPFP[0].setAttribute("data-extreme",true);

            for (var i = 0; i < profileTweetPFP.length; i++) {
            profileTweetPFP[i].setAttribute("data-extreme", true);
            }
        }
    }
    
    updateDailyInfo();
    updateChoices();
});

aboutButton.addEventListener('click',()=>{
    playTabSFX();
    aboutSection.setAttribute('data-visible',true);
});
closeButton.addEventListener('click',()=>{
    aboutSection.setAttribute('data-visible',false);
});

function resetFollowSuggestion(){
    followSuggestionName.innerHTML = '';
    followSuggestionHandle.innerHTML = '' ;
    followSuggestionName2.innerHTML = '';
    followSuggestionHandle2.innerHTML = '' ;
}
function updateRM(){
    // if (rmScore <0){
    //     rmScore = 0
    // }
    // if (rmScore >100){
    //     rmScore = 100;
    // }
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
    if (gameState =='explore' && dayCounter <=4) {
        // dayEventCounter=0;
        gameState ='recommend'
  
        dailyInfoSection.setAttribute("data-visible",false);
        twitterInterfaceSection.setAttribute("data-visible",false);
        dailySuggestionSection.setAttribute("data-visible",true);
        playRecommendSFX(); } 
    else if (gameState =='explore' && dayCounter ==5 && rmScore <100){
        twitterInterfaceSection.setAttribute("data-visible",false);
        endSlideLost.setAttribute("data-visible",true);
        finalScore.innerHTML='Final Revenue:'+rmScore +'/100$'
        playRecommendSFX();
    }
    else if (gameState =='explore' && dayCounter ==5 && rmScore >=100){
        twitterInterfaceSection.setAttribute("data-visible",false);
        endSlideWin.setAttribute("data-visible",true);
        finalScore.innerHTML='Final Revenue:'+rmScore +'/100$'
    }
   
    // console.log(dayEventCounter);
});

function updateChoices(){
    // switch to suggestions for day 1
    if (dayCounter ==1){
        // for (var i = 0; i < racistChoices.length; i++) {}
        racistChoices[0].setAttribute("data-visible",false);
        otherChoices[2].setAttribute("data-visible",false);
        // choiceCounter++;
        racistChoices[3].setAttribute("data-visible",true);
        otherChoices[0].setAttribute("data-visible",true);
    } 
    else if (dayCounter ==2){
        // for (var i = 0; i < racistChoices.length; i++) {}
        racistChoices[3].setAttribute("data-visible",false);
        otherChoices[0].setAttribute("data-visible",false);
        // choiceCounter++;
        racistChoices[1].setAttribute("data-visible",true);
        otherChoices[3].setAttribute("data-visible",true);
    }
    else if (dayCounter ==3){
        // for (var i = 0; i < racistChoices.length; i++) {}
        racistChoices[1].setAttribute("data-visible",false);
        otherChoices[3].setAttribute("data-visible",false);
        // choiceCounter++;
        racistChoices[2].setAttribute("data-visible",true);
        otherChoices[4].setAttribute("data-visible",true);
    }
    else if (dayCounter ==4){
        // for (var i = 0; i < racistChoices.length; i++) {}
        racistChoices[2].setAttribute("data-visible",false);
        otherChoices[4].setAttribute("data-visible",false);
        // choiceCounter++;
        racistChoices[4].setAttribute("data-visible",true);
        otherChoices[1].setAttribute("data-visible",true);
    }
}

function updateDailyInfo(){
    if (dayCounter <5){
    dayCounter++;}
    infoDayCounter.innerHTML = 'Day '+ dayCounter;
    infoRevenueCounter.innerHTML= rmScore+ '$';

    navDayCounter.innerHTML = 'Day '+ dayCounter;
    // navRevenueCounter.innerHTML= rmScore+ '$';

    //last day day 5
    if (dayCounter ==5){
        recommendButtonNav.innerHTML='AI Assessment';
        recommendButtonNav.style.backgroundColor = 'red';

        
    }
}

homeTab.addEventListener('click', () => {
    hidePages();
    homeTab.setAttribute("data-tab-active", true);
    homePage.setAttribute("data-visible", true);
    playTabSFX();
});

profileTab.addEventListener('click', () => {
    hidePages();
    profileTab.setAttribute("data-tab-active", true);
    profilePage.setAttribute("data-visible", true);
    playTabSFX();
});

dataTab.addEventListener('click', () => {
    hidePages();
    dataTab.setAttribute("data-tab-active", true);
    dataPage.setAttribute("data-visible", true);
  playTabSFX();
});

activityTab.addEventListener('click', () => {
    hidePages();
    activityTab.setAttribute("data-tab-active", true);
    activityPage.setAttribute("data-visible",true);
    playTabSFX();
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
        playTabSFX();
        slidesOrder[0].setAttribute("data-slide-active", true);  
        twitterInterfaceSection.setAttribute("data-visible", false);
        instructionLocked = false;
    })

function playTabSFX(){
 tabSFX.currentTime = 0;
 tabSFX.volume = 0.1;
 tabSFX.play();
}
function playRecommendSFX(){
    recommendSFX.currentTime = 0;
    recommendSFX.volume = 1;
    recommendSFX.play();
   }
   

    