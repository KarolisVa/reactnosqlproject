import React from "react";
import Form from "./Form";
import OutputBox from "./OutputBox";

function Outputs({ collectionData, setCollectionData }) {
  return (
    <React.Fragment>
      <div className="output">
        <OutputBox
          collectionData={collectionData}
          setCollectionData={setCollectionData}
        />
        <Form />

        <div className="svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="100vw"
            height="210"
            preserveAspectRatio="none"
            viewBox="0 0 1440 210"
          >
            <g mask='url("#SvgjsMask1014")' fill="none">
              <path
                d="M 0,67 C 57.6,76 172.8,112 288,112 C 403.2,112 460.8,63.8 576,67 C 691.2,70.2 748.8,137.8 864,128 C 979.2,118.2 1036.8,10.6 1152,18 C 1267.2,25.4 1382.4,135.6 1440,165L1440 210L0 210z"
                fill="rgba(8, 171, 35, 1)"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1014">
                <rect width="1440" height="210" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Outputs;
