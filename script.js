// Select the menu bar and navbar elements
const menubar = document.querySelector('#menu-bars');
const mynav = document.querySelector('.navbar');

// Toggle classes on click
menubar.onclick = () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
};

// Google Script URL for form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbwPekCDS7lKzH0Clpm4iFKybk7pgOuf4W2AXrJZXALsXBfz191J1FIyucB32kXUVU6XNA/exec'; // changed 'edit' to 'exec'
const form = document.querySelector('form'); // corrected the form selection

// Add event listener for form submission
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            if (response.ok) {
                alert("Thank you! Your form has been submitted successfully. Our team will contact you soon.");
                window.location.reload();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => console.error('Error:', error.message));
});