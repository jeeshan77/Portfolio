// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      // Show a thank you message
      document.getElementById('formMessage').textContent = `Thank you, ${name}! Your message has been sent.`;
      document.getElementById('formMessage').style.color = 'green';
  
      // Reset the form
      e.target.reset();
    } else {
      // Show an error message
      document.getElementById('formMessage').textContent = 'Please fill in all fields.';
      document.getElementById('formMessage').style.color = 'red';
    }
  });
  