export const WeatherForm = ({ ciudad, setCiudad, onSubmit, disabled }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        if(ciudad.length > 0) onSubmit()
    }

    return (
        <form onSubmit={handleSubmit} className="animate-fade-in">
            <div className="flex gap-2">
                <input
                    type="text"
                    placeholder="Buscar ciudad..."
                    value={ciudad}
                    onChange={(e) => setCiudad(e.target.value)}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-300 
                             dark:border-gray-600 dark:bg-gray-700 dark:text-white
                             focus:ring-2 focus:ring-weather-primary focus:border-transparent
                             transition-all duration-200"
                    disabled={disabled}
                />
                <button
                    type="submit"
                    disabled={disabled}
                    className="px-6 py-2 bg-weather-primary text-white rounded-lg
                             hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed
                             transition-colors duration-200"
                >
                    {disabled ? '⏳' : '🔍'}
                </button>
            </div>
        </form>
    )
}