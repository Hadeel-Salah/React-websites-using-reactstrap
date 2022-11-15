import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "./footer.css";

const footerQuickLinks = [
    {
        display: "Home",
        url: "#",
    },
    {
        display: "About US",
        url: "#",
    },

    {
        display: "Courses",
        url: "#",
    },

    {
        display: "Blog",
        url: "#",
    },
];

const footerInfoLinks = [
    {
        display: "Privacy Policy",
        url: "#",
    },
    {
        display: "Membership",
        url: "#",
    },

    {
        display: "Purchases Guide",
        url: "#",
    },

    {
        display: "Terms of Service",
        url: "#",
    },
];

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3" md="6" className="mb-4">
                        <h6 className="fw-bold">Explore</h6>
                        <ListGroup className="link__list">
                            {footerQuickLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                                    {" "}
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6" className="mb-4">
                        <h6 className="fw-bold">Information</h6>
                        <ListGroup className="link__list">
                            {footerInfoLinks.map((item, index) => (
                                <ListGroupItem key={index} className="border-0 ps-0 link__item">
                                    <a href={item.url}>{item.display}</a>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Col>

                    <Col lg="3" md="6">
                        <h6 className="fw-bold">Get in Touch</h6>

                        <p>Address:Palestine, Gaza</p>
                        <p> Phone: +970 592662552 </p>
                        <p>Email: example@gmail.com</p>
                    </Col>

                    <Col lg="3" md="6" className="mb-4">
                        <h2 className=" d-flex align-items-center gap-1">
                            <i class="ri-community-line"></i><sup> Outo</sup>Digtal.
                        </h2>

                        <div className="follows">
                            <p className="mb-0">Follow us on social media</p>
                            <a href="facebook.com">
                                <i class="ri-facebook-line"></i>
                            </a>


                            <a href="linkedin.com">
                                <i class="ri-linkedin-line"></i>
                            </a>

                            <a href="twitter.com">
                                <i class="ri-twitter-line"></i>
                            </a>

                            <a href="instagram.com">
                                <i class="ri-instagram-line"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;