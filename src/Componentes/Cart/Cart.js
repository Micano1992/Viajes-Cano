import React, { useContext } from 'react'
import { CartContext } from '../../Contextos/CartContext'
import Card from 'react-bootstrap/Card'



export const Cart = ({ paquete }) => {

    const { quitarPaquete } = useContext(CartContext)


    return (
        <div >
            < Card border="primary" style={{ width: '18rem', margin: '4rem' }}  >
                <Card.Header>{paquete.name}</Card.Header>
                <Card.Body>
                    <Card.Title>Precio: {paquete.price}</Card.Title>
                    <Card.Title>Cantidad: {paquete.cantidad}</Card.Title>
                    <Card.Title>Total: {Number(paquete.cantidad) * Number(paquete.price)}</Card.Title>

                    <button className='btn btn-secondary' onClick={() => { quitarPaquete(paquete) }}>Quitar paquete</button>
                </Card.Body>
            </Card >

        </div >
    )
}
