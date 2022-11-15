import React from 'react';
import './FirstSection.css';
import { Container, Row, Col } from 'reactstrap';
import logo from '../../../assests/logo.jpeg';

export const FirstSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <img src={logo} alt="" className="w-100 firstOne__img" />
          </Col>

          <Col lg="6" md="6">
            <div className="firstOne__content">
              <h2 className="mb-4 firstOne__title">
                Anytime Anywhere Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aut saepe voluptatum earum delectus deserunt id iste,
                Aut saepe voluptatum earum delectus deserunt id iste,
                Aut saepe voluptatum earum delectus deserunt id iste,
                Aut saepe voluptatum earum delectus deserunt id iste,
                Aut saepe voluptatum earum delectus deserunt id iste,
                quas officiis et repellat!
              </p>
            </div>
            <div className=" firstOne__search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>


        </Row>
      </Container>
    </section>
  );
};
