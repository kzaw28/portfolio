import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MainNav() {
  return (
    <>
        <Navbar className="bg-body-tertiary" fixed='top'>
            <Container className='justify-content-center'>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

        <br/>
        <br/>
    </>
  );
}

export default MainNav;