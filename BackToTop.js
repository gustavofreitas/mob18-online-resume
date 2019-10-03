class BackToTop {
    constructor() {
        this.element = document.querySelector('.footer .btn__back-to-top');
        
        this.element.addEventListener(
            'click', 
            this.handleClick, 
            this.element 
        );
    }

    handleClick(_instance, event){
        //scrollToTop(document.body, 0, 200)
        
        var interval = setInterval(() => {
            if(window.scrollY == 0)
                clearInterval(interval)
            
            window.scrollTo(0, window.scrollY - 1000)
            console.log("Executou!")
        }, 10);
        

    }
}