// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { homePage, translations } from "./main";
import { authenticatedUser } from "./main";
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
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

var firestore = firebase.firestore();

const db = firestore.collection("users");

let logInButton = document.getElementById("LogIn-Button");
let signUpButton = document.getElementById("SignUp-Button");

logInButton.addEventListener("click", async function () {
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;

    if (!validateLogIn(username, password)) return;

    let logInButton = document.getElementById("LogIn-Button");
    let errorMessage = document.getElementById("login-error");

    let language = localStorage.getItem("language") || "en";
    logInButton.innerHTML =
        translations[language]["LogInButton"] +
        "<img class='flex justify-center items-center h-6 w-6 ml-3' src='images/spinner.gif' />";
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
        "<img class='flex justify-center items-center h-6 w-6 ml-3' src='images/spinner.gif' />";
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
    }, 2000);
}

async function logIn(username, password) {
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
        }
        loginButton.textContent = translations[language]["LogInButton"];
        loginButton.disabled = false;
    });
}
