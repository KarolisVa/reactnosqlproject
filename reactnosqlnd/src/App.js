import React, { useState } from "react";
import Header from "./components/Header";
import Outputs from "./components/Outputs";
import SortingBar from "./components/SortingBar";
import "./styles/App.scss";

function App() {
  const [collectionData, setCollectionData] = useState([]);
  return (
    <div className="App">
      <svg
        className="svg3"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100vw"
        height="100wh"
        preserveAspectRatio="none"
        viewBox="0 0 1440 560"
      >
        <g mask='url("#SvgjsMask1018")' fill="none">
          <path
            d="M642 259L1060 -159"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M1393 467L1167 693"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M199 476L533 142"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M631 477L404 704"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M825 449L1205 69"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M778 178L467 489"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M820 457L1101 176"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M764 290L617 437"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M64 247L467 -156"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M178 101L-118 397"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M775 299L366 708"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M1211 373L929 655"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M1403 72L1817 -342"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M1049 15L896 168"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M1350 391L1722 19"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M1063 263L907 419"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M1192 435L1048 579"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M594 286L899 -19"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M493 474L825 142"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M234 338L623 -51"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M1271 477L1002 746"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M323 309L637 -5"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M1233 287L1487 33"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M304 282L-112 698"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M1026 380L609 797"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M230 188L541 -123"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M1139 491L869 761"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M759 153L1036 -124"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M1208 53L983 278"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M413 441L632 222"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M106 71L-313 490"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M749 415L1159 5"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M1258 279L1462 75"
            stroke-width="10"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M616 156L273 499"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M598 206L218 586"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M133 358L371 120"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
          <path
            d="M94 246L-282 622"
            stroke-width="8"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M356 529L508 377"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1019)"
            stroke-linecap="round"
            className="TopRight"
          ></path>
          <path
            d="M1184 531L1455 260"
            stroke-width="6"
            stroke="url(#SvgjsLinearGradient1020)"
            stroke-linecap="round"
            className="BottomLeft"
          ></path>
        </g>
        <defs>
          <mask id="SvgjsMask1018">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
          <linearGradient
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
            id="SvgjsLinearGradient1019"
          >
            <stop stop-color="rgba(255, 255, 255, 0)" offset="0"></stop>
            <stop stop-color="rgba(255, 255, 255, 1)" offset="1"></stop>
          </linearGradient>
          <linearGradient
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
            id="SvgjsLinearGradient1020"
          >
            <stop stop-color="rgba(255, 255, 255, 0)" offset="0"></stop>
            <stop stop-color="rgba(255, 255, 255, 1)" offset="1"></stop>
          </linearGradient>
        </defs>
      </svg>
      <Header />
      <SortingBar
        collectionData={collectionData}
        setCollectionData={setCollectionData}
      />
      <Outputs
        collectionData={collectionData}
        setCollectionData={setCollectionData}
      />
      <div className="svg2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          transform="scale(-1, -1)"
          width="100vw"
          height="560"
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
        >
          <g mask='url("#SvgjsMask1002")' fill="none">
            <path
              d="M1488 560L0 560 L0 315.63Q87.43 283.06, 120 370.49Q138.78 317.27, 192 336.06Q237.59 309.65, 264 355.25Q270.59 289.84, 336 296.43Q377.49 265.92, 408 307.41Q470.11 297.52, 480 359.64Q533.52 293.16, 600 346.69Q646.66 273.36, 720 320.02Q743.95 271.97, 792 295.91Q834.02 265.94, 864 307.96Q937.36 261.32, 984 334.68Q1050.3 280.98, 1104 347.28Q1147.2 318.48, 1176 361.68Q1210.23 275.91, 1296 310.15Q1349.55 291.69, 1368 345.24Q1443.05 300.28, 1488 375.33z"
              fill="#182f5d"
            ></path>
            <path
              d="M1488 560L0 560 L0 362.85Q82.68 325.53, 120 408.21Q162.49 330.7, 240 373.19Q288.45 349.64, 312 398.1Q329.69 343.8, 384 361.49Q428.77 334.26, 456 379.03Q537.46 340.49, 576 421.95Q581.24 355.19, 648 360.42Q716.83 309.25, 768 378.07Q826.65 364.73, 840 423.38Q891.02 354.4, 960 405.42Q1001.88 327.3, 1080 369.17Q1125.51 342.68, 1152 388.19Q1201.33 365.51, 1224 414.84Q1262.07 332.9, 1344 370.97Q1392.86 347.83, 1416 396.69Q1460.86 369.54, 1488 414.4z"
              fill="#25467d"
            ></path>
            <path
              d="M1464 560L0 560 L0 499.12Q28.98 456.1, 72 485.08Q87.7 428.78, 144 444.48Q192.13 420.61, 216 468.73Q254.44 387.17, 336 425.6Q379.26 396.87, 408 440.13Q476.11 388.24, 528 456.34Q572.86 381.2, 648 426.06Q729.63 387.69, 768 469.31Q846.46 427.77, 888 506.24Q899.57 445.81, 960 457.37Q1030.41 407.78, 1080 478.2Q1097.4 423.61, 1152 441.01Q1179.71 396.72, 1224 424.42Q1302.44 382.86, 1344 461.3Q1426.88 424.18, 1464 507.05z"
              fill="#356cb1"
            ></path>
            <path
              d="M1560 560L0 560 L0 508.48Q67.07 503.55, 72 570.62Q102.19 528.81, 144 559Q156.5 499.5, 216 512.01Q283.69 459.7, 336 527.4Q390.79 510.19, 408 564.99Q455.24 492.23, 528 539.46Q595.34 486.8, 648 554.14Q664.9 499.04, 720 515.94Q786.53 462.47, 840 529Q899.55 516.55, 912 576.1Q936.25 480.35, 1032 504.6Q1077.66 478.26, 1104 523.93Q1162.95 510.88, 1176 569.83Q1195.42 517.25, 1248 536.67Q1292.64 509.31, 1320 553.95Q1387.81 501.76, 1440 569.57Q1508.05 517.63, 1560 585.68z"
              fill="white"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1002">
              <rect width="1440" height="560" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default App;
