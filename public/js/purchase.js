// Finalizamos compra con boton purchase
document.querySelectorAll('.button-finish-purchase').forEach(button => {
    button.addEventListener('click', moveToPurchase);
  });
  // funcion de finalizar compra
  function moveToPurchase(event) {
    event.preventDefault();
  
    const cartId = event.target.id;
    
    fetch(`/api/carts/${cartId}/purchase/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      if (response.ok) {
        // Si es ok redireccion
        window.location.href = `/api/carts/${cartId}/finishpurchase/`;
      } else {
        // Manejar errores aquí
        throw new Error('Error al realizar una compra');
      }
    })
    .catch(error => {
      alert(error.message);
    });
  }
  