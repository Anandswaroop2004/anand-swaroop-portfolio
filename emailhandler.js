document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Log the form data
    const formData = new FormData(this);
    for (let [key, value] of formData.entries()) {
      // console.log(formData);
      
    }
  
    // Send the form data using EmailJS
    emailjs.sendForm('service_e4ga6ga', 'template_zut6zzl', this)
      .then(function(response) {
        alert('Message sent successfully!');
        document.getElementById('contactForm').reset(); // Clear the form
      }, function(error) {
        alert('Failed to send message. Please try again.');
      });
  });