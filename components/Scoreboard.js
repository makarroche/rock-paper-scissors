import { Col, ListGroup, Row } from "react-bootstrap";

const ScoreBoard = ({ player, scoreComputer, scorePlayer }) => {
  return (
    <ListGroup as="ol" className="mx-auto w-25">
      <ListGroup.Item
        as="li"
        className="cardBg text-white justify-content-between"
      >
        <div>
          <Row>
            <Col sm={6} xs={12}>
              <div className="fw-bold">Computer</div>
            </Col>
            <Col sm={6} xs={12}>
              <div className="fw-bold">{scoreComputer}</div>
            </Col>
          </Row>
        </div>
      </ListGroup.Item>
      <ListGroup.Item as="li" className="justify-content-between">
        <div>
          <Row>
            <Col sm={6} xs={12}>
              <div className="fw-bold">{`${player}`}</div>
            </Col>
            <Col sm={6} xs={12}>
              <div className="fw-bold">{scorePlayer}</div>
            </Col>
          </Row>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default ScoreBoard;
