import React from "react"
import Card from 'react-bootstrap/Card'
import './Item.css'
import { ItemCount } from "../ItemCount/ItemCount"


export const Item = ({ item }) => {


    return (
        < div className='PosicionCard'>
            <Card style={{ width: '15rem' }} >
                <Card.Img variant="top" href="https://placeholder.com" src="https://via.placeholder.com/120" />
                <Card.Body>
                    <Card.Title> {item.name}</Card.Title>
                    <Card.Text>
                        {item.descripcion}
                    </Card.Text>

                    <ItemCount item={item}></ItemCount>
                </Card.Body>
            </Card>

        </div >
    )
}