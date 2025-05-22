document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle-button');
    const bodyElement = document.body;

    // Function to apply theme and update button text
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            bodyElement.classList.add('dark-mode');
            themeToggleButton.textContent = 'Switch to Day Mode';
        } else {
            bodyElement.classList.remove('dark-mode');
            themeToggleButton.textContent = 'Switch to Night Mode';
        }
    };

    // On page load, check localStorage for saved theme preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        applyTheme(currentTheme);
    } else {
        // Default to light mode if no preference is stored
        applyTheme('light');
    }

    // Add click event listener to the theme toggle button
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            bodyElement.classList.toggle('dark-mode');
            let newTheme = 'light';
            if (bodyElement.classList.contains('dark-mode')) {
                newTheme = 'dark';
            }
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme);
        });
    }
});
