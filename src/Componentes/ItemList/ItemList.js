import { Item } from '../Item/Item'

export const ItemList = ({ productos }) => {

    return (
        <>
            {
                productos.map((prod) => (

                    <Item key={prod.id} item={prod} ></Item>
                ))
            }

        </>
    )
}
