document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.btn, .discord-btn');
    const container = document.querySelector('.container');

    // Add fade-in to container
    if (container) {
        container.classList.add('fade-in');
    }

    // Button click animation
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            button.classList.add('btn-clicked');
            setTimeout(() => {
                button.classList.remove('btn-clicked');
            }, 300);
        });
    });
});
