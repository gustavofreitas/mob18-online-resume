class BackToTop {
    constructor() {
        this.element = document.querySelector('.footer__button');
        
        this.element.addEventListener(
            'click', 
            this.handleClick, 
            this.element 
        );
    }

    handleClick(_instance, event){
        var interval = setInterval(() => {
            if(window.scrollY == 0)
                clearInterval(interval)
            
            window.scrollTo(0, window.scrollY - 10)
            console.log("Executou!")
        }, 10);
        

    }
}