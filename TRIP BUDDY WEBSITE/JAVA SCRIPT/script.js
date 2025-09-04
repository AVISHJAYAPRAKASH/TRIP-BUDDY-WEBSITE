
document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
    const loginForm = document.getElementById("loginForm");
    const bookForm = document.getElementById("bookForm");

    if (registerForm) {
        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = {
                fullName: document.getElementById("fullName").value,
                contact: document.getElementById("contact").value,
                email: document.getElementById("email").value,
                password: document.getElementById("password").value,
                dob: document.getElementById("dob").value,
                gender: document.querySelector('input[name="gender"]:checked').value,
            };
            localStorage.setItem("user", JSON.stringify(user));
            alert("Registration successful!");
            window.location.href = "login.html";
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const user = JSON.parse(localStorage.getItem("user"));
            if (user && user.email === email && user.password === password) {
                alert("Login successful!");
                window.location.href = "index.html";
            } else {
                alert("Invalid credentials.");
            }
        });
    }

    if (bookForm) {
        bookForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const booking = {
                destination: document.getElementById("destination").value,
                persons: document.getElementById("persons").value,
                startDate: document.getElementById("startDate").value,
                endDate: document.getElementById("endDate").value,
                description: document.getElementById("description").value,
            };
            localStorage.setItem("booking", JSON.stringify(booking));
            alert("Booking Confirmed! We will contact you soon!");

            setTimeout(() => {
                location.reload();
            }, 1000);
        });
    }
    
});
