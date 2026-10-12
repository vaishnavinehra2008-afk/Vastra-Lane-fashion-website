
let bagCount = 0;

const bagCountElement = document.getElementById("bagCount");
const bagMessage = document.getElementById("bagMessage");

const addButtons = document.querySelectorAll(".add-to-bag");

addButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        bagCount = bagCount + 1;

        bagCountElement.textContent = bagCount;

        if (bagMessage) {
            bagMessage.textContent = "Added to bag!";
        }

    });

});
