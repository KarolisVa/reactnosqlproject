import React from "react";
import validateEvent from "../hooks/validateEvent";
import useFormValidation from "../hooks/useFormValidation";
import firebase from "../firebase/firebase";

function Form() {
  const initial_state = {
    event: "",
  };

  const secondsSinceEpoch = Math.round(Date.now() / 1000);
  const addEvent = () => {
    console.log("event added:", values);
    const newEvent = {
      event: values,
      date: secondsSinceEpoch,
    };
    firebase.db.collection("events").add(newEvent);
    values.event = "";
  };
  const { handleSubmit, values, handleChange, errors } = useFormValidation(
    initial_state,
    validateEvent,
    addEvent
  );

  return (
    <form onSubmit={handleSubmit}>
      <label>Dream</label>
      <input
        type="text"
        name="event"
        onChange={handleChange}
        value={values.event}
      />
      <input type="submit" className="submit" />
      {errors.event && <p className="error-input">{errors.event}</p>}
    </form>
  );
}

export default Form;
