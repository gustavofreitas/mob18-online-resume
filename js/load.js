const load = () => {
    const skillBar = new SkillBar();
    const backToTop = new BackToTop(); 
    const displayControl = new DisplayControl(); 
    
    init()
}

function init() {
    document.querySelectorAll('.menu__item').forEach((item, index) => {
        item.addEventListener(
            'click',
            () => {
                document.getElementById('hamburger').checked = false;
                window.scroll.BackToTop();
            }
        )
    });
}


async function send() {
    
    const name = document.querySelector("#name").value;
    const subject = document.querySelector("#subject").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    const msg = {
        from: "seunome@acessoria.app",
        to: email,
        subject: subject,
        text: `
            Nome: ${name}
            Email: ${email}

            Message: ${message}
        `    
    };

    console.log('msg', msg);

        try {
            const data = await fetch( 'https://fiap-sender.herokuapp.com/email/send',
            {
            method: 'POST',
            body: JSON.stringify(msg),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json,text/*;q=0.99'
            }
            }

        );
        console.log(data);
        
    } catch (err){
        console.log(err);
    }


}


