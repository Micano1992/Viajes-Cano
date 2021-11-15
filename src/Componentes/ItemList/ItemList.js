import { ItemCount } from '../ItemCount/ItemCount'

export const ItemList = ({ productos }) => {

    return (
        <>
            {
                productos.map((prod) => (

                    <ItemCount key={prod.id} item={prod} ></ItemCount>
                ))
            }

        </>
    )
}
