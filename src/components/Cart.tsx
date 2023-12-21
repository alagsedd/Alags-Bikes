import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BuyCountContext from "../contexts/BuyCountContext";

const Cart = () => {
  const [showCart, setShowCart] = useState(false);
  const { intialState } = useContext(BuyCountContext);

  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Items purchase Count</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Pending items: {intialState}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={() => setShowCart(false)} variant="secondary">
            Close
          </Button>
          {/* <Button variant="primary">Save changes</Button> */}
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default Cart;
