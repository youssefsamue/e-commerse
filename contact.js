document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        // Get input values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

        // Validation
        if (name === "" || email === "" || message === "") {
            responseMessage.textContent = "Please fill in all fields!";
            responseMessage.style.color = "red";
            responseMessage.classList.remove("hidden");
            return;
        }

        // Simulate form submission
        responseMessage.textContent = "Thank you! Your message has been sent.";
        responseMessage.style.color = "green";
        responseMessage.classList.remove("hidden");

        // Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
            responseMessage.classList.add("hidden");
        }, 2000);
    });
});
