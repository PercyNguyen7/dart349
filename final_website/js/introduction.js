
var slidesOrder = document.getElementsByClassName("welcome-slides");

let n = 0;

    document.body.addEventListener('click', () => {
        if (n< 4){
        console.log(n);
            slidesOrder[n].setAttribute("data-slide-active", false);  
            n ++;
            slidesOrder[n].setAttribute("data-slide-active", true);
        }
        else if (n === 4){

            window.location.href = "experience.html";
            // slidesWelcome[n].setAttribute("data-slide-active", false);
            // for (var i = 0; i < slidesWelcome.length; i++) {
            //     slidesWelcome[i].setAttribute("data-slide-active", false); 
       
            // }
            // console.log(n);
            // alert('done');


        }
            // state = 'welcome2';
        //     s++;
        //     console.log(state);
        // }
        // else if (state == 'welcome2'){
        //     slidesWelcome[1].setAttribute("data-slide-active", false);
        //     slidesWelcome[2].setAttribute("data-slide-active", true);
        //     state = 'welcome3';
        //     console.log(state);
        // }
        // else if (state == 'welcome3'){
        //     slidesWelcome[2].setAttribute("data-slide-active", false);
        //     slidesWelcome[3].setAttribute("data-slide-active", true);
        //     state = 'welcome3';
        //     console.log(state);
        // }
        // else if (state == 'welcome4'){
        //     slidesWelcome[3].setAttribute("data-slide-active", false);
        //     slidesWelcome[4].setAttribute("data-slide-active", true);
        //     state = 'welcome4';
        //     console.log(state);
        // }
    });

