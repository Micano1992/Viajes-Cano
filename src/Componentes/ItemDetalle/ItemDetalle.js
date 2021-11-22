import React from 'react'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button'



export const ItemDetalle = ({ paquete }) => {

    const navigate = useNavigate()

    const hadleVolver = () => {
        navigate(-1)
    }

    const hadleVolverInicio = () => {
        navigate('/')
    }

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

                    <Button style={{ margin: '10px' }} onClick={hadleVolver} variant="secondary" size="sm">Volver atras</Button>
                    <Button style={{ margin: '10px' }} onClick={hadleVolverInicio} variant="secondary" size="sm">Volver inicio</Button>

                </Card.Body>
            </Card>
        </div >
    )
}
