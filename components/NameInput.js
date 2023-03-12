import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const NameInput = ({ onClick }) => {
  const [name, setName] = useState("");

  return (
    <Form>
      <Row>
        <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlInput1">
          <Form.Label>What&apos;s your name?</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            type="publicKey"
            placeholder="Example: Mr. Awesome"
            className=""
          />
        </Form.Group>
      </Row>
      <Row className="justify-content-center">
        <Button
          className="mx-auto w-50 mb-5 cardBg border-0"
          disabled={!name}
          onClick={() => onClick(name)}
        >
          Play!
        </Button>
      </Row>
    </Form>
  );
};

export default NameInput;
