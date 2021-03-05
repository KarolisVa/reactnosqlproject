import React from "react";
import SorterButton from "./SorterButton";

function SortingBar({ collectionData, setCollectionData }) {
  return (
    <div className="sortingBar">
      <SorterButton
        buttonName={"newest"}
        collectionData={collectionData}
        setCollectionData={setCollectionData}
        query={"desc"}
      />
      <SorterButton
        buttonName={"oldest"}
        collectionData={collectionData}
        setCollectionData={setCollectionData}
        query={"asc"}
      />
    </div>
  );
}

export default SortingBar;
