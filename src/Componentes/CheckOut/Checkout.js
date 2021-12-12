import React, { useContext, useState } from 'react'
import { CartContext } from '../../Contextos/CartContext'
import './Checkout.css'
import { Navigate } from 'react-router'
import { collection, Timestamp, addDoc } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'
import Swal from 'sweetalert2'


export const Checkout = () => {

    const { carrito, totalCarrito } = useContext(CartContext)

    console.log(carrito)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        emailConfirm: '',
    })

    const handleEnviar = (e) => {

        e.preventDefault()

        const orden = {
            buyer: { ...values },
            paquetes: carrito,
            total: totalCarrito(),
            fecha: Timestamp.fromDate(new Date())
        }

        const orderRef = collection(db, "ordenes")

        addDoc(orderRef, orden)
            .then((res) => {
                console.log(res.id)
                Swal.fire('Se generó el id de orden: ' + res.id)
                    .then((res) => {
                        window.location.href = "/";
                    })
            })

        console.log(orden)


    }

    const handleInputChange = (e) => {


        setValues({
            ...values, [e.target.name]: e.target.value
        })

    }

    return (

        <>
            {carrito.length === 0
                ? <Navigate to="/" />
                :
                <div className="container my-5">
                    <h2>Resumen de compra</h2>
                    <hr />

                    <form onSubmit={handleEnviar}>
                        <input
                            onChange={handleInputChange}
                            name="nombre"
                            value={values.nombre}
                            className="form-control my-2"
                            type="text"
                            placeholder="nombre"
                        />
                        {values.nombre.length < 4 && <small>Nombre inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="apellido"
                            value={values.apellido}
                            className="form-control my-2"
                            type="text"
                            placeholder="apellido"
                        />
                        {values.apellido.length < 4 && <small>Apellido inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="telefono"
                            value={values.telefono}
                            className="form-control my-2"
                            type="number"
                            placeholder="telefono"
                        />
                        {values.telefono.length < 4 && <small>Telefono inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="email"
                            value={values.email}
                            className="form-control my-2"
                            type="email"
                            placeholder="email"
                        />
                        {values.email.length < 4 && <small>Email inválido</small>}

                        <input
                            onChange={handleInputChange}
                            name="emailConfirm"
                            value={values.emailConfirm}
                            className="form-control my-2"
                            type="email"
                            placeholder="Repita email"
                        />
                        {values.emailConfirm !== values.email && <small>Email no coincide</small>}

                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </form>
                </div>
            }
        </>
    )
}
