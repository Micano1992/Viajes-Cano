import React, { useState } from "react"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './ItemCount.css'


export const Contador = ({ stock, initial }) => {

    const [counter, setCounter] = useState(initial)



    const handleClickIncrementar = () => {

        if (counter > stock - 1) {

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
        < div className='PosicionCard'>
            <Card style={{ width: '15rem' }} >
                <Card.Img variant="top" href="https://placeholder.com" src="https://via.placeholder.com/120" />
                <Card.Body>
                    <Card.Title>Titulo del producto</Card.Title>
                    <Card.Text>
                        Descripcion del producto
                    </Card.Text>

                    <h3> {counter} </h3>
                    <div>
                        <Button style={{ margin: '10px' }} onClick={handleClickDecrementar} variant="secondary" size="sm">-</Button>
                        <Button style={{ margin: '10px' }} onClick={handleClickIncrementar} variant="secondary" size="sm">+</Button>
                    </div>

                    <Button onClick={clickComprar} variant="info">Comprar</Button>{' '}
                </Card.Body>
            </Card>

        </div >
    )
}