function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Get form elements
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    // Get error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    // Clear previous errors
    nameError.textContent = "";
    nameError.classList.remove("show");
    emailError.textContent = "";
    emailError.classList.remove("show");
    messageError.textContent = "";
    messageError.classList.remove("show");

    // Validate name
    if (name.value.trim() === "") {
        nameError.textContent = "Name is required.";
        nameError.classList.add("show");
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email.value.trim() === "") {
        emailError.textContent = "Email is required.";
        emailError.classList.add("show");
        isValid = false;
    } else if (!email.value.match(emailPattern)) {
        emailError.textContent = "Please include @ in the email address";
        emailError.classList.add("show");
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === "") {
        messageError.textContent = "Message is required.";
        messageError.classList.add("show");
        isValid = false;
    }

    if (isValid) {
        // Simulate form submission
        alert("Message sent successfully!");
        // Reset form
        document.getElementById("contactForm").reset();
    }

    return false;
}

// Add event listeners to clear errors on input
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", validateForm);

        // Clear errors when user starts typing
        const inputs = ["name", "email", "message"];
        inputs.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener("input", function() {
                    const errorElement = document.getElementById(id + "Error");
                    if (errorElement) {
                        errorElement.textContent = "";
                        errorElement.classList.remove("show");
                    }
                });
            }
        });
    }
});

let themeIndex = 0;
const themes = [
    { name: "green", bg: "#15803d", text: "#fbbf24" },
    { name: "blue", bg: "#1e3a8a", text: "#fbbf24" },
    { name: "purple", bg: "#6b21a8", text: "#fbbf24" },
    { name: "red", bg: "#7f1d1d", text: "#fbbf24" },
    { name: "orange", bg: "#92400e", text: "#fbbf24" },
    { name: "indigo", bg: "#312e81", text: "#fbbf24" }
];

function changeTheme() {
    const theme = themes[themeIndex];
    document.body.style.background = theme.bg;
    document.body.style.color = theme.text;
    
    themeIndex = (themeIndex + 1) % themes.length;
}