import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { CartContext } from '../../Contextos/CartContext'
import { Cart } from '../Cart/Cart'
import './CartView.css'

export const CartView = () => {

    const { carrito, vaciarCarrito, totalCarrito } = useContext(CartContext)

    console.log(totalCarrito)

    return (
        <div >
            <h2>Carrito</h2>

            <article className='carrito'>

                {carrito.map((paq) =>

                    <Cart paquete={paq} ></Cart>
                )
                }

            </article>

            <h3> Total: {totalCarrito()} </h3>

            <hr />

            <Button className='btn btn-warning' onClick={vaciarCarrito} > Vaciar carrito </Button>
        </div>
    )
}
