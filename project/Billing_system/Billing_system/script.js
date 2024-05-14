let items = [];

function addItem() {
    const itemName = document.getElementById("itemName").value;
    const itemQuantity = parseInt(document.getElementById("itemQuantity").value);
    const itemPrice = parseFloat(document.getElementById("itemPrice").value);

    if (!itemName || isNaN(itemQuantity) || isNaN(itemPrice)) {
        alert("Please fill all fields correctly.");
        return;
    }

    const newItem = {
        name: itemName,
        quantity: itemQuantity,
        price: itemPrice
    };

    items.push(newItem);
    updateBill();

    // Reset input fields
    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemName").focus();
}

function updateBill() {
    const billList = document.getElementById("billList");
    const totalAmount = document.getElementById("totalAmount");

    billList.innerHTML = "";
    let total = 0;

    items.forEach((item, index) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const quantityCell = document.createElement("td");
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = "₹" + item.price.toFixed(2);
        row.appendChild(priceCell);

        const totalCell = document.createElement("td");
        totalCell.textContent = "₹" + (item.quantity * item.price).toFixed(2);
        row.appendChild(totalCell);

        const actionCell = document.createElement("td");
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", () => removeItem(index));
        actionCell.appendChild(removeButton);
        row.appendChild(actionCell);

        billList.appendChild(row);
        total += item.quantity * item.price;
    });

    totalAmount.textContent = "₹" + total.toFixed(2);
}

function removeItem(index) {
    items.splice(index, 1);
    updateBill();
}

// Event listeners for Enter key press on input fields
document.getElementById("itemName").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addItem();
        document.getElementById("itemQuantity").focus();
    }
});

document.getElementById("itemQuantity").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        document.getElementById("itemPrice").focus();
    }
});

document.getElementById("itemPrice").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addItem();
        document.getElementById("itemName").focus();
    }
});
