import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//const options = [rock, sciscorr, paper]

const CardItem = ({ gameOn, itemType, player }) => {
  const images = ["./rock.png", "./paper.png", "./scissors.png"];
  const [picture, setPicture] = useState();
  const [options, setOptions] = useState([]);
  const rockOptions = [
    "./rockHand.png",
    "./scissorsHandFlip.png",
    "./rockHand.png",
    "./paperHandFlip.png",
  ];
  const paperOptions = [
    "./paperHand.png",
    "./rockHandFlip.png",
    "./paperHand.png",
    "./scissorsHandFlip.png",
  ];
  const scissorsOptions = [
    "./scissorsHand.png",
    "./paperHandFlip.png",
    "./scissorsHand.png",
    "./rockHandFlip.png",
  ];

  useEffect(() => {
    setUpCards(itemType);
  }, []);

  const setUpCards = (item) => {
    if (item === "rock") {
      setPicture(images[0]);
      setOptions(rockOptions);
    } else if (item === "paper") {
      setPicture(images[1]);
      setOptions(paperOptions);
    } else if (item === "scissors") {
      setPicture(images[2]);
      setOptions(scissorsOptions);
    }
  };

  return (
    <>
      <Card
        style={{ width: "17rem" }}
        onClick={() => (player ? gameOn(itemType) : "")}
        className="text-dark mx-auto cardBg p-0 rounded-4 overflow-hidden"
      >
        <Card.Img variant="top" src={picture} height="300" />
        <Card.Body className="text-white text-start d-flex">
          <div className="w-50 d-flex flex-column align-items-center justify-content-center">
            <h5 className="">WIN</h5>
            <div>
              <Image
                src={options[0]}
                height="45"
                width="45"
                roundedCircle
                className="border border-dark border-2"
              />
              <Image
                src={options[1]}
                height="45"
                width="45"
                roundedCircle
                className="ms-2 border border-dark border-2"
              />
            </div>
          </div>
          <div className="w-50 d-flex flex-column align-items-center justify-content-center">
            <h5 className="">LOOSE</h5>
            <div>
              <Image
                src={options[2]}
                height="45"
                width="45"
                roundedCircle
                className="border border-dark border-2"
              />
              <Image
                src={options[3]}
                height="45"
                width="45"
                roundedCircle
                className="ms-2 border border-dark border-2"
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardItem;
