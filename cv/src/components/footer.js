import React from 'react'
import {Row,Col,Container} from 'react-bootstrap'

function footer() {
    return (
        <div className="footer text-white" style={{position:"fixed", bottom:"0", width:"100%"}}>
            <Container className= "mt-5" fluid={true}>
                <Row className='justify-content-left max-auto py-1' style={{backgroundColor:"#2680d9"}}>
                    <Col className = 'p-0' md = {3} sm ={12}>
                        <p>
                            Email:
                        </p>
                    </Col>

                    <Col className = 'p-0' md = {3} sm ={12}>
                        <p>
                            <a href="mailto:b16cs004@nitm.ac.in">b16cs004@nitm.ac.in</a>
                        </p>
                    </Col>
                </Row>

                <Row className='ustify-content-left max-auto py-1' style={{backgroundColor:"#2680d9"}}>
                    <Col className = 'p-0' md = {3} sm ={12}>
                        <p>
                            Phone number:
                        </p>
                    </Col>

                    <Col className = 'p-0' md = {3} sm ={12}>
                        <p>
                            <a href="tel=+917308188239">+91 - 7308188239</a>
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-left max-auto py-1" style={{backgroundColor:"#174d82"}}>
                    <Col className = 'p-0' md = {3} sm ={12}>
                        <div>
                            <h5 className="justify-content-left"> Address </h5>
                            <span>
                                House no 68, Lower New Colony, Laitumkhrah, Shillong - 793003, Meghalaya, India.
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    
            
        
    )
}

export default footer
