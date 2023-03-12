import { Alert, Button, Row, Col } from "react-bootstrap";

const RoundInfo = ({
  roundWinner,
  round,
  handleNewGame,
  handleNextRound,
  handlePlayAgain
}) => {

  return (
    <Alert className="text-center" variant="primary">
      <Row>
        {round < 3 ? (
          <>
            <h4>{roundWinner} wins this round!</h4>
            <Button
              className="w-50 mt-3 mx-auto"
              onClick={handleNextRound}
            >
              Next Round
            </Button>
          </>
        ) : (
          <>
            <h4>GAME OVER</h4>
            <h4>{roundWinner} wins!</h4>
            <Col>
            <Button variant="primary" className="m-3" onClick={handlePlayAgain}>
              Play Again
            </Button>
            </Col>
            <Col>
            <Button variant="primary" className="m-3" onClick={handleNewGame}>
              New Game
            </Button>
            </Col>
          </>
        )}
      </Row>
    </Alert>
  );
};

export default RoundInfo;
