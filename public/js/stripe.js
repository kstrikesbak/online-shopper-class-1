const checkoutHandler = StripeCheckout.configure({
  key: 'pk_test_MVvgmxC2CUh5or6jbVviiQWa',
  locale: 'auto'
});
const button = document.getElementById('buttonCheckout');
button.addEventListener('click', function(ev) {
  checkoutHandler.open({
    name: 'Online Shopper',
    description: 'Items Purchased',
    token: handleToken
  });
});

function handleToken(token) {
  fetch('/api/cart/payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(token)
  }).then(output => {
    if (output.status === 'succeeded')
      document.getElementById('shop').innerHTML = 'Purchase complete!';
  });
}
