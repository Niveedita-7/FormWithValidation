const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

const successMessage = document.getElementById("successMessage");


form.addEventListener("submit", function(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Remove previous messages
    clearMessages();

    let isValid = true;


    // =============================
    // NAME VALIDATION
    // =============================

    const name = nameInput.value.trim();

    const namePattern = /^[A-Za-z ]+$/;

    if (name === "") {

        showError(nameInput, nameError, "Name is required.");

        isValid = false;

    } else if (!namePattern.test(name)) {

        showError(
            nameInput,
            nameError,
            "Name can contain only letters."
        );

        isValid = false;

    } else {

        showValid(nameInput);
    }


    // =============================
    // EMAIL VALIDATION
    // =============================

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        showError(
            emailInput,
            emailError,
            "Email is required."
        );

        isValid = false;

    } else if (!emailPattern.test(email)) {

        showError(
            emailInput,
            emailError,
            "Enter a valid email address."
        );

        isValid = false;

    } else {

        showValid(emailInput);
    }


    // =============================
    // PHONE VALIDATION
    // =============================

    const phone = phoneInput.value.trim();

    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        showError(
            phoneInput,
            phoneError,
            "Phone number is required."
        );

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        showError(
            phoneInput,
            phoneError,
            "Phone number must contain 10 digits."
        );

        isValid = false;

    } else {

        showValid(phoneInput);
    }


    // =============================
    // PASSWORD VALIDATION
    // =============================

    const password = passwordInput.value;

    /*
        Password must contain:

        At least 8 characters
        At least one uppercase letter
        At least one lowercase letter
        At least one number
    */

    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (password === "") {

        showError(
            passwordInput,
            passwordError,
            "Password is required."
        );

        isValid = false;

    } else if (!passwordPattern.test(password)) {

        showError(
            passwordInput,
            passwordError,
            "Use 8+ characters, uppercase, lowercase & number."
        );

        isValid = false;

    } else {

        showValid(passwordInput);
    }


    // =============================
    // CONFIRM PASSWORD
    // =============================

    const confirmPassword =
        confirmPasswordInput.value;

    if (confirmPassword === "") {

        showError(
            confirmPasswordInput,
            confirmPasswordError,
            "Please confirm your password."
        );

        isValid = false;

    } else if (confirmPassword !== password) {

        showError(
            confirmPasswordInput,
            confirmPasswordError,
            "Passwords do not match."
        );

        isValid = false;

    } else {

        showValid(confirmPasswordInput);
    }


    // =============================
    // FINAL RESULT
    // =============================

    if (isValid) {

        successMessage.style.display = "block";

        successMessage.textContent =
            "★ PROFILE CREATED SUCCESSFULLY! ★";

        form.reset();

        // Remove green borders after resetting
        setTimeout(function() {

            nameInput.classList.remove("valid");
            emailInput.classList.remove("valid");
            phoneInput.classList.remove("valid");
            passwordInput.classList.remove("valid");
            confirmPasswordInput.classList.remove("valid");

        }, 100);
    }

});


/* ================================= */
/* SHOW ERROR */
/* ================================= */

function showError(input, errorElement, message) {

    input.classList.add("invalid");

    errorElement.textContent = "✖ " + message;
}


/* ================================= */
/* SHOW VALID */
/* ================================= */

function showValid(input) {

    input.classList.add("valid");
}


/* ================================= */
/* CLEAR MESSAGES */
/* ================================= */

function clearMessages() {

    const inputs = [
        nameInput,
        emailInput,
        phoneInput,
        passwordInput,
        confirmPasswordInput
    ];

    const errors = [
        nameError,
        emailError,
        phoneError,
        passwordError,
        confirmPasswordError
    ];

    inputs.forEach(function(input) {

        input.classList.remove("valid");
        input.classList.remove("invalid");

    });

    errors.forEach(function(error) {

        error.textContent = "";

    });

    successMessage.style.display = "none";
}