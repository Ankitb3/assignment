import { Button } from "react-bootstrap";
import Navbar from "../navbar/navbar";
import { useSelector } from "react-redux";
import Footer from "../Footer/Footer";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Detail = () => {
  const [show, setShow] = useState(false);
  const getdata = useSelector((state) => state.cartreducer);
  const showToastMessage = () => {
    toast.success("Ticket book successfully ", {
      position: toast.POSITION.TOP_CENTER,
    });

  };
 

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book ticket</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <label>
              <p className="fs-5">Movie name</p>
            </label>
            <input value={getdata.cart[0].show.name} />
            <p className="fs-5 mt-4">
              Time: {getdata.cart[0].show.schedule.time}
            </p>
            <p className="fs-5 mt-4">
              Time: {getdata.cart[0].show.schedule.days}
            </p>
          </div>
        </Modal.Body>
        <ToastContainer />
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={showToastMessage}>
            Book ticket
          </Button>
        </Modal.Footer>
      </Modal>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="container"
      >
        <h1>Summary</h1>

        <img
          src={getdata.cart[0].show.image?.medium}
          alt="image"
          height="300px"
          width={"300px"}
        />
        <h3>{getdata.cart[0].show.name}</h3>
        <div
          style={{
            textAlign: "center",
            width: "42rem",
            lineHeight: "2rem",
          }}
        >
          <h2>{getdata.cart[0].show.summary}</h2>
        </div>
        <Button variant="warning" className="p-1 fs-5" onClick={handleShow}>
          Book movie ticket
        </Button>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
