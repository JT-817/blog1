import { Card, Container, Row, Col } from "react-bootstrap";
import Articles from "../utils/Articles";

const BigCard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card>
              <Card.Img variant="top" src={Articles[0].Image} />
              <Card.Body>
                <Card.Title>{Articles[0].title}</Card.Title>
                <Card.Text>{Articles[0].summary}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BigCard;
