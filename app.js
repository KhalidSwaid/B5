// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import {
    homePage,
    loginPage,
    translations,
    authenticatedUser,
} from "./main.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBU7bpMsc4MZhNgQUr5fctbKZnOrQGvaFI",
    authDomain: "webproject-84623.firebaseapp.com",
    projectId: "webproject-84623",
    storageBucket: "webproject-84623.appspot.com",
    messagingSenderId: "597356177781",
    appId: "1:597356177781:web:39ad9bd19b927870744b3c",
    measurementId: "G-S7GQ7V2FJC",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var firestore = firebase.firestore();

const db = firestore.collection("users");

let logInButton = document.getElementById("LogIn-Button");
let signUpButton = document.getElementById("SignUp-Button");
let showPasswordToggle = document.getElementById("showPasswordToggle");

logInButton.addEventListener("click", async function () {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (!validateLogIn(username, password)) return;

    let logInButton = document.getElementById("LogIn-Button");
    let errorMessage = document.getElementById("login-error");

    let language = localStorage.getItem("language") || "en";
    logInButton.innerHTML =
        translations[language]["LogInButton"] +
        "<div class='buttonLoader flex justify-center items-center my-auto ml-2'></div>";
    logInButton.disabled = true;
    errorMessage.textContent = "";

    logIn(username, password);
});

function validateLogIn(username, password) {
    let language = localStorage.getItem("language") || "en";
    let errorMessage = document.getElementById("login-error");

    if (username === "" || password === "") {
        errorMessage.innerHTML = translations[language]["errorFillAllFields"];
        return false;
    }

    return true;
}

showPasswordToggle.addEventListener("click", function () {
    let password = document.getElementById("signup-password");
    let confirmPassword = document.getElementById("signup-password-confirm");

    if (showPasswordToggle.checked) {
        console.log(showPasswordToggle.checked);
        password.setAttribute("type", "text");
        confirmPassword.setAttribute("type", "text");
    } else {
        password.setAttribute("type", "password");
        confirmPassword.setAttribute("type", "password");
    }
});

signUpButton.addEventListener("click", async function () {
    let email = document.getElementById("signup-mail").value;
    let firstName = document.getElementById("signup-firstname").value;
    let lastName = document.getElementById("signup-lastname").value;
    let username = document.getElementById("signup-username").value;
    let password = document.getElementById("signup-password").value;
    let confirmPassword = document.getElementById(
        "signup-password-confirm",
    ).value;

    let signUpButton = document.getElementById("SignUp-Button");
    let errorMessage = document.getElementById("signup-error");

    let language = localStorage.getItem("language") || "en";
    signUpButton.innerHTML =
        translations[language]["SignUpButton"] +
        "<div class='buttonLoader flex justify-center items-center my-auto ml-2'></div>";
    signUpButton.disabled = true;
    errorMessage.textContent = "";

    if (
        await validateSignUp(
            email,
            firstName,
            lastName,
            username,
            password,
            confirmPassword,
        )
    ) {
        signUp(email, firstName, lastName, username, password);
    } else {
        signUpButton.textContent = translations[language]["SignUpButton"];
        signUpButton.disabled = false;
    }
});

async function validateSignUp(
    email,
    firstName,
    lastName,
    username,
    password,
    confirmPassword,
) {
    let language = localStorage.getItem("language") || "en";
    let errorMessage = document.getElementById("signup-error");

    if (
        email === "" ||
        username === "" ||
        password === "" ||
        confirmPassword === "" ||
        firstName === "" ||
        lastName === ""
    ) {
        errorMessage.innerHTML = translations[language]["errorFillAllFields"];
        return false;
    }

    if (password !== confirmPassword) {
        errorMessage.innerHTML =
            translations[language]["errorPasswordsDoNotMatch"];
        return false;
    }

    const usernameSnapshot = await db
        .where("username", "==", username)
        .limit(1)
        .get();
    const emailSnapshot = await db.where("email", "==", email).limit(1).get();

    if (!usernameSnapshot.empty) {
        errorMessage.innerHTML = translations[language]["errorUsernameExists"];
        return false;
    }

    if (!emailSnapshot.empty) {
        errorMessage.innerHTML = translations[language]["errorEmailExists"];
        return false;
    }

    return true;
}

function signUp(mail, firstName, lastName, username, password) {
    let language = localStorage.getItem("language") || "en";
    let signUpButton = document.getElementById("SignUp-Button");
    let errorMessage = document.getElementById("signup-error");
    db.doc()
        .set({
            email: mail,
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
        })
        .then(() => {
            console.log("Data Saved");
            signupSuccessMessage();
        })
        .catch((error) => {
            console.log(error);
            errorMessage.innerHTML =
                translations[language]["somethingWentWrong"];
        })
        .finally(() => {
            signUpButton.textContent = translations[language]["SignUpButton"];
            signUpButton.disabled = false;
        });
}

function signupSuccessMessage() {
    let language = localStorage.getItem("language") || "en";
    let errorMessage = document.getElementById("signup-error");
    errorMessage.innerHTML = translations[language]["successSignUp"];

    errorMessage.style.color = "green";

    setTimeout(() => {
        errorMessage.innerHTML = "";
        errorMessage.style.color = "red";
        clearSignUpFields();
        loginPage();
    }, 2000);
}

async function logIn(username, password) {
    let usernameInput = document.getElementById("login-username");
    let passwordInput = document.getElementById("login-password");
    let language = localStorage.getItem("language") || "en";
    let loginButton = document.getElementById("LogIn-Button");
    let errorMessage = document.getElementById("login-error");
    const userData = await db.where("username", "==", username).limit(1).get();

    if (userData.empty) {
        errorMessage.innerHTML = translations[language]["errorUserNotFound"];
        loginButton.textContent = translations[language]["LogInButton"];
        loginButton.disabled = false;
        return;
    }

    userData.forEach((doc) => {
        if (doc.data().password !== password) {
            errorMessage.innerHTML =
                translations[language]["errorWrongPassword"];
        } else {
            console.log(doc.data());
            let user = doc.data();
            user.password = null;
            localStorage.setItem("user", JSON.stringify(user));
            authenticatedUser();
            homePage();
            usernameInput.value = "";
            passwordInput.value = "";
        }
        loginButton.textContent = translations[language]["LogInButton"];
        loginButton.disabled = false;
    });
}

function clearSignUpFields() {
    document.getElementById("signup-mail").value = "";
    document.getElementById("signup-firstname").value = "";
    document.getElementById("signup-lastname").value = "";
    document.getElementById("signup-username").value = "";
    document.getElementById("signup-password").value = "";
    document.getElementById("signup-password-confirm").value = "";
}

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Function to update menu styles
    function updateMenuStyles() {
        const windowWidth = window.innerWidth;

        if (windowWidth <= 768) {
            // Mobile view styles
            navMenu.style.flexDirection = "column";
            navMenu.style.position = "absolute";
            const rect = menuToggle.getBoundingClientRect();
            navMenu.style.top = `${rect.bottom + window.scrollY}px`;
            navMenu.style.left = `${rect.left + window.scrollX - 30}px`;

            //Set each button to be displayed in a block (one below the other)
            // const buttons = navMenu.querySelectorAll("button");
            // buttons.forEach((button) => {
            //     button.style.display = "block";
            //     button.style.marginBottom = "8px";
            //     button.style.padding = "8px";
            // });
            // Wrap buttons in a container div
            const buttonsContainer = document.createElement("div");
            buttonsContainer.style.display = "flex";
            buttonsContainer.style.flexDirection = "column";
            buttonsContainer.style.alignItems = "center";
            buttonsContainer.style.marginLeft = "-5px";
            buttonsContainer.style.borderRadius = "10px"; // Adjust the border radius as needed

            // Function to update button styles
            function updateButtonStyles() {
                const buttons = navMenu.querySelectorAll("button");

                buttonsContainer.style.backgroundColor = ""; // Reset background color

                buttons.forEach((button) => {
                    button.style.marginBottom = "";
                    button.style.padding = "";
                    button.style.backgroundColor = ""; // Reset background color
                });
            }

            // Append the container to the navMenu
            navMenu.appendChild(buttonsContainer);

            // Set each button to be displayed in the container
            const buttons = navMenu.querySelectorAll("button");
            buttons.forEach((button) => {
                button.style.marginBottom = "8px";
                button.style.padding = "8px";

                // Append the button to the container
                buttonsContainer.appendChild(button);
            });

            // Update styles when the window is resized
            window.addEventListener("resize", () => {
                if (window.innerWidth >= 768) {
                    // Clear inline styles for larger screens
                    buttonsContainer.removeAttribute("style");
                    updateButtonStyles(); // Reset button styles
                } else {
                    // Update styles for smaller screens
                    buttonsContainer.style.display = "flex";
                    updateButtonStyles();
                }
            });

            // Set initial background color based on the page's background color
            const pageBackgroundColor = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches
                ? "#1F2937" // Dark background color
                : "#FFFFFF"; // Light background color

            buttonsContainer.style.backgroundColor = pageBackgroundColor;
        } else {
            // Remove mobile view styles
            navMenu.style.flexDirection = "";
            navMenu.style.position = "";
            navMenu.style.top = "";
            navMenu.style.left = "";

            // Reset styles for each button
            const buttons = navMenu.querySelectorAll("button");
            buttons.forEach((button) => {
                button.style.display = "";
                button.style.marginBottom = "";
                button.style.padding = "";
            });
        }
    }

    // Event listener for menuToggle click
    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("hidden");
        updateMenuStyles();
    });

    // Event listener for window resize
    window.addEventListener("resize", function () {
        updateMenuStyles();
        if (window.innerWidth > 768) {
            // Close the menu on larger screens
            navMenu.classList.add("hidden");
        }
    });

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", function (event) {
        if (
            !menuToggle.contains(event.target) &&
            !navMenu.contains(event.target)
        ) {
            navMenu.classList.add("hidden");
        }
    });
});
