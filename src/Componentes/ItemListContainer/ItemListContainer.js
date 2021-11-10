import { Container } from 'react-bootstrap'

export const ItemListContainer = ({ greeting }) => {
    return (
        <div>
            <Container className="my-6">
                <h2> {greeting} </h2>
                <hr />

            </Container>
        </div>
    )
}
