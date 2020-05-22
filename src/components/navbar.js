import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'

function navbar() {
    return (
        <div className="sticky-top">
            <Navbar className=" justify-content-center mx-auto navbar-dark px-2 d-none d-lg-block" style={{backgroundColor:"#2680d9"}}>
                <Navbar.Brand href="/">Leon Patrick Mawlong CV</Navbar.Brand>
            </Navbar>

            <Navbar className="navbar-dark px-2 d-lg-none" style={{backgroundColor:"#2680d9"}} collapseOnSelect expand='lg'>
                
                <Navbar.Brand  align="left" href="/">Leon Patrick Mawlong CV</Navbar.Brand>
                
                <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
                <Navbar.Collapse id="navbar-toggle">
                    <Nav className="ml-auto" align="left">
                        <Nav.Item>
                            <Nav.Link eventKey='1' href="#education">
                                Education
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey='1' href="#te">
                                Technical Expertise
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey='1' href="#internships">
                                Internships
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey='1' href="#por">
                                Positions of Responsibility
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey='1' href="#projects">
                                Projects
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey='1' href="#eca">
                                Extra Curricular Activities
                            </Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey='1' href="#awards">
                                Awards
                            </Nav.Link>
                        </Nav.Item>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>

        </div>
            
        
    )
}

export default navbar