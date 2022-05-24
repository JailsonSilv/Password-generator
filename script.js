/*Pegando os elementos*/
let sizePassword = document.querySelector("#valor");
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let container = document.querySelector("#container-password");
let password = document.querySelector("#password");

/*Dados pra gerar a senha */
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&"
let newPassword = "";

/*Acessamos o valor #slider(aonde vai definir o tamanho da senha)*/
sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value;
}

function generatePassword() {
    /*alert("Hello World")*/

    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
        
    }

    container.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
}

function copyPassword() {
    /*alert("Senha copiada GG")*/
    navigator.clipboard.writeText(newPassword); /*Vai copiar oq tiver dentro dessa variável */
}

