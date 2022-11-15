import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg01 from "../../../../assests/web-development.png";
import courseImg02 from "../../../../assests/kids-learning.png";
import courseImg03 from "../../../../assests/seo.png";
import courseImg04 from "../../../../assests/ui-ux.png";
import ServicesFirstCard from "./ServicesFirstCard";
import "./ServicesFirstSection.css";
import { servicesData } from "../../sectionFour/servicesData";



const ServicesFirstSection = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="text-center mb-5">
                        <h2 className="fw-bold">Our Current Services</h2>
                    </Col>

                    {servicesData.map((item) => (
                        <Col lg="3" md="4" className="mb-4" key={item.id}>
                            <ServicesFirstCard item={item} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ServicesFirstSection;