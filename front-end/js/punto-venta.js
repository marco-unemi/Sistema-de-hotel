

// Llenar la lista de nombres de clientes desde localStorage
const clientNameSelect = document.getElementById('clientNameSelect');
const savedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
savedOrders.forEach(order => {
    const option = document.createElement('option');
    option.value = order.clientName;
    option.textContent = order.clientName;
    clientNameSelect.appendChild(option);
});

document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedClient = document.getElementById('clientNameSelect').value;
    const selectedRoom = document.getElementById('roomSelect').value;
    const quantity = parseInt(document.getElementById('quantityInput').value);
    const selectedProduct = document.getElementById('productName').textContent;
    const productPrice = parseFloat(document.getElementById('productPrice').textContent.replace('$', ''));

    // Encontrar la orden del cliente (si existe)
    const clientOrder = savedOrders.find(order => order.clientName === selectedClient);
    if (clientOrder) {
      // Actualizar la orden existente
      clientOrder.orders.push({
        product: selectedProduct,
        quantity: quantity,
        totalPrice: quantity * productPrice
      });
    } else {
      // Crear una nueva orden para el cliente
      savedOrders.push({
        clientName: selectedClient,
        orders: [{
          product: selectedProduct,
          quantity: quantity,
          totalPrice: quantity * productPrice
        }]
      });
    }

    // Actualizar localStorage
    localStorage.setItem('orders', JSON.stringify(savedOrders));

    // Reiniciar el formulario
    document.getElementById('orderForm').reset();
  });