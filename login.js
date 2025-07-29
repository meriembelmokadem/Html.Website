// Login légitime local (non sécurisé, uniquement pour tests)
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Informations d'identification "légitimes" codées en dur (ex. pour tests)
  const validUsername = "admin";
  const validPassword = "1234";

  if (username === validUsername && password === validPassword) {
    document.getElementById('message').style.color = "green";
    document.getElementById('message').textContent = "Connexion réussie !";
    // Redirection simulée
    setTimeout(() => {
      window.location.href = "dashboard.html"; // À créer si nécessaire
    }, 1000);
  } else {
    document.getElementById('message').style.color = "red";
    document.getElementById('message').textContent = "Identifiants incorrects.";
  }
});
