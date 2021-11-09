// see activity 20 Middleware
const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  // add option to log in with email or username
  // const username = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();
  // (username || email && password)
  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }), //username next to email
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    console.log(username, email, password);
    const response = await fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      const resjson = await response.json();
      console.log(resjson);
      //    document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

// $(document).ready(function () {
//   $(".login-info-box").fadeOut();
//   $(".login-show").addClass("show-log-panel");
// });
// $('.login-reg-panel input[type="radio"]').on("change", function () {
//   if ($("#log-login-show").is(":checked")) {
//     $(".register-info-box").fadeOut();
//     $(".login-info-box").fadeIn();
//     $(".white-panel").addClass("right-log");
//     $(".register-show").addClass("show-log-panel");
//     $(".login-show").removeClass("show-log-panel");
//   } else if ($("#log-reg-show").is(":checked")) {
//     $(".register-info-box").fadeIn();
//     $(".login-info-box").fadeOut();
//     $(".white-panel").removeClass("right-log");
//     $(".login-show").addClass("show-log-panel");
//     $(".register-show").removeClass("show-log-panel");
//   }
// });

// // see activity 20 Middleware
// const loginFormHandler = async (event) => {
//   event.preventDefault();

//   const email = document.querySelector("#email-login").value.trim();
//   const password = document.querySelector("#password-login").value.trim();

//   if (email && password) {
//     const response = await fetch("/api/users/login", {
//       method: "POST",
//       body: JSON.stringify({ email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to log in.");
//     }
//   }
// };

// const signupFormHandler = async (event) => {
//   event.preventDefault();

//   const username = document.querySelector("#username-signup").value.trim();
//   const email = document.querySelector("#email-signup").value.trim();
//   const password = document.querySelector("#password-signup").value.trim();

//   if (username && email && password) {
//     const response = await fetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({ username, email, password }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       document.location.replace("/");
//     } else {
//       alert("Failed to sign up.");
//     }
//   }
// };

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
