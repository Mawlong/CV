import React from 'react'
import {Container, Table} from 'react-bootstrap'

function awards() {
    return (
        <Container id="awards">
            <Table responsive bordered size="sm"> 
                <thead className="headingBackground">
                    <th>
                        Awards
                    </th>
                </thead>

                <tbody align="left">

                    <tr>
                        <td>- <b>Award for Academic Excellence 2016</b>, CBSE Issued by: New Colony Welfare Association.</td>
                    </tr>

                    <tr>
                        <td>- <b>Award for Academic Excellence 2014</b>, ICSE Issued by: New Colony Welfare Association.</td>
                    </tr>
                    
                    <tr>
                        <td>- <b>Edmundian of the Year 2013</b> Issued by: St. Edmund’s School, Shillong.</td>
                    </tr>

                </tbody>
            </Table>
        </Container>
    )
}

export default awards
