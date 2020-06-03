import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
    
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" bg = "dark" variant = "dark">
            <Navbar.Brand href="/resume">Tasos Pardalis</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Item><Nav.Link href="/resume">CV</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="https://www.tasospardalis.com/blog/" target="_blank">Blog</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)