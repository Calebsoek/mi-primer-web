
    <script type="module">
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
        import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

        const firebaseConfig = {
            apiKey: "AIzaSyClqCl7S9xBs81gyl5IsUof2Pg72nfl6-E",
            authDomain: "mi-primer-web-d996a.firebaseapp.com",
            projectId: "mi-primer-web-d996a",
            storageBucket: "mi-primer-web-d996a.appspot.com",
            messagingSenderId: "287324047213",
            appId: "1:287324047213:web:d2cd7484de58f5d70b3c64",
            measurementId: "G-SS3CPZR6HP"
        );

        const app = initializeApp(firebaseConfig);
        const auth = getAuth();

        const emailSignIn = () => {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential.user);
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        const forgotPassword = () => {
            const email = document.getElementById('email').value;
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('Correo de recuperación enviado');
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        const registerUser = () => {
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential.user);
                    window.location.href = 'index.html';
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        const showRegister = () => {
            document.getElementById('form-container').classList.add('rotate');
        };

        const showLogin = () => {
            document.getElementById('form-container').classList.remove('rotate');
        };
          
    </script>

