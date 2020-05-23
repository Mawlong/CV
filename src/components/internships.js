import React from 'react'
import {Container, Table} from 'react-bootstrap'

function internships() {
    return (
        <Container id="internships">
        <Table responsive size="sm"> 
            <thead className="headingBackground">
                <th colSpan="4">
                    Internships
                </th>
            </thead>
            <tbody>
                {/* Razorpay Internship */}
                <tr>
                    <td colSpan="4" style={{textAlign:"left", fontWeight:"bold", border:"none"}}>
                        <a href="https://razorpay.com/" target="blank">Razorpay Pvt.Ltd</a>, Bangalore: Operations - Partnerships <span style={{float:"right"}}>June 2019 - August 2019</span>
                    </td>
                </tr>

                <tr>
                    <td  colSpan="3" style={{textAlign:"left", border:"none"}} >
                        - Contributed towards <b>~600%</b> improvement in the sales funnel efficiency by working on process-driven growth through automation, introducing Kanban methods, reviewing and updating cross-team workflows thereby reducing turn-around-times by <b>~30%</b>.
                    </td>
                </tr>

                <tr>
                    <td  colSpan="3" style={{textAlign:"left", border:"none"}}>
                        - Ideated and led the development of a consolidated client information dashboard to aid the Sales team and also track KPIs.
                    </td>
                </tr>

                {/* Truweight Internship */}

                <tr>
                    <td  colSpan="4" style={{textAlign:"left", fontWeight:"bold"}}>
                        <a href="https://truweight.in/" target="blank">Truweight Wellness Pvt. Ltd.</a>, Bangalore <span style={{float:"right"}}>June 2018 - August 2018</span>
                    </td>

                </tr>

                <tr>
                    <td  colSpan="3" style={{textAlign:"left", border:"none"}} >
                        - Search Engine Optimization: Contributed towards <b>246.36 %</b> increase in organic traffic to the website.
                    </td>
                </tr>

                <tr>
                    <td colSpan="3" style={{textAlign:"left", border:"none"}}>
                        - YouTube Channel Manager: Responsible for a <b>500%</b> increase in Video Production/month resulting in a <b>196.18%</b>
                        increase in 'Watch Time' (primary metric).
                    </td>
                </tr>

                <tr>
                    <td  colSpan="3" style={{textAlign:"left", border:"none"}}>
                        - Talent Acquisition: hired the second batch of Interns for various roles in the Digital Marketing Department.
                    </td>
                </tr>


                {/* InTown Solutions Internship */}
                <tr>
                    <td colSpan="4" style={{textAlign:"left", fontWeight:"bold"}}>
                        <a href="https://intown-solutions.com/" target="blank">InTown Solutions</a>InTown Solutions, Shillong, WebDeveloper <span style={{float:"right"}}>June 2017 - August 2017</span>
                    </td>
                </tr>

                <tr>
                    <td  colSpan="3" style={{textAlign:"left", border:"none"}} >
                        - Front End Web Development and UI Design.
                    </td>
                </tr>

                <tr>
                    <td  colSpan="3" style={{textAlign:"left", border:"none"}}>
                        - Designed the login UI mockup designed to cater to the commuting needs of <b>~3 million</b> people using Adobe XD.
                    </td>
                </tr>

                 {/* Nazareth Hospital Internship */}
                 <tr>
                    <td colSpan="4" style={{textAlign:"left", fontWeight:"bold"}}>
                        <a href="http://www.nazarethshillong.in/" target="blank">Nazareth Hospital</a>, Shillong, Research Intern <span style={{float:"right"}}>May 2014 - June 2014</span>
                    </td>
                </tr>

                

                <tr>
                    <td  colSpan="3" style={{textAlign:"left", border:"none"}}>
                        - Research on the automation of the Microbiology Laboratory and the Equipment used.
                    </td>
                </tr>
            </tbody>
        </Table>
        
    </Container>
    )
}

export default internships
