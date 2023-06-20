import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// Get Images
import faceUser from "./../../Images/Home/Mask group.png";
import logo1 from "./../../Images/Home/logo 1.png";
import rectangle from "./../../Images/Home/Rectangle 24.png";
import menuOpne from "./../../Images/Home/Icons/menu_open.svg";
// Get Styles
import styles from "./../../Pages/CertificateReq/Home.module.css";

import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { hiden } from "../../Data/Recoil/Main";

function Menu() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hide, setHide] = useState("none");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [hideUser, setHideUser] = useState("none");
  const [, setHiden] = useRecoilState(hiden);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const [showUser, setShowUSer] = useState("hide");
  let { pathname } = useLocation();
  return (
    <>
      <div
        className={` ${styles.hold} ${hide !== "block" && "d-none"}`}
        onClick={() => {
          setHide("none");
          setHiden("close");
        }}
      ></div>
      <div
        className={` ${styles.hold} ${hideUser !== "block" && "d-none"}`}
        onClick={() => {
          setHideUser("none");
          setShowUSer("hide");
          setHiden("close");
        }}
      ></div>
      {window.innerWidth > 900 ? (
        <div className="text-center flex flex-col gap-2 align-items-center ">
          <motion.img
            transition={{ duration: 1 }}
            initial={{ opacity: 0, x: "-50vh", y: "50vh" }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            src={logo1}
            width={100}
            alt="imag"
          />

          <ul>
            <li className="border-b py-2">
              <button
                onClick={() => {
                  navigate("/");
                }}
                className="flex"
              >
                <motion.h6
                  whileHover={{ scale: 1.1, x: "-5px" }}
                  className={`${
                    pathname === "/" ? styles.act : styles.notAct
                  } text-nowrap font-bold`}
                >
                  الصفحة الرئيسية
                </motion.h6>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {window.innerWidth > 1059 && pathname === "/" && (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img src={rectangle} alt="image-location" />
                )}
              </button>
            </li>
            <li
              className={`${
                pathname === "/TrainingOpportunity" ? styles.act : styles.notAct
              } flex align-items-center gap-2 border-b font-bold py-2`}
            >
              <motion.button
                className="text-center text-nowrap w-100"
                whileHover={{ scale: 1.1, x: "-5px" }}
                onClick={() => {
                  navigate("/TrainingOpportunity");
                }}
              >
                فرص تدريب
              </motion.button>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              {window.innerWidth > 1059 &&
              pathname === "/TrainingOpportunity" && (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={rectangle} alt="image-location" />
              )}
            </li>
            <li
              className={`${
                pathname === "/construction" ? styles.act : styles.notAct
              } flex gap-2 border-b font-bold py-2`}
            >
              <motion.button
                className="text-nowrap text-center w-100"
                whileHover={{ scale: 1.1, x: "-5px" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                احداث ومؤتمرات
              </motion.button>
              {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
              {window.innerWidth > 1059 && pathname === "/construction" && (
                // eslint-disable-next-line jsx-a11y/img-redundant-alt
                <img src={rectangle} alt="image-location" />
              )}
            </li>
          </ul>
        </div>
      ) : (
        <div className={`flex justify-around sticky top-0 text-center  w-100 `}>
          <div className="col-2  flex justify-center align-items-center">
            <img
              src={faceUser}
              className="rounded-full w-50 pb-1 z-20 cursor-pointer"
              alt=""
              onClick={() => {
                if (hideUser) {
                  setShowUSer(""); // open
                  setHideUser("block");
                  setHiden("open");
                } else {
                  setHideUser("");
                  setShowUSer("hide"); // close
                  setHiden("close");
                }
              }}
            />
            <div
              className={`absolute top-10 left-5 border p-2 rounded-lg mt-2 z-10 bg-white ${
                showUser ? "d-none" : "d-block"
              }`}
            >
              <div className={`${styles.bgFace} z-40`}>
                <img
                  src={faceUser}
                  className={`p-1 ${styles.faceUser} mx-auto rounded-full 
                  `}
                  width={70}
                  alt="background-user"
                />
              </div>
              {/* Text */}
              <div className="sm-text-center text-center">
                <h4 className="font-bold">احمد محمد</h4>
                <h6 className="">UX/UI Designer | MIS </h6>
              </div>
            </div>
          </div>
          <motion.img
            transition={{ duration: 0.7 }}
            initial={{ opacity: 0, x: "-50vh", y: "50vh" }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            src={logo1}
            width={50}
            alt="MET"
          />
          {/*<h4 className="flex align-self-center">MET</h4>*/}
          <div className="col-2 z-10 text-end  ">
            <button
              className="ms-2 my-auto"
              onClick={() => {
                if (hide === "none") {
                  setHide("block");
                  setHiden("open");
                } else {
                  setHide("none");
                  setHiden("close");
                }
              }}
            >
              <img src={menuOpne} className={`animate  `} alt="menu-opne" />
            </button>
            <div
              className={`absolute z-50 right-1 bg-white  d-${hide} text-center flex flex-col gap-2 justify-center px-5 py-3 rounded-lg border align-items-center`}
            >
              <img src={logo1} className="m-auto" width={100} alt="imag" />

              <ul className={`p-0 `}>
                <li className="border-b py-2">
                  <button
                    onClick={() => {
                      navigate("/");
                    }}
                    className="flex"
                  >
                    <motion.h6
                      whileHover={{ scale: 1.1 }}
                      className={`${
                        pathname === "/" ? styles.act : styles.notAct
                      } text-nowrap font-bold`}
                    >
                      الصفحة الرئيسية
                    </motion.h6>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    {window.innerWidth > 1059 && (
                      // eslint-disable-next-line jsx-a11y/img-redundant-alt
                      <img src={rectangle} alt="image-location" />
                    )}
                  </button>
                </li>
                <li
                  className={`${
                    pathname === "/TrainingOpportunity"
                      ? styles.act
                      : styles.notAct
                  } border-b font-bold py-2`}
                >
                  <motion.button
                    whileHover={{ scale: 1.1, x: "-5px" }}
                    onClick={() => {
                      navigate("/TrainingOpportunity");
                    }}
                  >
                    فرص تدريب
                  </motion.button>
                </li>
                <li
                  className={`${
                    pathname === "/construction" ? styles.act : styles.notAct
                  } border-b font-bold py-2`}
                >
                  <motion.button
                    whileHover={{ scale: 1.1, x: "-5px" }}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    احداث ومؤتمرات
                  </motion.button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Menu;
