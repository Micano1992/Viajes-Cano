import { React, useState, useEffect } from 'react'
import { ItemDetalle } from '../ItemDetalle/ItemDetalle'
import Spinner from 'react-bootstrap/Spinner'
import { useParams } from 'react-router'
import { doc, getDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'


export const ItemDetalleContainer = () => {

    const [paqDetalle, setPaqDetalle] = useState()
    const [loading, setLoading] = useState()

    const { itemId } = useParams()

    console.log(itemId)

    useEffect(() => {

        setLoading(true)

        const docRef = doc(db, 'Paquetes', itemId)
        getDoc(docRef)
            .then((paq) => {
                setPaqDetalle({
                    id: paq.id,
                    ...paq.data()
                })
            })
            .finally(() => {

                setLoading(false)
            }
            )


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

