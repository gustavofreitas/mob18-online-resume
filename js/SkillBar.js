class SkillBar {
    constructor(){

        const coding = document.querySelector(".coding");
        const social = document.querySelector(".social");
        const kotlin = document.querySelector(".kotlin");

        this.start(coding, 90);
        this.start(social, 50);
        this.start(kotlin, 75);

    }

    start(element, percent){

        const skillElement = element.querySelector(".skill__bar");
        const target = this.getFinal((this.getSize(element) - this.getPaddingAdjust(element)), percent);
        
        var interval = setInterval(() => {
             const currentSize = this.getSize(skillElement);

             if(currentSize > target)
                 clearInterval(interval);

             this.setSize(skillElement, (parseInt(currentSize) + 1));
        }, 5);
    }

    getPaddingAdjust(element){
        return this.getAsNumber(getComputedStyle(element).padding) * 2; 
    }

    setSize(element, size){
        element.style.width = `${size}px`
    }

    getFinal(size, target){
        return (size * target) / 100
    }

    getSize(element){
        return this.getAsNumber((getComputedStyle(element).width));
    }

    getAsNumber(value) {
        return value.match(/\d/g).join("");
    }


}