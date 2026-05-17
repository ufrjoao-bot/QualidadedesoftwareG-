
  const EMAIL_CORRETO = "qualidade.ufr@gmail.com";
  const SENHA_CORRETA = "12345678";

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

    function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const erro = document.getElementById("erro");

    erro.textContent = "";

    if (!email || !senha) {
    erro.textContent = "Preencha todos os campos.";
    return;
    }

    if (!email) {
      erro.textContent = "O campo e-mail é obrigatório.";
      return;
    }
    
    if (!validarEmail(email)) {
      erro.textContent = "Digite um e-mail válido.";
      return;
    }

    if (email !== EMAIL_CORRETO || senha !== SENHA_CORRETA) {
      erro.textContent = "Credenciais incorretas.";
      return;
    }

    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("painel").classList.remove("hidden");
  }

  function logout() {
    document.getElementById("loginBox").classList.remove("hidden");
    document.getElementById("painel").classList.add("hidden");

    document.getElementById("email").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("erro").textContent = "";
  }
