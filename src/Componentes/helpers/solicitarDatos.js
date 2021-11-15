import { productos } from "../Item/Item"

export const buscarProductos = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(productos)
        }, 5000)
    }
    )
}