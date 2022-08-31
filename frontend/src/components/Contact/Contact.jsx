import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../../actions/user";
import { useAlert } from "react-alert";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [messageMe, setMessageMe] = useState("");
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, message, error } = useSelector((state) => state.update);

  const contactFormHandler = (e) => {
    e.preventDefault();
    if (name === "" || name === undefined) {
      toast.error("Enter the Name");
    } else if (email === "" || email === undefined) {
      toast.error("Enter the Email");
    } else if (messageMe === "" || messageMe === undefined) {
      toast.error("Please leave a message");
    } else {
      dispatch(contactUs(name, email, messageMe));
      setName("");
      setEmail("");
      setMessageMe("");
    }
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      toast.success(message, { icon: "🚀" });
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [alert, error, message, dispatch]);

  return (
    <div className="contact">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        icon={true}
      />
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography>Contact Me</Typography>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            // required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            value={messageMe}
            onChange={(e) => setMessageMe(e.target.value)}
            // required
          ></textarea>
          <Button variant="contained" type="submit" disabled={loading}>
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
