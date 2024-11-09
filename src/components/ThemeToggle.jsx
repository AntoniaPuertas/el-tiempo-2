export const ThemeToggle = ({ darkMode, setDarkMode }) => {
    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
            aria-label="Toggle theme"
        >
            {darkMode ? '🌙' : '☀️'}
        </button>
    )
}