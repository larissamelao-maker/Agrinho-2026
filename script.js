document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("btnMensagem");
    const mensagem = document.getElementById("mensagemOculta");

    botao.addEventListener("click", function() {
        mensagem.textContent = "O futuro já começou. Cada drone voando, cada gota poupada e cada árvore em pé constroem o Agro Forte!";
        mensagem.classList.remove("oculto");
        mensagem.classList.add("mensagem-estilizada");
        
        // Desabilita o botão após o clique para uma melhor experiência
        botao.style.display = "none";
    });
});
