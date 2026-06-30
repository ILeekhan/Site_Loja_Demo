console.log("✅ Sistema carregado!");

// Popup
function abrirPopup() {
    const popup = document.getElementById("popupCadastro");
    if (popup) popup.style.display = "flex";
}

function fecharPopup() {
    const popup = document.getElementById("popupCadastro");
    if (popup) popup.style.display = "none";
}

window.addEventListener("click", (e) => {
    const popup = document.getElementById("popupCadastro");
    if (popup && e.target === popup) fecharPopup();
});

// Cadastro
function criarConta() {
    const usuario = document.getElementById("novoUsuario").value.trim();
    const senha = document.getElementById("novaSenha").value.trim();
    if (!usuario || !senha) return alert("Preencha todos os campos!");
    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);
    alert("Conta criada!");
    fecharPopup();
    document.getElementById("novoUsuario").value = "";
    document.getElementById("novaSenha").value = "";
}

// Login
function fazerLogin() {
    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const salvoUsuario = localStorage.getItem("usuario");
    const salvoSenha = localStorage.getItem("senha");
    if (usuario === salvoUsuario && senha === salvoSenha) {
        alert("Login realizado!");
        window.location.href = "menu.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}