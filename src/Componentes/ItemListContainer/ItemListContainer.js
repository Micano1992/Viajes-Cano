import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { ItemList } from '../ItemList/ItemList'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'


export const ItemListContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(false)
    const [productosCargados, setProductosCargados] = useState([])

    const { catId } = useParams()

    console.log(catId)

    useEffect(() => {
        setLoading(true)

        const paquetesRef = collection(db, 'Paquetes')

        const paquetesQuery = catId ? query(paquetesRef, where('categoria', '==', catId)) : paquetesRef

        getDocs(paquetesQuery)
            .then((res) => {
                const items = res.docs.map((doc) => (
                    {
                        id: doc.id,
                        ...doc.data()
                    }))
                console.log(items)

                setProductosCargados(items)

            })
            .finally(() => {
                setLoading(false)
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
