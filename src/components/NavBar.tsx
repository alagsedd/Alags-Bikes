import styles from "../styles/NavBar.module.css";
import { FaHome } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { IoMdLogIn } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./FirebaseConfig";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiEBikeFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import BuyCountContext from "../contexts/BuyCountContext";

const NavBar = () => {
  const [user] = useAuthState(auth);
  const [showMenu, setShowMenu] = useState(false);
  // const [showCart, setShowCart] = useState(false);
  const { intialState } = useContext(BuyCountContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => {
    console.log("clicked");
    setShow(true);
  };

  return (
    <>
      {" "}
      <nav className={styles.nav}>
        <span className={styles.brandName}>A-Bikes</span>

        <ul className={styles.horizonUl}>
          <li>
            <Link className={styles.icon} to={"/"}>
              {" "}
              <FaHome className={styles.icon} />
              Home
            </Link>
          </li>
          <li>
            <RiTeamFill className={styles.icon} />
            About us
          </li>
          <li>
            {" "}
            <Link className={styles.icon} to={"/bikes-grid"}>
              {" "}
              <RiEBikeFill className={styles.icon} />
              Bikes
            </Link>
          </li>
          <li>
            {user ? (
              <React.Fragment>
                <FaUser className={styles.icon} />
                <Link className={styles.icon} to={"/profile"}>
                  Profile
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <IoMdLogIn className={styles.icon} />
                <Link className={styles.icon} to={"/sign-up"}>
                  Sign up
                </Link>
              </React.Fragment>
            )}
          </li>
          {user && (
            <li onClick={handleShow}>
              <FaCartShopping className={styles.icon} /> Cart
            </li>
          )}
        </ul>

        <div className={styles.optionBox}>
          {!showMenu ? (
            <GiHamburgerMenu
              className={styles.tool}
              onClick={() => setShowMenu(true)}
              size="30"
            />
          ) : (
            <IoCloseCircle
              className={styles.tool}
              onClick={() => setShowMenu(false)}
              size="30"
            />
          )}
        </div>
      </nav>
      {showMenu && (
        <ul className={styles.verticalUl}>
          <li>
            <Link className={styles.icon} to={"/"}>
              {" "}
              <FaHome className={styles.icon} />
              Home
            </Link>
          </li>
          <li>
            <RiTeamFill className={styles.icon} />
            About us
          </li>
          <li>
            {" "}
            <Link className={styles.icon} to={"/bikes-grid"}>
              {" "}
              <RiEBikeFill className={styles.icon} />
              Bikes
            </Link>
          </li>
          <li>
            {user ? (
              <React.Fragment>
                <FaUser className={styles.icon} />
                <Link className={styles.icon} to={"/profile"}>
                  Profile
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <IoMdLogIn className={styles.icon} />
                <Link className={styles.icon} to={"/sign-up"}>
                  Sign up
                </Link>
              </React.Fragment>
            )}
          </li>

          {user && (
            <li onClick={handleShow}>
              <FaCartShopping className={styles.icon} /> Cart
            </li>
          )}
        </ul>
      )}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Items purchase count</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {intialState === 0
            ? "You have no pending items"
            : `You have ${intialState} pending items`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavBar;
