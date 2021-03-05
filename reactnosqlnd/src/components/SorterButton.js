import React from "react";
import firebase from "../firebase/firebase";

function SorterButton({
  buttonName,
  collectionData,
  setCollectionData,
  query,
}) {
  const getEvents = () => {
    const unsub = firebase.db
      .collection("events")
      .orderBy("date", query)
      .onSnapshot(handleSnapshot);
  };

  const handleSnapshot = (snapshot) => {
    const events = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    setCollectionData(events);
  };

  return <button onClick={() => getEvents()}>{buttonName}</button>;
}

export default SorterButton;
