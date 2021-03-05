import React, { useEffect, useState } from "react";
import firebase from "../firebase/firebase";
var dateFormat = require("dateformat");

function OutputBox({ setCollectionData, collectionData }) {
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = () => {
    const unsub = firebase.db.collection("events").onSnapshot(handleSnapshot);
  };

  const handleSnapshot = (snapshot) => {
    const events = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setCollectionData(events);
  };

  return (
    <div className="outputBox">
      <div className="box1">
        <h3>Num</h3>
        <h3>Enter Event</h3>
        <h3>Time</h3>
      </div>
      <div className="box2">
        {collectionData.map((data, index) => {
          return (
            <div className="event" key={index + 1}>
              <h3>{index + 1}</h3>
              <h3>{data.event.event}</h3>
              <h3>
                {data.date === undefined
                  ? ""
                  : dateFormat(new Date(data.date * 1000), "yyyy-mm-dd HH:MM")}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OutputBox;
