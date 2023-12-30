document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');

});
document.addEventListener('DOMContentLoaded', function() {

    const navLinks = document.getElementById('nav-links');
    const expandButtons = document.querySelectorAll('.expand-btn');

    // Add a click event listener to each button
    expandButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const project = btn.closest('.project');
            // Toggle the more info button of the correct project
            const moreInfo = project.querySelector('.more-info');
            moreInfo.style.display = moreInfo.style.display === 'block' ? 'none' : 'block';
            // Change button text depending on state
            btn.textContent = moreInfo.style.display === 'block' ? 'Less Info' : 'More Info';
        });
    });

});
