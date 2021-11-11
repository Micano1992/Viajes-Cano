import { Container } from 'react-bootstrap'
import { Contador } from '../ItemCount/ItemCount'


export const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <Container className="my-6">
                <h2> {greeting} </h2>
                <hr />
                <Contador stock="5" initial="2"></Contador>

            </Container>
        </div>
    )
}
