import React from "react"
import Card from 'react-bootstrap/Card'
import './Item.css'
import { ItemCount } from "../ItemCount/ItemCount"
import { Link } from 'react-router-dom'



export const Item = ({ item }) => {


    return (
        < div className='PosicionCard'>
            <Card style={{ width: '15rem' }} >
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title> {item.name}</Card.Title>
                    <Card.Text>
                        {item.descripcion}
                    </Card.Text>
                    <Link to={`/detalle/${item.id}`} className="btn btn-secondary"> Ver detalle </Link>
                    <ItemCount item={item}></ItemCount>
                </Card.Body>
            </Card>

        </div >
    )
}