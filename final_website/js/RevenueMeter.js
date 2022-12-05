class RevenueMeter{
    constructor (element, initialValue =0) {
        this.valueElem = element.querySelector('.rm-bar-value');
        this.fillElem = element.querySelector('.rm-blue-bar-game');

        this.setValue(initialValue);
        // console.log(this.valueElem);
        // console.log(this.fillElem);
    }


    setValue(newValue){
        // if (newValue <0){
        //     newValue = 0;
        // }
        // if (newValue >100){
        //     newValue = 100;
        // }

        this.value = newValue;
        this.update();
    }

    update(){
        const percentage = this.value + '%';
        const meterValue = this.value;
        this.fillElem.style.height = percentage;
        this.valueElem.textContent = meterValue + '$';
    }
}