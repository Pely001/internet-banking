function entrar() {
    var usuario = document.getElementById("usuario").value.trim().toLowerCase(); // Remove espaços e converte para minúsculas
    var senha = document.getElementById("senha").value.trim(); // Remove espaços

    var usuarios = [
        { usuario: "Pedro", senha: "29061994" },
        { usuario: "Michael", senha: "888888" },
        { usuario: "Roblox", senha: "faderoblox" }
    ];

    var usuarioValido = usuarios.find(function(u) {
        // Converte o nome de usuário para minúsculas e compara
        return u.usuario.toLowerCase() === usuario && u.senha === senha;
    });

    if (usuarioValido) {
        // Salva o nome do usuário e o saldo inicial no Local Storage
        localStorage.setItem("usuarioLogado", usuarioValido.usuario);

        // Verifica se o saldo já existe no Local Storage, caso contrário, define como 100
        if (!localStorage.getItem(`saldo_${usuarioValido.usuario}`)) {
            localStorage.setItem(`saldo_${usuarioValido.usuario}`, "100.00");
        }

        window.location.href = "conta.html";
        return;
    }

    alert("Usuário ou senha incorretos.");
}