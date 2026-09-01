const botaoAtualizar = document.getElementById("atualizar");
const botaoTema = document.getElementById("tema");
const campoNome = document.getElementById("novoNome");
const nomePerfil = document.getElementById("nomePerfil");
const profissao = document.getElementById("profissao");
const mensagem = document.getElementById("mensagem");
const perfil = document.querySelector(".perfil");

    botaoAtualizar.addEventListener(
    "click", function () {
        const novoNome = campoNome.value;

        //validando campo
    if (campoNome.value === "") {
        mensagem.textContent = "Digite um nome antes de atualizar.";
        return;
    }

        //alterando o card
    nomePerfil.textContent = novoNome; 
    profissao.textContent = "Desenvolvedor(a) Web";
    perfil.classList.add("atualizado");

       mensagem.textContent = "Perfil atualizado com sucesso!";

    }
    );

    //tema claro e escuro
    botaoTema.addEventListener(
     "click", function () {
        document.body.classList.toggle("tema-escuro");
 }
);

//input mudando enquanto digita

    campoNome.addEventListener(
        "input", function () {
        nomePerfil.textContent = campoNome.value;
 }
);

//focus e blur
        //quando usuario entrar no campo
    campoNome.addEventListener(
        "focus", function () {
            campoNome.classList.add("campo-ativo");
    // no evento blur:
        campoNome.classList.remove("campo-ativo");
 }
);

        /*quando sair
    campoNome.addEventListener(
        "blur", function () {
        campoNome.style.border = "1px solid gray";
 }
);
*/

