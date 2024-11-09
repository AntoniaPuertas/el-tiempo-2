export const WeatherInfo = ({ 
    dataClima, 
    unidadTemp, 
    convertirTemperatura,
    onToggleFavorito,
    esFavorito 
}) => {
    if (!dataClima) return null

    const temperatura = convertirTemperatura(dataClima.main.temp)
    const sensacionTermica = convertirTemperatura(dataClima.main.feels_like)

    return (
        <div className="animate-slide-up mt-6 p-6 rounded-xl bg-white dark:bg-gray-800 
                      shadow-lg transform hover:scale-[1.02] transition-all duration-300">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {dataClima.name}
                </h2>
                <button
                    onClick={() => onToggleFavorito(dataClima.name)}
                    className="text-2xl hover:transform hover:scale-110 transition-transform duration-200"
                    aria-label={esFavorito ? 'Eliminar de favoritos' : 'Añadir a favoritos'}
                >
                    {esFavorito ? '⭐' : '☆'}
                </button>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-6">
                <div className="text-center">
                    <p className="text-4xl font-bold text-weather-primary dark:text-blue-400">
                        {temperatura}°{unidadTemp}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                        Sensación: {sensacionTermica}°{unidadTemp}
                    </p>
                </div>
                
                <div className="text-center">
                    <img 
                        src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
                        alt={dataClima.weather[0].description}
                        className="mx-auto transform hover:scale-110 transition-transform duration-200"
                    />
                    <p className="capitalize text-gray-700 dark:text-gray-300">
                        {dataClima.weather[0].description}
                    </p>
                </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <InfoItem icon="💧" label="Humedad" value={`${dataClima.main.humidity}%`} />
                <InfoItem icon="🌡️" label="Presión" value={`${dataClima.main.pressure} hPa`} />
                <InfoItem icon="💨" label="Viento" value={`${(dataClima.wind.speed * 3.6).toFixed(1)} km/h`} />
                <InfoItem icon="👁️" label="Visibilidad" value={`${(dataClima.visibility / 1000).toFixed(1)} km`} />
            </div>
        </div>
    )
}

const InfoItem = ({ icon, label, value }) => (
    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
        <span className="text-lg">{icon}</span>
        <span>{label}:</span>
        <span className="font-medium">{value}</span>
    </div>
)