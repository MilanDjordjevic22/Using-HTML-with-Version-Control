
// Get the current year and set it in the footer
document.addEventListener("DOMContentLoaded", (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;
});

// Add a popup message in index page when clicked
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("btn-alert").addEventListener("click", function() {
        alert("You're rad!");
    });
});

// Change the profile button label when mouse is over it
var button = document.getElementById("btn-alert");

button.onmouseover = () => {
    button.innerText = 'You adventurous soul!';
};

button.onmouseleave = () => {
    button.innerText = 'Click me for a surprise!';
};

// increment and decrement the counter and adds the cass even or odd
var count = 0;

document.getElementById("btn-increase").onclick = function() {
    count += 1;
    var element = document.getElementById("btn-rate-me");
    element.textContent = count;
    element.classList.remove("even", "odd");
    if (count % 2 === 0) {
        element.classList.add("even");
    } else {
        element.classList.add("odd");
    }
};

document.getElementById("btn-decrease").onclick = function() {
    if (count > 0) {
        count -= 1;
        var element = document.getElementById("btn-rate-me");
        element.textContent = count;
        element.classList.remove("even", "odd");
        if (count % 2 === 0) {
            element.classList.add("even");
        } else {
            element.classList.add("odd");
        }
    }
};

document.getElementById("btn-decrease").onclick = () => {
    // prevent the counter from going below 0
    if (count > 0) {
        count -= 1;
        updateCount();
    }
};

// add a list of 100 numbers to the page and order them by even and odd
for (let i = 1; i <= 100; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = (i % 2 === 0) ? "even" : "odd";
    document.getElementById("numbers").appendChild(listItem);
}

