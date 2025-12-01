document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            lightIcon.classList.remove('hidden');
            darkIcon.classList.add('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            lightIcon.classList.add('hidden');
            darkIcon.classList.remove('hidden');
        }
    };

    // Check for saved theme in localStorage or user's OS preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme(prefersDark ? 'dark' : 'light');
    }

    // Add click event listener to the toggle button
    themeToggleBtn.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(isDark ? 'light' : 'dark');
    });
});
