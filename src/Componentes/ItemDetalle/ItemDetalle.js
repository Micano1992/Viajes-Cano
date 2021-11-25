import { React, useState } from 'react'
import Card from 'react-bootstrap/Card'
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button'
import { ItemCount } from "../ItemCount/ItemCount"




export const ItemDetalle = ({ paquete }) => {

    const navigate = useNavigate()
    const [cantidad, setCantidad] = useState(paquete.stockInicial)
    const [itemAgregado, setItemAgregado] = useState(false)

    const hadleVolver = () => {
        navigate(-1)
    }

    const hadleVolverInicio = () => {
        navigate('/')
    }

    const hadleIrCarrito = () => {

        navigate('/cart')
    }

    const onAdd = () => {
        if (cantidad > 0) {
            setItemAgregado(true);
        }
        else {
            alert("No indicó cantidad de paquetes")
        }

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

                    {!itemAgregado
                        ? <ItemCount
                            item={paquete}
                            setCantidad={setCantidad}
                            cantidad={cantidad}
                            onAdd={onAdd}>
                        </ItemCount>
                        : <>
                            <Card.Text>Cantidad agregada: {cantidad} </Card.Text>
                            <Button style={{ margin: '10px' }} onClick={hadleIrCarrito} variant="secondary" size="sm">Finalizar compra</Button>
                            <br />
                        </>
                    }

                    <Button style={{ margin: '10px' }} onClick={hadleVolver} variant="secondary" size="sm">Volver atras</Button>
                    <Button style={{ margin: '10px' }} onClick={hadleVolverInicio} variant="secondary" size="sm">Volver inicio</Button>

                </Card.Body>
            </Card>
        </div >
    )
}
