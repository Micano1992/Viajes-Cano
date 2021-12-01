import { React, useState, useEffect } from 'react'
import { ItemDetalle } from '../ItemDetalle/ItemDetalle'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router'
import { buscarProductos } from '../helpers/solicitarDatos'


export const ItemDetalleContainer = () => {

    const [paqDetalle, setPaqDetalle] = useState([])
    const [loading, setLoading] = useState()

    const { itemId } = useParams()

    console.log(itemId)

    useEffect(() => {

        setLoading(true)

        buscarProductos()
            .then(resp => {
                setPaqDetalle(resp.find(paq => paq.id === Number(itemId)))

            })

            .finally(() =>
                setLoading(false))

    }, [itemId])



    return (
        <div className="container my-3">
            {
                loading
                    ? <h2> <Spinner animation="border" /> </h2>
                    : paqDetalle
                        ? <ItemDetalle paquete={paqDetalle}></ItemDetalle>
                        : <h3> No existe el paquete</h3>

            }

        </div>
    )

}

