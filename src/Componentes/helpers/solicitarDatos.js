import { productos } from "../Data/data"

export const buscarProductos = () => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(productos)
        }, 2000)
    }
    )
}