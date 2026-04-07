//Definir o botão de enviar
let botao = document.querySelector("#cadastrar");


//Reg Ex do email
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//Validação de email
let email = document.querySelector('#email');
let veriemail = document.querySelector('#veriemail');
botao.addEventListener("click", function(){
    if(regexEmail.test(email.value)){
        veriemail.textContent = "";
    }else{
        veriemail.textContent = "É necessário conter '@' e '.com' no email!";
        document.querySelector('#veriemail').style.color = 'red';
        document.querySelector('#veriemail').style.fontSize = "12px";
    }
});


//Aqui foi definido olho(botão para ver a senha) e input(campo para colocar a senha)
let olho = document.querySelector(".icone");
let inputsenha = document.querySelector("#senha");

//Aqui foi definido a função para quando clicar no botão verificarmos a senha
olho.addEventListener("click", function(){
    if(inputsenha.type === "password"){
        inputsenha.setAttribute('type', 'text');
        olho.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
    } else{
        inputsenha.setAttribute('type', 'password');
        olho.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');

    }
});

//Aqui foi atribuido um valor para o verificador de senha

let verisenha = document.querySelector("#verisenha");

//Aqui foi definido se a senha é fraca, aceitável ou forte
inputsenha.addEventListener("keyup", function(){
       if(inputsenha.value.length < 6 ){
        verisenha.textContent = "Senha fraca";
        verisenha.style.color = 'red';
        verisenha.style.fontSize = '12px';
    }else if(inputsenha.value.length >= 6 && inputsenha.value.length < 10){
        verisenha.textContent = "Senha aceitável";
        verisenha.style.color = 'orange';
        verisenha.style.fontSize = '12px';
    }else{
        verisenha.textContent = "Senha forte";
        verisenha.style.color = 'green';
        verisenha.style.fontSize = '12px';
    }
});

//Define o campo de confirma senha e o parágrafo que mostra se a senha confirmada está correta ou não
let vericonfirma = document.querySelector("#vericonfirma");
let senhacorfima = document.querySelector("#senhac");

//Aqui é verificado se o confirmar senha está igual a senha
senhacorfima.addEventListener("keyup", function(){
    if(senhacorfima.value === inputsenha.value){
        vericonfirma.textContent = "";
    }else{
        vericonfirma.textContent = "A senha digitada deve ser igual nos dois campos";
        vericonfirma.style.color = "red";
        vericonfirma.style.fontSize = "12px"
    }
});

//Define o Reg Ex para o Telefone, o input do telefone e o parágrafo para mostrar se o telefone foi escrito corretamente
let regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;
let telefone = document.querySelector("#telefone");
let veritelefone = document.querySelector("#veritelefone");

botao.addEventListener("click", function(){
    if(regexTelefone.test(telefone.value)){
        veritelefone.textContent = "";
    }else{
        veritelefone.textContent = "O campo deve ser preenchido da seguinte forma:\n(99) 99999-9999";
        veritelefone.style.color = "red";
        
    }
})