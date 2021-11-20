import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { ItemList } from '../ItemList/ItemList'
import { buscarProductos } from '../helpers/solicitarDatos'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router'


export const ItemListContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(false)
    const [productosCargados, setProductosCargados] = useState([])

    const { catId } = useParams()

    console.log(catId)

    useEffect(() => {
        setLoading(true)

        buscarProductos()
            .then((resp) => {

                if (!catId) {
                    setProductosCargados(resp)
                }
                else {
                    setProductosCargados(resp.filter(prod => prod.categoria === catId))
                }
            })
            .catch((error) => {

                console.log(error)
            })
            .finally(() => {
                setLoading(false)

                console.log("Finalizo la busqueda de productos")
            })
    }, [catId])


    return (
        <div>
            <Container className="my-6">
                <h2> {greeting} </h2>
                <hr />

                <div>
                    {
                        loading
                            ? <h2> <Spinner animation="border" /> </h2>
                            : <>
                                <h2> Productos cargados </h2>

                                <ItemList productos={productosCargados}></ItemList>
                            </>
                    }
                </div>

            </Container>
        </div>
    )
}
