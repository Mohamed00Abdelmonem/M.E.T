import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import Menu from "../../Components/Home/Menu";
// Get Images
import bgUser from "./../../Images/Home/graduates-hands-raised-up-with-graduation-caps 1.png";
import faceUser from "./../../Images/Home/Mask group.png";

// Get Styles
import styles from "./Home.module.css";
import TrainingCart from "../../Components/Home/TrainingCart";
import Footer from "../../Components/Home/Footer";
import { useRecoilState } from "recoil";
import { hiden, dataTrainings } from "../../Data/Recoil/Main";

function TrainingOpportunity() {
    const [hidening, ] = useRecoilState(hiden);
  const [dataTraining] = useRecoilState(dataTrainings);
  const navigate = useNavigate();
  const localStorageID = window.localStorage.getItem("ID");
  if (localStorageID == null) {
    navigate("/login");
  }
  const [looding, setLooding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLooding(false);
    }, 1000);
  }, []);
  if (looding) {
    return (
      <div className={`${styles.spenar}`}>
        <BarLoader color="#fff" loading size={40} speedMultiplier={1.4} />
      </div>
    );
  }
  return (
    <>
      {localStorageID == null && <Navigate to={`/login`} />}
      <div className={``}>
        <div
          className={`flex justify-evenly pt-3 px-3 bg-white ${
            window.innerWidth > 900 ? "bg-white" : "bg-slate-100"
          }`}
        >
          {window.innerWidth > 900 && (
            <div className={`relative rounded-lg`}>
              {/* BG user */}
              <img
                src={bgUser}
                className={`${styles.boxBG} p-1  rounded-lg`}
                alt="background-user"
              />
              {/* face user */}
              <div
                className={`absolute top-1 right-12  lg:top-44 lg:right-16 md:top-36 md:right-16 sm:top-2/4 sm:right-12`}
              >
                <img
                  src={faceUser}
                  className={`p-1 ${styles.faceUser} rounded-full `}
                  width={100}
                  alt="background-user"
                />
                {/* Text */}
                <div className="sm-text-center text-end">
                  <h4 className="font-bold">احمد محمد</h4>
                  <h6 className="">UX/UI Designer | MIS </h6>
                </div>
              </div>
            </div>
          )}
          <Menu />
        </div>
      </div>
      {/* Contant */}
      <div
        className={`relative ${
          hidening === "open" ? "-z-10" : ""
        } container mt-2 col-10 col-sm-7 ${
          window.innerWidth > 900 ? "top-20" : "top-5"
        }`}
      >
        <h2 className={`font-bold fs-2 text-end`}>احدث فرص التدريب</h2>
        <h6 className="font-sans text-end text-slate-500">/ فرص تدريب</h6>
        {dataTraining.map((training) => {
          return (
            <TrainingCart
              key={training.id}
              id={training.id}
              jobTitle={training.title}
              jobDet={training.descrebtion}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default TrainingOpportunity;
