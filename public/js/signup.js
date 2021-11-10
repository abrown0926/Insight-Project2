const signupFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  // Send the username and password to the server
  if (username && password) {
    const response = await fetch("/api/user/create", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      alert("Signup Successful!");
      document.location.replace("/");
    } else {
      let res = await response.json();
      alert(JSON.stringify(res));
    }
  }
};

// add event listener to login button
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
