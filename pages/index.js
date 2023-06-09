import Banner from "@/components/Banner";
import CardItem from "@/components/CardItem";
import NameInput from "@/components/NameInput";
import Results from "@/components/Results";
import Scoreboard from "@/components/Scoreboard";

import Head from "next/head";
import { useState } from "react";
import { Col, Container, Row} from "react-bootstrap";

export default function Home() {
  const [player, setPlayer] = useState();
  const [round, setRound] = useState(1);
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreComputer, setScoreComputer] = useState(0);
  const [wonRounds, setWonRounds] = useState({ player: 0, computer: 0 });
  const [roundWinner, setRoundWinner] = useState();
  const [isChoosing, setIsChoosing] = useState(true);
  const [results, setResults] = useState({ player: "", computer: ""});
  const computerOptions = ["rock", "paper", "scissors"];

  const gameOn = (selectedItemPlayer) => {
    let wonRoundsPlayer = wonRounds.player;
    let wonRoundsComputer = wonRounds.computer;
    if(round < 4){
      const selectedItemComputer = computerOptions[Math.floor(Math.random() * computerOptions.length)];
      const roundWinner = checkWinnerOfRound(selectedItemComputer, selectedItemPlayer);

      setResults({player: selectedItemComputer, computer: selectedItemPlayer});
      setIsChoosing(false);

      if(roundWinner==="Computer"){
        wonRoundsComputer++;
      }
      else if(roundWinner===player){
        wonRoundsPlayer++;
      }
      setRoundWinner(roundWinner); 
      setWonRounds({ computer: wonRoundsComputer, player: wonRoundsPlayer});
      if(round === 3){
        if(wonRoundsComputer > wonRoundsPlayer){
          setScoreComputer(scoreComputer+1);
          setRoundWinner("Computer");
        }
        else if(wonRoundsPlayer > wonRoundsComputer){
          setScorePlayer(scorePlayer+1);
          setRoundWinner(player);
        }
        else {
          setRoundWinner("Nobody");
        }

        setWonRounds({ computer: 0, player: 0});
      }
    }
  };

  const checkWinnerOfRound = (selectedItemComputer, selectedItemPlayer) => {
    const computer = "Computer";
    if(selectedItemComputer === selectedItemPlayer){
      return 'Nobody';
    }
    if(selectedItemComputer === "rock"){
      return selectedItemPlayer === "scissors" ? computer : player;
    }
    if(selectedItemComputer === "paper"){
      return selectedItemPlayer === "rock" ? computer : player;
    }
    if(selectedItemComputer === "scissors"){
      return selectedItemPlayer=== "paper" ? computer : player;
    }
  }

  const handleNewGame = () => {
    setPlayer("");
    setScoreComputer(0);
    setScorePlayer(0);

    changeRound(1)
  };

  const handleNextRound = () => changeRound(round+1)

  const handlePlayAgain = () => changeRound(1)

  const changeRound = (roundNumber) => {
    setRound(roundNumber);
    setIsChoosing(true);
  }

  return (
    <>
      <Head>
        <title>Rock-Paper-Scissors</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container
        fluid
        className="p-5 bg-dark text-white"
        style={{ minHeight: "100vh" }}
      >
        <Row className="text-center">
          <h2 className="mb-3">
            Welcome to <span className="rock">Rock</span>-
            <span className="paper">Paper</span>-
            <span className="scissors">Scissors</span> !
          </h2>
        </Row>
        {!player ? (
          <Row className="justify-content-center">
            <Col sm={6} xs={12}>
              <NameInput onClick={setPlayer} />
            </Col>
          </Row>
        ) : (
          <>
            <Banner/>         
            <Row className="text-center">
              <h5 className="mb-3 mt-4">Round {round}/3</h5>
            </Row>
            <Row className="text-center justify-content-center">
              <Col lg={3} sm={12}>
                <Scoreboard player={player} scoreComputer={scoreComputer} scorePlayer={scorePlayer}/>
              </Col>
            </Row>
            <hr className="hr hr-blurry" />
          </>
        )}    
        {isChoosing && 
          <Row className="justify-content-center flex-wrap">
            <CardItem
              gameOn={gameOn}
              itemType="rock"
              player={player}
            />
            <CardItem
              gameOn={gameOn}
              itemType="paper"
              player={player}
            />
            <CardItem
              gameOn={gameOn}
              itemType="scissors"
              player={player}
            />
          </Row>
        }
        {!isChoosing && player && roundWinner &&
          <>
            <Row className="justify-content-center flex-wrap">
              <Results 
                selectedItemComputer={results.player} 
                selectedItemPlayer={results.computer} 
                player={player} 
                roundWinner={roundWinner} 
                round={round} 
                handleNewGame={handleNewGame}
                handleNextRound={handleNextRound}
                handlePlayAgain={handlePlayAgain}
              /> 
            </Row>
          </>
        }
      </Container>
    </>
  );
}
