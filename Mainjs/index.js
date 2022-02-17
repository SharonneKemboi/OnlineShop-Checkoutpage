const inputs = document.querySelectorAll('input');
const select = document.querySelector('select');

const decreaseQuantityBtn1 = document.querySelector('.decrease-qty1');
const increaseQuantityBtn1 = document.querySelector('.increase-qty1');
const quantityCount1 = document.querySelector('.count1');

const decreaseQuantityBtn2 = document.querySelector('.decrease-qty2');
const increaseQuantityBtn2 = document.querySelector('.increase-qty2');
const quantityCount2 = document.querySelector('.count2');

const increment = (value) => {
  const result = value + 1;
  return result;
};

const decrement = (value) => {
  const result = value - 1;
  return result;
};

const decreaseQty = (countEl) => {
  const count = parseInt(countEl.innerHTML);
  let result = 0;

  if (count > 1) {
    result = decrement(count);
    countEl.innerHTML = String(result);
  }
};

const increaseQty = (countEl) => {
  const count = parseInt(countEl.innerHTML);
  const result = increment(count);
  countEl.innerHTML = String(result);
};

decreaseQuantityBtn1.addEventListener('click', () => {
  decreaseQty(quantityCount1);
});

increaseQuantityBtn1.addEventListener('click', () => {
  increaseQty(quantityCount1);
});

decreaseQuantityBtn2.addEventListener('click', () => {
  decreaseQty(quantityCount2);
});

increaseQuantityBtn2.addEventListener('click', () => {
  increaseQty(quantityCount2);
});

document.addEventListener('submit', () => {
  alert('Checkout successful');
  inputs.forEach((input) => {
    input.value = '';
  });
  select.value = '';
});
