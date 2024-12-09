function Login1() {
    window.location.href = 'sign in.html';
}
function Register() {
    window.location.href = 'sign up.html';
}
function Recipes() {
    window.location.href = 'pagina de retete.html';
}
function Add_recipe() {
    window.location.href = 'pagina de adaugat retete.html';
}
function Homepage() {
    window.location.href = 'homepage nelogat.html';
}
// Funcția care se va executa când formularul este trimis
document.getElementById("signupForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Previne trimiterea implicită a formularului

    const fullName = document.getElementById("fullName").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validare parolă (parolele trebuie să coincidă)
    if (password !== confirmPassword) {
        document.getElementById("message").textContent = "Parolele nu coincid!";
        return;
    }

    // Pregătirea datelor pentru trimiterea către backend
    const userData = {
        fullName,
        telephone,
        email,
        password
    };

    try {
        const response = await fetch('http://localhost:5000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData) // Transformăm obiectul în JSON
        });

        const data = await response.json();

        // Verificăm răspunsul serverului
        if (response.ok) {
            document.getElementById("message").textContent = "Înregistrare cu succes! Te poți autentifica acum.";
            setTimeout(() => {
                window.location.href = 'login.html'; // Redirecționează utilizatorul către pagina de login
            }, 2000);
        } else {
            document.getElementById("message").textContent = data.message || "Eroare la înregistrare!";
        }
    } catch (error) {
        document.getElementById("message").textContent = "Eroare la comunicarea cu serverul!";
    }
});