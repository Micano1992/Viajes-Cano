import React, { useState } from "react"
import Button from 'react-bootstrap/Button'


export const ItemCount = ({ item }) => {

    const [counter, setCounter] = useState(item.stockInicial)



    const handleClickIncrementar = () => {

        if (counter > item.stock - 1) {

            alert("No hay mas stock")

        }
        else {
            setCounter(counter + 1)
        }

    }

    const handleClickDecrementar = () => {

        if (counter === 0) {

        }
        else {
            setCounter(counter - 1)
        }
    }

    const clickComprar = () => {

        if (counter > 0) {

            alert("Se realiza la compra de " + counter + " productos")
        }

    }


    return (
        < div >


            <h3> {counter} </h3>
            <div>
                <Button style={{ margin: '10px' }} onClick={handleClickDecrementar} variant="secondary" size="sm">-</Button>
                <Button style={{ margin: '10px' }} onClick={handleClickIncrementar} variant="secondary" size="sm">+</Button>
            </div>
            <div>
                <Button onClick={clickComprar} variant="info">Comprar</Button>{' '}
            </div>
        </div >
    )
}