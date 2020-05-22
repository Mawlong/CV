import React from 'react'
import {Container, Table} from 'react-bootstrap'

function projects() {
    return (
        <Container id="projects">
            <Table responsive bordered size="sm"> 
                <thead className="headingBackground">
                    <th>
                        Projects
                    </th>
                </thead>

                <tbody align="left">

                    <tr>
                        <td>- B.Tech Project: Electric Load Forecasting using ML techniques with data provided by Power System Operation Corporation (POSOCO).</td>
                    </tr>

                    <tr>
                        <td>- Designed and Coded a website for TheWok and TheWok La Chaumiere using Next.js with a Headless CMS (Prismic) hosted on Vercel</td>
                    </tr>
                    
                    <tr>
                        <td>- Developed an Android application using singleton design pattern to cater to local lingual translations aimed towards tourism and education.</td>
                    </tr>
                    <tr>
                        <td>- IoT smoke and fire detector.</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
        
    )
}

export default projects
