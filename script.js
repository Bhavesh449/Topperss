document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    alert(`You selected ${button.innerText}`);
  });
});

document.querySelector('.footer-btn:nth-child(1)').addEventListener('click', () => {
  alert('Going to Home...');
});

document.querySelector('.footer-btn:nth-child(2)').addEventListener('click', () => {
  alert('Opening AI section...');
});
