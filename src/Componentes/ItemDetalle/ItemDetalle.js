import React from 'react'
import Card from 'react-bootstrap/Card'


export const ItemDetalle = ({ paquete }) => {

    return (
        < div className='PosicionCard'>
            <Card style={{ width: '50rem' }} >
                <Card.Img variant="top" src={paquete.img} alt={paquete.name} />
                <Card.Body>
                    <Card.Title> {paquete.name}</Card.Title>
                    <Card.Text>
                        {paquete.descripcion}
                    </Card.Text>
                    <Card.Text>Precio: {paquete.price} </Card.Text>
                    <Card.Text>Categoria: {paquete.categoria} </Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}
