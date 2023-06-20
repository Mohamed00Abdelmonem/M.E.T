import React from 'react'
import logo from "./../../Images/Login/logo 1.jpg"
import styles from "./HeaderData.module.css";

function HeaderData({ title, padding }) {
  return (
    <>
      {/* Image Logo */}
      <img
        src={logo}
        className={`${styles.boxInputShado} mx-auto`}
        width={`100`}
        height={`100`}
        alt="MET-logo"
      />
      <h5
        className={`font-bold text-end  md:px-2 sm:px-2 px-2 my-2 ${styles.lineH} ${padding}`}
      >
        {title}
      </h5>
    </>
  );
}

export default HeaderData