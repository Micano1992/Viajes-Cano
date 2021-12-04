import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button'
import { CartContext } from '../../Contextos/CartContext'
import { Cart } from '../Cart/Cart'
import './CartView.css'
import { Link } from 'react-router-dom'


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

            {(totalCarrito() === 0) ?
                <> <h2>No hay paquetes agregados</h2>
                    <br />
                    <Link to={'/'} className="btn btn-secondary"> Ir al buscador </Link>
                </>
                : <> <h3> Total: {totalCarrito()} </h3>

                    <hr />

                    <Button className='btn btn-warning' onClick={vaciarCarrito} > Vaciar carrito </Button>
                </>
            }
        </div>
    )
}
