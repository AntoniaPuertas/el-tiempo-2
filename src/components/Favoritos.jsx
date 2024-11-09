export const Favoritos = ({ favoritos, onCiudadClick }) => {
    if (favoritos.length === 0) return null

    return (
        <div className="mt-6 animate-fade-in">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                Ciudades Favoritas
            </h3>
            <div className="flex flex-wrap gap-2">
                {favoritos.map(ciudad => (
                    <button
                        key={ciudad}
                        onClick={() => onCiudadClick(ciudad)}
                        className="px-4 py-2 rounded-full bg-weather-primary/10 text-weather-primary
                                 dark:bg-blue-500/20 dark:text-blue-300
                                 hover:bg-weather-primary/20 dark:hover:bg-blue-500/30
                                 transition-all duration-200 transform hover:scale-105"
                    >
                        {ciudad}
                    </button>
                ))}
            </div>
        </div>
    )
}