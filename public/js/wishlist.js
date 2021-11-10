// const user_id = sessionStorage.getItem("user_id")

async function getWishlist() {
  const wishlistItems = await fetch("/api/wishlist/" + user_id).then((res) =>
    res.json()
  );

  console.log(wishlistItems)

  clearWishlist();

  wishlistItems.forEach(({ id, contents }) => {
    console.log("Item", contents);
    addNewItem(contents, id);
  });
}

function clearWishlist() {
  document.querySelector("#myUL").innerHTML = "";
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ol");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
async function newElement(userId) {
  console.log({ userId });
  var inputValue = document.getElementById("myInput").value;

  if (inputValue === "") {
    return alert("Please enter a wishlist item!");
  }
  document.getElementById("myInput").value = "";

  // Send item to DB/backend
  await fetch("/api/wishlist", {
    method: "POST",
    body: JSON.stringify({
      contents: inputValue,
      user_id: userId,
      date: new Date(),
    }),
    headers: { "Content-Type": "application/json" },
  });

  getWishlist();
}

const addNewItem = function (item, id) {
  // creating a newlist item and adding item to wishlist
  var li = document.createElement("li");
  var t = document.createTextNode(item);
  li.appendChild(t);

  // Adding the remove button
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  document.getElementById("myUL").appendChild(li);

  // remove item on wishlist on remove button click
  span.addEventListener("click", async () => {
    console.log("We have to remove this item!", id);
    await fetch("/api/wishlist/delete/" + id).then((res) => res.json());
    getWishlist();
  });
};
getWishlist()
