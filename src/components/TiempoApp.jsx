import { useWeather } from '../hooks/useWeather'
import { useTheme } from '../hooks/useTheme'
import { WeatherForm } from './WeatherForm'
import { WeatherInfo } from './WeatherInfo'
import { Favoritos } from './Favoritos'
import { Historial } from './Historial'
import { ThemeToggle } from './ThemeToggle'

export const TiempoApp = () => {
    const {
        dataClima,
        ciudad,
        error,
        loading,
        favoritos,
        historial,
        unidadTemp,
        setCiudad,
        fetchClima,
        toggleFavorito,
        cambiarUnidad,
        convertirTemperatura
    } = useWeather()

    const { darkMode, setDarkMode } = useTheme()

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4 py-8 max-w-2xl">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
                        El Tiempo
                    </h1>
                    <div className="flex gap-4">
                        <button
                            onClick={cambiarUnidad}
                            className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-700
                                     text-gray-700 dark:text-gray-300
                                     hover:bg-gray-300 dark:hover:bg-gray-600
                                     transition-colors duration-200"
                        >
                            °{unidadTemp}
                        </button>
                        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
                    </div>
                </div>
                
                <WeatherForm 
                    ciudad={ciudad}
                    setCiudad={setCiudad}
                    onSubmit={fetchClima}
                    disabled={loading}
                />

                {loading && (
                    <div className="text-center my-8 animate-pulse">
                        <span className="text-2xl">⏳</span>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Cargando...</p>
                    </div>
                )}

                {error && (
                    <div className="my-8 p-4 rounded-lg bg-red-100 dark:bg-red-900/30 
                                  text-red-600 dark:text-red-400 text-center animate-fade-in">
                        {error}
                    </div>
                )}
                
                {dataClima && (
                    <WeatherInfo 
                        dataClima={dataClima}
                        unidadTemp={unidadTemp}
                        convertirTemperatura={convertirTemperatura}
                        onToggleFavorito={toggleFavorito}
                        esFavorito={favoritos.includes(dataClima.name)}
                    />
                )}

                <Favoritos 
                    favoritos={favoritos}
                    onCiudadClick={fetchClima}
                />

                <Historial historial={historial} />
            </div>
        </div>
    )
}