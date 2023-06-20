import React from "react";
// Get Styles
import styles from "./../../Pages/CertificateReq/Home.module.css";

function Cart({
  titleBTN,
  urlImage,
  stylePerant,
  titleIcon,
  styleImage,
  titleSC,
  desSC,
  Certificate,
  actionBTN
}) {
  return (
    <div
      className={`${styles.boxBG} h-full bg-white rounded-lg ${stylePerant}`}
    >
      <button
        className={`px-3 rounded-b-lg ${titleIcon} ${styles.boxDownlode}`}
        // actionBTN
        onClick={actionBTN}
      >
        <div>{titleBTN}</div>
        <div className="pb-1">
          <img className={`${styleImage}`} src={urlImage} alt="arrow-down" />
        </div>
      </button>
      <div className="text-center pt-2">
        <h4 className="font-bold">{titleSC}</h4>
        <h6>{desSC}</h6>
      </div>
      <div className="text-center pt-2">
        <img src={Certificate} width={100} alt="MET" />
      </div>
    </div>
  );
}

export default Cart;
