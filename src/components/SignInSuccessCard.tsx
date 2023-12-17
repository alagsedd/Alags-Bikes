import { useContext } from "react";
// import styles from "../styles/SignInSuccessCard.module.css";
import FormDetailsContext from "../contexts/FormDetailsContexts";

import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";

const SignInSuccessCard = () => {
  const { formDetails } = useContext(FormDetailsContext);

  const navigate = useNavigate();

  return (
    <>
      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Alags Bikes.</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              {" "}
              Welcome aboard, {formDetails.username}! Get ready to electrify
              your streets. Pumped to have you at Alags Bikes! Let's find your
              perfect e-bike match. The open road awaits,{formDetails.username}.
              Explore it on an Alags Bikes.
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button
              onClick={() => {
                navigate("/bikes-grid");
              }}
              variant="primary"
            >
              Continue
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </>
  );
};

export default SignInSuccessCard;
