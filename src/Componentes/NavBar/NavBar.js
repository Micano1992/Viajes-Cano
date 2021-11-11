import { Container } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap'
import { CardWidget } from '../CardWiget/CardWidget'


export const BarraMenu = () => {

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">VIAJES-CANO</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#Mendoza">Mendoza</Nav.Link>
                        <Nav.Link href="#TierraDelFuego">Tierra del fuego</Nav.Link>
                        <Nav.Link href="#Salta">Salta</Nav.Link>
                        <Nav.Link href="#Jujuy">Jujuy</Nav.Link>
                        <Nav.Link href="#Chubut">Chubut</Nav.Link>
                    </Nav>
                    <CardWidget />
                </Container>
            </Navbar>

        </>
    )
}

//export default NavBar 
