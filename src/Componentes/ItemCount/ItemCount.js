import React from "react"
import Button from 'react-bootstrap/Button'


export const ItemCount = ({ item, setCantidad, cantidad, onAdd }) => {



    const handleClickIncrementar = () => {

        if (cantidad > item.stock - 1) {

            alert("No hay mas stock")

        }
        else {
            setCantidad(cantidad + 1)
        }

    }

    const handleClickDecrementar = () => {

        if (cantidad === 0) {

        }
        else {
            setCantidad(cantidad - 1)
        }
    }


    return (
        < div >


            <h3> {cantidad} </h3>
            <div>
                <Button style={{ margin: '10px' }} onClick={handleClickDecrementar} variant="secondary" size="sm">-</Button>
                <Button style={{ margin: '10px' }} onClick={handleClickIncrementar} variant="secondary" size="sm">+</Button>
            </div>
            <div>
                <Button onClick={onAdd} variant="info">Agregar al carrito</Button>{' '}
            </div>
        </div >
    )
}