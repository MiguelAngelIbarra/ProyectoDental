document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica el nombre de usuario y contraseña (puedes personalizar esta lógica)
    if (username === 'admin' && password === '2') {
        window.location.href = 'admin.html'; // Redirige si las credenciales son correctas
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
});
