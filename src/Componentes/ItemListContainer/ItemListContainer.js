import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
// import { Producto } from '../ItemCount/ItemCount'
import { ItemList } from '../ItemList/ItemList'
import { buscarProductos } from '../helpers/solicitarDatos'
import Spinner from 'react-bootstrap/Spinner'


export const ItemListContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(false)
    const [productosCargados, setProductosCargados] = useState([])


    useEffect(() => {
        setLoading(true)

        buscarProductos()
            .then((resp) => {
                setProductosCargados(resp)
            })
            .catch((error) => {

                console.log(error)
            })
            .finally(() => {
                setLoading(false)

                console.log("Finalizo la busqueda de productos")
            })
    }, [])


    return (
        <div>
            <Container className="my-6">
                <h2> {greeting} </h2>
                <hr />

                <div>
                    {
                        loading ? <h2> <Spinner animation="border" /> </h2> : <>
                            <h2> Productos cargados </h2>

                            <ItemList productos={productosCargados}></ItemList>
                        </>
                    }
                </div>

            </Container>
        </div>
    )
}
