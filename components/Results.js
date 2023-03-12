import { Col, Row } from "react-bootstrap";
import CardItem from "./CardItem";
import RoundInfo from "./RoundInfo";

const Results = ({
  selectedItemComputer,
  selectedItemPlayer,
  player,
  roundWinner,
  round,
  handleNewGame,
  handleNextRound,
  handlePlayAgain,
}) => {
  return (
    <Row>
      <Col sm={4} xs={12}>
        <h3 className="cardBg rounded text-center mt-2 mb-4 py-2">
          {player} Chooses
        </h3>
        <CardItem itemType={selectedItemPlayer} />
      </Col>
      <Col className="mx-auto d-flex align-items-center justify-content-center" sm={4} xs={12}>
        <RoundInfo
          roundWinner={roundWinner}
          round={round}
          handleNewGame={handleNewGame}
          handleNextRound={handleNextRound}
          handlePlayAgain={handlePlayAgain}
        />
      </Col>
      <Col className="mx-auto" sm={4} xs={12}>
        <h3 className="cardBg rounded text-center mt-2 mb-4 py-2">
          Computer Chooses
        </h3>
        <CardItem itemType={selectedItemComputer} />
      </Col>
    </Row>
  );
};

export default Results;
