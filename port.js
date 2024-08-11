document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseMessage = document.getElementById('responseMessage');

    if (name && email && message) {
        // Simulate form submission (for demo purposes)
        responseMessage.textContent = 'Thank you for your message! We will get back to you soon.';
        responseMessage.style.color = '#5bc0de';

        // Here you would typically send form data to the server
        // For example, using fetch or XMLHttpRequest

        // Clear the form
        document.getElementById('contactForm').reset();
    } else {
        responseMessage.textContent = 'Please fill out all fields.';
        responseMessage.style.color = '#d9534f';
    }
});