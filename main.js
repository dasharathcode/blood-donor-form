const form = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const formData = {
    name: document.getElementById('name').value,
    address: document.getElementById('address').value,
    mobile: document.getElementById('mobile').value,
    bloodGroup: document.getElementById('bloodGroup').value,
  };

  // Store data in local storage (INSECURE - ONLY FOR TESTING!)
  localStorage.setItem('formData', JSON.stringify(formData));

  alert('Form submitted. Data saved in local storage (for demonstration only).');
  form.reset(); // Clear the form
});

