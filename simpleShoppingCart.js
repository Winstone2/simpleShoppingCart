// Step 1: Item Representation
function createItem(name, price, quantity) {
    return {
        name: name,
        price: price,
        quantity: quantity,
    };
}

// Step 2: Cart Management
const cart = [];

// Step 3: Add Items to Cart
function addItemToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.name === item.name);

    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push(item);
    }
}

// Step 4: Remove Items from Cart
function removeItemFromCart(itemName) {
    const itemIndex = cart.findIndex(cartItem => cartItem.name === itemName);

    if (itemIndex !== -1) {
        cart.splice(itemIndex, 1);
    }
}

// Step 5: Calculate Total Cost
function calculateTotalCost() {
    let total = 0;

    for (const item of cart) {
        total += item.price * item.quantity;
    }

    return total;
}

// Example usage
const item1 = createItem("Product A", 10, 2);
const item2 = createItem("Product B", 20, 1);

addItemToCart(item1);
addItemToCart(item2);
console.log("Cart after adding items:", cart);

removeItemFromCart("Product A");
console.log("Cart after removing an item:", cart);

const totalCost = calculateTotalCost();
console.log("Total cost:", totalCost);
