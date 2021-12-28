import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { CardWidget } from '../CardWiget/CardWidget'
import { Link } from 'react-router-dom'


export const BarraMenu = () => {

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" style={{ color: 'inherit', textDecoration: 'inherit' }}>VIAJES-CANO </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="paquetes/Patagonia" style={{ color: 'inherit', textDecoration: 'inherit' }}>Patagonia </Nav.Link>
                        <Nav.Link as={Link} to="paquetes/Norte" style={{ color: 'inherit', textDecoration: 'inherit' }}>Norte </Nav.Link>
                        <Nav.Link as={Link} to="paquetes/CostaArgentina" style={{ color: 'inherit', textDecoration: 'inherit' }}>Costa argentina </Nav.Link>
                    </Nav>
                    <Link to="/cart"> <CardWidget /> </Link>
                </Container >
            </Navbar >

        </>
    )
}
