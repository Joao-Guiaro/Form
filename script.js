//Definir o botão de enviar
let botao = document.querySelector("#cadastrar");

//Definir o campo de nome e o parágrafo para validar o nome
let nome = document.querySelector("#nome");
let verinome = document.querySelector("#verinome");

botao.addEventListener("click", function(){
    if(nome.value.trim() === ""){
        verinome.textContent = "O nome não pode ser vazio!";
        verinome.style.color = 'red';
        verinome.style.fontSize = '12px';
    } else {
        verinome.textContent = "";
    }
});  

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
botao.addEventListener("click", function(){
    if(inputsenha.value.length == 0){
        verisenha.textContent = "Senha fraca";
        verisenha.style.color = 'red';
        verisenha.style.fontSize = '12px';  
    }
});

//Aqui foi definido se a senha é fraca, aceitável ou forte
inputsenha.addEventListener("keyup", function(){
       if(inputsenha.value.length < 6 ){
        verisenha.textContent = "Senha fraca";
        verisenha.style.color = 'red';
        verisenha.style.fontSize = '12px';
    }else if(inputsenha.value.length >= 6 && inputsenha.value.length < 10){
        verisenha.textContent = "Senha aceitável";
        verisenha.style.color = 'green';
        verisenha.style.fontSize = '12px';
    }else{
        verisenha.textContent = "Senha forte";
        verisenha.style.color = 'blue';
        verisenha.style.fontSize = '12px';
    }
});

//Define o campo de confirma senha e o parágrafo que mostra se a senha confirmada está correta ou não
let vericonfirma = document.querySelector("#vericonfirma");
let senhacorfima = document.querySelector("#senhac");

//Aqui é verificado se o confirmar senha está igual a senha
botao.addEventListener("click", function(){
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


//Aqui é verificado se o telefone está no formato correto, caso contrário, é mostrado uma mensagem de erro
botao.addEventListener("click", function(){

    let todosTelefones = document.querySelectorAll(".telefone");
    let todosVeritelefone = document.querySelectorAll(".veritelefone");

    todosTelefones.forEach(function(tel, posicao){

        if(!regexTelefone.test(tel.value)){
            todosVeritelefone[posicao].textContent = "Telefone inválido, utilize: (99) 99999-9999";
            todosVeritelefone[posicao].style.color = "red";
            todosVeritelefone[posicao].style.fontSize = "12px";
            todosVeritelefone[posicao].style.display = "block";

        } else {
            todosVeritelefone[posicao].textContent = "";
            todosVeritelefone[posicao].style.display = "none";
        }

    });

});

//função para criar um novo campo de telefone
function adicionarTelefone(){
    let divtelefone = document.createElement("div");
    divtelefone.classList.add("inputtelefone");
    
    let campoTelefone = document.createElement("div");
    campoTelefone.classList.add("campotelefone");

    let telefone2 = document.createElement("input");
    telefone2.type = "text";
    telefone2.placeholder = "Telefone";
    telefone2.classList.add("telefone");
    campoTelefone.appendChild(telefone2);

    let novoAdicionar = document.createElement("i");
    novoAdicionar.classList.add("bi", "bi-plus-square", "mais");
    novoAdicionar.title = "Adicionar telefone";
    campoTelefone.appendChild(novoAdicionar);

    novoAdicionar.addEventListener("click", adicionarTelefone);

    let removerTelefone = document.createElement("i");
    removerTelefone.classList.add("bi", "bi-dash-square", "menos");
    removerTelefone.title = "Remover telefone";
    removerTelefone.style.cursor = "pointer";
    removerTelefone.style.position = "absolute";
    removerTelefone.style.left = "90%";
    removerTelefone.style.bottom = "25%";
    campoTelefone.appendChild(removerTelefone);

    

    removerTelefone.addEventListener("click", function(){
    removerTelefone.closest(".inputtelefone").remove();
    });

    divtelefone.appendChild(campoTelefone);

    let veritelefone2 = document.createElement("p");
    veritelefone2.classList.add("veritelefone");
    divtelefone.appendChild(veritelefone2);

    document.querySelector("#telefones").appendChild(divtelefone);

};

//Define o botão para adicionar outro telefone
let adicionar = document.querySelectorAll(".mais");
adicionar.forEach(function(botaoAdicionar){
    botaoAdicionar.addEventListener("click", adicionarTelefone);
});

let remover = document.querySelectorAll(".menos");
remover.forEach(function(botaoRemover){
    botaoRemover.addEventListener("click", function(){
        botaoRemover.closest(".inputtelefone").remove();
    });
});

//Define o Reg Ex para o CEP, o input do CEP e o parágrafo para mostrar se o CEP foi escrito corretamente
let regexCep = /^\d{5}-\d{3}$/;
let inputcep = document.querySelector("#cep");
let vericep = document.querySelector("#vericep");
botao.addEventListener("click", function(){
    if(!regexCep.test(inputcep.value)){
        vericep.textContent = "CEP inválido, utilize o formato: 99999-999";
        vericep.style.color = "red";
        vericep.style.fontSize = "12px";
    } else {
        vericep.textContent = "";
    }
});

//Define o parágrafo para mostrar a mensagem final de sucesso ou erro no envio do formulário
let mensagem = document.querySelector("#mensagem");
botao.addEventListener("click", function(){

    let telefones = document.querySelectorAll(".telefone");

    let telefoneValido = true;

    telefones.forEach(function(tel){
        if(!regexTelefone.test(tel.value)){
            telefoneValido = false;
        }
    });

    if(
        nome.value.trim() === "" ||
        !regexEmail.test(email.value) ||
        !telefoneValido ||
        inputsenha.value.length < 6 ||
        senhacorfima.value !== inputsenha.value ||
        !regexCep.test(inputcep.value)
    ){
        mensagem.textContent = "Preencha todos os campos corretamente!";
        mensagem.style.color = "red";
        mensagem.style.fontSize = "12px";
    } else {
        mensagem.textContent = "Formulário enviado com sucesso!";
        mensagem.style.color = "green";
        mensagem.style.fontSize = "12px";
    }

});
