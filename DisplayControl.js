class DisplayControl {
    constructor() {
        let itens = ["intro", "desc", "hobby"]
        itens.forEach((sufix, index) => {
            this.configButton(sufix);
        }) 
    }

    configButton(item){
        const hiddenClassName = "main__display__paragraph--hidden";
        const activeClassName = "main__button--active";

        let button = document.querySelector(`.main__${item}`);
        let paragraph = document.querySelector(`.main__display__${item}`);
        let diplayControl = this;

        button.addEventListener(
            'click',
            function(){
                diplayControl.clearAll(activeClassName, hiddenClassName)
                diplayControl.setNewState(button, paragraph, activeClassName, hiddenClassName)
            }
        );
    }

    clearAll(activeButtonClassName, hiddenParagraphClassName){
        this.clearButtonState(activeButtonClassName)
        this.clearParagraphState(hiddenParagraphClassName)
    }

    clearButtonState(className){
        document.querySelectorAll(`.main__button`)
            .forEach((current, index) => {
                current.classList.remove(className);
            });

    }

    clearParagraphState(className){
        document.querySelectorAll(`.main__display__paragraph`)
            .forEach((paragraph, index) => {
                paragraph.classList.add(className);
            });
    }

    setNewState(button, paragraph, activeButtonClassName, hiddenParagraphClassName ){
        paragraph.classList.remove(hiddenParagraphClassName)
        button.classList.add(activeButtonClassName);
    }
}