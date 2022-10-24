import { Container, Row, Col, Stack, Button } from "react-bootstrap";

import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-light w-100 pb-2">
      <Container className="">
        <Row>
          <Col sm={12} md={4}>
            <Stack gap={2}>
              <h4>Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Button variant="link">Home</Button>
                </li>
                <li>
                  <Button variant="link">Articles</Button>
                </li>
                <li>
                  <Button variant="link">About Me</Button>
                </li>
                <li>
                  <Button variant="link">Contact Me</Button>
                </li>
              </ul>
            </Stack>
          </Col>
          <Col sm={12} md={4}>
            <Stack gap={2}>
              <h4>Social</h4>
              <ul className="list-unstyled">
                <li>
                  <Button variant="link">Facebook</Button>
                </li>
                <li>
                  <Button variant="link">Instagram</Button>
                </li>
                <li>
                  <Button variant="link">Twitter</Button>
                </li>
              </ul>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li><strong>Email: </strong>J.Z.T817@gmail.com</li>
                <li><strong>Phone: </strong>(856)555-555</li>
              </ul>
            </Stack>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
