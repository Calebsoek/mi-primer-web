


const showAlert = (message) => {
    alert(message);
};

const showRegister = () => {
    document.getElementById('form-container').classList.add('rotate');
};

const showLogin = () => {
    document.getElementById('form-container').classList.remove('rotate');
};

const showForgotPasswordForm = () => {
    document.getElementById('forgot-password-modal').style.display = 'block';
};

const closeForgotPasswordForm = () => {
    document.getElementById('forgot-password-modal').style.display = 'none';
};

const validateLoginForm = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');
    errorElement.textContent = '';

    if (!email || !password) {
        errorElement.textContent = 'Por favor, complete todos los campos.';
    } else {
        showAlert('Inicio de sesión');
    }
};

const validateRegisterForm = () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const errorElement = document.getElementById('register-error');
    errorElement.textContent = '';

    if (!email || !password) {
        errorElement.textContent = 'Por favor, complete todos los campos.';
    } else {
        showAlert('Registro');
    }
};

const validateForgotPasswordForm = () => {
    const email = document.getElementById('forgot-email').value;
    const errorElement = document.getElementById('forgot-error');
    errorElement.textContent = '';

    if (!email) {
        errorElement.textContent = 'Por favor, ingrese su correo electrónico.';
    } else {
        showAlert('Se ha enviado el correo de restablecimiento');
    }
};