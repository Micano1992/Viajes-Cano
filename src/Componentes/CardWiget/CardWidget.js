import React, { useContext } from 'react'
import { GiCommercialAirplane } from "react-icons/gi";
import './CardWidget.css'
import { CartContext } from '../../Contextos/CartContext'


export const CardWidget = () => {

    const { totalCantidadCarrito } = useContext(CartContext)

    if (totalCantidadCarrito() > 0) {

        return (
            <>
                <GiCommercialAirplane className="CardWidgetAltura" />
                <span> {totalCantidadCarrito()} </span>
            </>
        )
    }

    return ""
}