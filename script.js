const EMAIL_CORRETO = "qualidade.ufr@gmail.com";
const SENHA_CORRETA = "12345678";

function validarEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function login() {
  const email = document.getElementById("email").value.trim();
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  erro.textContent = "";

  // validacao senha
  if (!email || !senha) {
    erro.textContent = "Preencha todos os campos obrigatórios.";
    return;
  }

  if (!validarEmail(email)) {
    erro.textContent = "Digite um e-mail válido.";
    return;
  }

  if (email !== EMAIL_CORRETO || senha !== SENHA_CORRETA) {
    erro.textContent = "E-mail ou senha incorretos.";
    return;
  }

  // Area de acesso restrito em caso de sucesso
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

// adicao de chave de acesso
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("senha").addEventListener("keypress", function(e) {
    if (e.key === "Enter") login();
  });
});
