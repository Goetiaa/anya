// Add event listener to 'Add to Cart' buttons
var addToCartButtons = document.getElementsByClassName('add-to-cart');
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCart);
}

// Function to handle 'Add to Cart' button click
function addToCart(event) {
  var product = event.target.parentNode;
  var productName = product.getElementsByTagName('h2')[0].innerText;
  var productPrice = parseFloat(product.getElementsByTagName('p')[0].innerText.slice(1));
  var quantity = parseInt(product.getElementsByTagName('input')[0].value);

  if (quantity > 0) {
    var cartItems = document.getElementById('cart-items');
    var newRow = cartItems.insertRow(-1);
    var productCell = newRow.insertCell(0);
    var quantityCell = newRow.insertCell(1);
    var priceCell = newRow.insertCell(2);

    productCell.innerHTML = productName;
    quantityCell.innerHTML = quantity;
    priceCell.innerHTML = "$" + (productPrice * quantity).toFixed(2);

    calculateTotal();
  }
}

// Function to calculate the total price
function calculateTotal() {
  var total = 0;
  var priceCells = document.querySelectorAll('#cart-items td:nth-child(3)');

  for (var i = 0; i < priceCells.length; i++) {
    total += parseFloat(priceCells[i].innerText.slice(1));
  }

  document.getElementById('total').innerText = "Total: $" + total.toFixed(2);
}


