export const Historial = ({ historial }) => {
    if (historial.length === 0) return null

    return (
        <div className="mt-6 animate-fade-in">
            <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                Búsquedas Recientes
            </h3>
            <div className="space-y-2">
                {historial.map((busqueda, index) => (
                    <div 
                        key={index}
                        className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50
                                 text-gray-600 dark:text-gray-300
                                 transform hover:scale-[1.01] transition-transform duration-200"
                    >
                        <span className="font-medium">{busqueda.ciudad}</span>
                        <span className="mx-2">•</span>
                        <span>{busqueda.temp}°</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                            ({busqueda.fecha})
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}