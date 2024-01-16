// Attaches an event listener to the form with the ID 'contact-form'
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    alert('Form submitted!'); // Displays an alert when the form is submitted
});

// This event listener waits for the entire content of the webpage to load
document.addEventListener('DOMContentLoaded', function() {

    // Targets the navigation links element with the ID 'nav-links'
    const navLinks = document.getElementById('nav-links');
    
    // Selects all elements with the class 'expand-btn'
    const expandButtons = document.querySelectorAll('.expand-btn');

    // Adds a click event listener to each expand button
    expandButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Finds the closest parent element with the class 'project'
            const project = btn.closest('.project');

            // Toggles the display of the 'more-info' section within the clicked project
            const moreInfo = project.querySelector('.more-info');
            moreInfo.style.display = moreInfo.style.display === 'block' ? 'none' : 'block';

            // Changes the button text depending on whether the more info section is shown or hidden
            btn.textContent = moreInfo.style.display === 'block' ? 'Less Info' : 'More Info';
        });
    });

});
