import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./OurFeatures.css";

const FeatureData = [
    {
        title: "Quick Results",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
        icon: "ri-draft-line",
    },

    {
        title: "Fast Responses",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
        icon: "ri-discuss-line",
    },

    {
        title: "High Time Managment",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum molestias, aperiam doloribus aut sapiente praesentium eos iste dicta amet itaque!",
        icon: "ri-contacts-book-line",
    },
];

const OurFeatures = () => {
    return (
        <section>
            <Container>
                <Row>
                    {FeatureData.map((item, index) => (
                        <Col lg="4" md="6" key={index}>
                            <div className="single__feature text-center px-4">
                                <h2 className="mb-3">
                                    <i class={item.icon}></i>
                                </h2>
                                <h6>{item.title}</h6>
                                <p>{item.desc}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default OurFeatures;