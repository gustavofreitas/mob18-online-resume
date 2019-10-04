const load = () => {
    const backToTop = new BackToTop(); 
    const displayControl = new DisplayControl();  
    const skillBar = new SkillBar();

    
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
            }

        );
        console.log(data);
    } catch (err){
        console.log(err);
    }


}


