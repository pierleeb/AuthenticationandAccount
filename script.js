function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simulação de autenticação básica
    if (username === 'usuario' && password === 'senha') {
        // Autenticação bem-sucedida
        errorMessage.style.display = 'none';
        document.getElementById('loginForm').reset();
        toggleRegisteredState();
    } else {
        // Exibir mensagem de erro
        errorMessage.textContent = 'Credenciais inválidas. Tente novamente.';
        errorMessage.style.display = 'block';
    }
}

function toggleRegisteredState() {
    const loginContainer = document.querySelector('.login-container');
    loginContainer.classList.toggle('registered');
}
