document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simple form validation
        if (name && email && message) {
            formMessage.classList.remove("hidden");
            formMessage.classList.add("success");
            formMessage.innerHTML = "Thank you for contacting us! We'll get back to you shortly.";
            form.reset();
        } else {
            formMessage.classList.remove("hidden");
            formMessage.classList.add("error");
            formMessage.innerHTML = "Please fill out all fields.";
        }
    });
});
