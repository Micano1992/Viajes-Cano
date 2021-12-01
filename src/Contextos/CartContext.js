import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])

    const agregarPaquete = (paquete) => {

        setCarrito([...carrito, paquete])
    }

    const quitarPaquete = (paquete) => {
        setCarrito(carrito.filter(paq => paq.id !== paquete.id))
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }

    const totalCarrito = () => {
        return carrito.reduce((acc, paq) => acc + paq.price * paq.cantidad, 0)
    }

    const totalCantidadCarrito = () => {
        return carrito.reduce((acc, paq) => acc + paq.cantidad, 0)
    }

    const existePaquete = (paquete) => {
        return carrito.some(paq => paq.id === paquete.id)
    }

    return (
        <CartContext.Provider value={{
            carrito,
            agregarPaquete,
            quitarPaquete,
            existePaquete,
            vaciarCarrito,
            totalCantidadCarrito,
            totalCarrito
        }}>
            {children}

        </CartContext.Provider>

    )


}
