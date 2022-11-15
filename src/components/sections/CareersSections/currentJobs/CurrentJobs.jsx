import React from 'react';
import { Row, Col } from "reactstrap";
import './currentJobs.css';
import {careersData} from '../careersData';

const CurrentJobs = () => {
    return (
        <div className='currentJobs'>
            <Row>
                <h1 className="currentJobs__title mb-5 mt-5"> Our Open roles</h1>
                {careersData.map((job) => (
                <div className='mb-5 d-flex justify-content-center align-items-center'>

                    <Col lg="8" md="6">
                        <div className='d-flex justify-content-between gap-6'>
                            <h4 className='d-flex align-items-center'> <i class={job.image}></i>  
                            {job.title}
                            </h4>

                            <div className=" currentJob__apply">
                                <button className="btn">Apply</button>
                            </div>

                        </div>


                    </Col>
                    </div>

                ))}

                





            </Row>

        </div>
    )
}

export default CurrentJobs;
