import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";


function NavbarComponent(props) {    
    let navigate = useNavigate();

    function handleLogout() {
        props.updateToken("");
        props.updateRefreshToken("");
        localStorage.removeItem("expiresIn");
        localStorage.removeItem("state");
        navigate("/");
    }

    function handleNavigate(path) {
        navigate(path);
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand onClick={() => handleNavigate("/")}>Spotify Me</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link onClick={() => handleNavigate("/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleNavigate("/toptracks")}>Top tracks</Nav.Link>
                    <Nav.Link onClick={() => handleNavigate("/topartists")}>Top Artistas</Nav.Link>
                    <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;