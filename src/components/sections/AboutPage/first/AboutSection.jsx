import React from "react";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../../../assests/about-us.png";
import CountUp from "react-countup";
import "./AboutSection.css";

export const AboutSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about__content">
                            <h2>Our Results</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Excepturi cupiditate animi deserunt libero nesciunt corporis
                                explicabo nobis ex quo molestiae!
                            </p>

                            <div className="about__counter">
                                <div className=" d-flex gap-5 align-items-center">
                                    <div className="single__counter">
                                        <span className="counter">
                                            <CountUp start={0} end={25} duration={4} suffix="K" />
                                        </span>

                                        <p className="counter__title">Completed Projects</p>
                                    </div>

                                    <div className="single__counter">
                                        <span className="counter">
                                            <CountUp start={0} end={12} duration={4} suffix="M" />
                                        </span>

                                        <p className="counter__title">Patient Around World</p>
                                    </div>
                                </div>

                                <div className=" d-flex gap-5 align-items-center">
                                    <div className="single__counter">
                                        <span className="counter">
                                            <CountUp start={0} end={95} duration={4} suffix="M" />
                                        </span>

                                        <p className="counter__title">Ideas Raised Funds</p>
                                    </div>

                                    <div className="single__counter">
                                        <span className="counter">
                                            <CountUp start={0} end={12} duration={4} suffix="K" />
                                        </span>

                                        <p className="counter__title">Categories Served</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg="6" md="6">
                        <div className="about__img">
                            <img src={aboutImg} alt="" className="w-100" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
