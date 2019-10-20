class DisplayControl {
    
    constructor() {
        let selectors = document.querySelectorAll(`.selector__item`);

        this.resetAll();

        selectors.forEach((selector, index) => {
            selector.addEventListener(
                'click',
                (event)=>{
                    event.preventDefault();
                    this.resetAll();

                    let display = document.getElementById(event.srcElement.id.replace('Selector', 'Display'))

                    display.classList.add(['display__item--active']);
                    event.srcElement.classList.add(['selector__item--active']);
                }
            );
        });
    }

    resetAll(){
        let displays = document.querySelectorAll(`.display__item`)
        let selectors = document.querySelectorAll(`.selector__item`);
        
        displays.forEach((display, index) => {
            display.classList.remove(['display__item--active']);
        });

        selectors.forEach((select, index) => {
            select.classList.remove(['selector__item--active']);
        });
    }

    

}