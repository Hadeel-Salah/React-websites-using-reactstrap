import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import photo from '../../../../assests/careers-photo.png';
import './jobs.css'
const Jobs = () => {
    return (
        <Container>
            <Row>
                <Col lg="6" md="6">
                    <div className='d-flex algin-items-center mb-5'>
                        <img src={photo} alt='careers' />
                    </div>
                </Col>
                <Col lg="6" md="6">
                    <div className='jobs'>
                        <h1 className="jobs__title fw-bold">
                            Careers at Notion
                        </h1>
                        <p className="w-auto">
                            If every person and business can tailor software to their problems, <br />
                            the world will be better at solving its problems.<br />
                            Our mission is to make that a ubiquitous reality.
                        </p>
                    </div>

                    <div className=" jobs__locations mb-5">
                        <h5> Our Locations are currently:</h5>
                        <h1 className='d-flex align-items-center gap-1 mb-5'>
                            <i class="ri-home-wifi-line"></i>Remote
                        </h1>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Jobs;
