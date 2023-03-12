import { Spinner } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="alert alert-success text-center game-on mt-5" role="alert">
      <Spinner animation="grow" size="sm" className="me-3" />
      GAME ON
      <Spinner animation="grow" size="sm" className="ms-3" />
    </div>
  );
};

export default Banner;
