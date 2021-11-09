// these functions handle interaction with html page
const https = require("https");

function wishlistHandler() {
  let myinput = document.querySelector("#myinput").value;
  console.log("handle wishlist");
  https.post("/api/dosomethingWithWishlistData", { someData });
}

document
  .querySelector("#submitWishlist")
  .addEventListener("click", wishlistHandler);
