import { useState, useEffect } from 'react'
import { WEATHER_CONFIG } from '../config/constants'

export const useWeather = () => {
    const [dataClima, setDataClima] = useState(null)
    const [ciudad, setCiudad] = useState('')
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [favoritos, setFavoritos] = useState(() => {
        const saved = localStorage.getItem('favoritos')
        return saved ? JSON.parse(saved) : []
    })
    const [historial, setHistorial] = useState(() => {
        const saved = localStorage.getItem('historial')
        return saved ? JSON.parse(saved) : []
    })
    const [unidadTemp, setUnidadTemp] = useState('C') // C para Celsius, F para Fahrenheit

    useEffect(() => {
        localStorage.setItem('favoritos', JSON.stringify(favoritos))
    }, [favoritos])

    useEffect(() => {
        localStorage.setItem('historial', JSON.stringify(historial))
    }, [historial])

    const convertirTemperatura = (kelvin) => {
        if (unidadTemp === 'C') {
            return (kelvin - WEATHER_CONFIG.diffKelvin).toFixed(1)
        }
        return (((kelvin - WEATHER_CONFIG.diffKelvin) * 9/5) + 32).toFixed(1)
    }

    const fetchClima = async (ciudadBuscar = ciudad) => {
        setLoading(true)
        setError(null)
        try {
            const response = await fetch(
                `${WEATHER_CONFIG.urlBase}?q=${ciudadBuscar}&appid=${WEATHER_CONFIG.API_KEY}&lang=es`
            )
            const data = await response.json()
            
            if (data.cod === '404') {
                setError('Ciudad no encontrada')
                setDataClima(null)
                return
            }
            
            setDataClima(data)
            
            // Añadir al historial
            const nuevaBusqueda = {
                ciudad: data.name,
                fecha: new Date().toLocaleString(),
                temp: convertirTemperatura(data.main.temp)
            }
            setHistorial(prev => [nuevaBusqueda, ...prev].slice(0, 5))
            
        } catch(error) {
            setError('Error al obtener el clima')
            console.error('Error: ', error)
        } finally {
            setLoading(false)
        }
    }

    const toggleFavorito = (ciudad) => {
        setFavoritos(prev => {
            if (prev.includes(ciudad)) {
                return prev.filter(c => c !== ciudad)
            }
            return [...prev, ciudad]
        })
    }

    const cambiarUnidad = () => {
        setUnidadTemp(prev => prev === 'C' ? 'F' : 'C')
    }

    return {
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
    }
}