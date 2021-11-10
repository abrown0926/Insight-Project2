const logout = async () => {
  fetch("/api/user/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      console.log(response);
      document.location.replace("/");
    } else {
      console.log(response);
      alert("Failed to log out.");
    }
  });
};

function logout2() {
  fetch("/api/user/logout", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    if (response.ok) {
      console.log(response);
      document.location.replace("/");
    } else {
      console.log(response);
      alert("Failed to log out.");
    }
  });
}

document.querySelector("#logout").addEventListener("click", logout);
