import React from 'react'
import {Container, Table} from 'react-bootstrap'

function education() {
    return (
        <Container className="mt-3" id="education">
            <Table responsive bordered size="sm">

                <thead className="headingBackground">
                    <th colSpan="4">
                        Education
                    </th>
                </thead>

                <thead>

                    <th>Programme</th>
                    <th>Institution</th>
                    <th>% / CGPA</th>
                    <th>Year</th>

                </thead>

                <tbody>

                    <tr>
                        <td>B.Tech</td>
                        <td><a href="http://nitmeghalaya.in/nitmeghalaya/" target="blank">NIT Meghalaya</a></td>
                        <td>8.01</td>
                        <td>2020</td>
                    </tr>

                    <tr>
                        <td>XII (CBSE)</td>
                        <td><a href="http://bsfshshillong.org.in/" target="blank">BSF, Senior Seconday School, Shillong</a></td>
                        <td>80.00</td>
                        <td>2016</td>
                    </tr>
                    
                    <tr>
                        <td>X (ICSE)</td>
                        <td><a href="http://www.ses.ac.in/" target="blank">St. Edmund's School, Shillong</a></td>
                        <td>89.90</td>
                        <td>2014</td>
                    </tr>

                </tbody>

            </Table>

        </Container>
    )
}

export default education
