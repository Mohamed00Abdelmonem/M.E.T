/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Skill from "./../../Images/../Components/Home/Skill";
// Get Images
import bgUser from "./../../Images/Home/graduates-hands-raised-up-with-graduation-caps 1.png";
import faceUser from "./../../Images/Home/Mask group.png";
import certificate from "./../../Images/Certificate/certificate.png";
import arrwoDown from "./../../Images/Certificate/arroe-down.png";
import CertificateImg from "./../../Images/Certificate/Group 8.png";
import certificate2 from "./../../Images/Certificate/7911246 1.png";
import CertificateImgITI from "./../../Images/Certificate/1519885145295 1.png";
import Edit from "./../../Images/Home/Icons/Edit.png";
import arrowMore from "./../../Images/Home/Icons/Group 35.png";
import men from "./../../Images/Home/man_2 1.png";
import addSkill from "./../../Images/Home/Icons/Plus.png";

// Get Styles
import styles from "./Home.module.css";

import { motion } from "framer-motion";
import { BarLoader } from "react-spinners";
import Menu from "../../Components/Home/Menu";
import Cart from "../../Components/Home/Cart";
import Swal from "sweetalert2";
import Footer from "../../Components/Home/Footer";

function Home() {
  const [skillsAdding, setSkillsAdding] = useState([]);
  const [showMore, setShowMore] = useState("hide");
  const [dataITICount, setDataITICount] = useState(3);
  const [dataITI] = useState([1, 2, 3, 4, 5]);

  const [hide, setHide] = useState("none");
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
      <div
        className={`${styles.hold} ${hide !== "block" && "d-none"}`}
        onClick={() => {
          setHide("none");
        }}
      ></div>
      {localStorageID == null && <Navigate to={`/login`} />}
      <div className={`${styles.fixNav}`}>
        <div
          className={`flex justify-evenly pt-3 px-3 bg-stone-100 ${
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
      <div
        className={` ${
          window.innerWidth > 900 ? "relative" : ""
        } container mt-3 ${
          window.innerWidthbgUser > 900 ? "top-20" : "top-20"
        }`}
      >
        {/* Contants */}
        <motion.div
          className={`flex row ${
            window.innerWidth > 900 ? "justify-end" : "justify-center"
          } container align-items-center`}
        >
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.7,
              type: "keyframes",
              stiffness: 100,
            }}
            whileInView={{ x: 0 }}
            className="col-10 col-sm-10 col-lg-7"
          >
            <h3 className={`font-bold text-end container`}>شهادة التخصص</h3>
            <Cart
              stylePerant="mt-4 flex justify-around gap-2 flex-wrap mx-auto px-2 pb-10"
              titleBTN="تنزيل الشهادة"
              urlImage={arrwoDown}
              titleIcon="font-bold "
              styleImage="mx-auto"
              titleSC={"نظم المعلومات ادارة"}
              desSC={"معهد مصر العالي للتجارة و الحسبات"}
              Certificate={CertificateImg}
              actionBTN={() => {
                Swal.fire({
                  title: "لتنزيل الشهادة يجب تجميع بعض المعلومات",
                  text: "هل تريد الاستمرار؟",
                  icon: "question",
                  iconHtml: "؟",
                  confirmButtonText: "نعم",
                  cancelButtonText: "لا",
                  showCancelButton: true,
                  showCloseButton: true,
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate("/data/steps/1");
                  }
                });
              }}
            />
          </motion.div>
          {window.innerWidth > 900 && (
            <div className="col-3">
              <img src={certificate} className="" alt="Untitled" />
            </div>
          )}
        </motion.div>
      </div>
      <div
        className={` relative container  ${
          window.innerWidth > 900 ? "top-20" : "top-5"
        }`}
      >
        {/* Contants */}
        <div
          className={`flex row w-100 ${
            window.innerWidth > 900 ? "justify-start" : "justify-center"
          } container align-items-center`}
        >
          {window.innerWidth > 900 && (
            <div className="col-2 right-0">
              <img
                src={certificate2}
                className="animate-bounce"
                alt="Untitled"
              />
            </div>
          )}
          <div className="col-10 col-sm-10 col-lg-7 border-4 border-l-0  border-r-0  my-2 py-3">
            <h3 className={`font-bold text-end container mb-0 mt-2`}>
              التراخيص والشهادات
            </h3>
            {/* eslint-disable-next-line array-callback-return */}
            {dataITI.slice(0, dataITICount).map((item) => {
              return (
                <Cart
                  key={item}
                  stylePerant="mt-4 flex justify-around gap-2 flex-wrap mx-auto px-2 pb-2"
                  titleBTN="تعديل"
                  urlImage={Edit}
                  titleIcon="font-bold flex gap-2 h-full pb-2"
                  styleImage="mx-auto w-75"
                  titleSC={"UX Design"}
                  desSC={"Information Technology Institute (ITI)"}
                  Certificate={CertificateImgITI}
                  actionBTN={() => {
                    console.log("funtion ITI");
                  }}
                />
              );
            })}
            {dataITI.length > 3 && (
              <button
                className="flex justify-center w-100 gap-2 bg-gray-200 mt-2 py-1 rounded-lg"
                onClick={() => {
                  if (showMore === "hide") {
                    setDataITICount(100);
                    setShowMore("");
                  } else {
                    setDataITICount(3);
                    setShowMore("hide");
                  }
                }}
              >
                <h4>{showMore === "hide" ? "المزيد" : "اقل"}</h4>
                <img
                  src={arrowMore}
                  className={`${showMore !== "hide" && "rotate-180"}`}
                  alt=""
                />
              </button>
            )}
          </div>
        </div>
      </div>
      <div
        className={` relative container mt-2 ${
          window.innerWidth > 900 ? "top-20 " : "top-5"
        }`}
      >
        {/* Contants */}
        <div
          className={`flex row  ${
            window.innerWidth > 900 ? "justify-end" : "justify-center"
          } container align-items-center`}
        >
          <div className="col-10 col-sm-10 col-lg-7 pb-4 border-4 border-l-0  border-t-0 border-r-0">
            <h3 className={`font-bold text-end container mb-4`}>المهارات</h3>
            <div className="flex justify-around gap-2 flex-wrap">
              {/* eslint-disable-next-line array-callback-return */}
              {skillsAdding.map((skillG) => {
                return (
                  <Skill
                    key={skillG}
                    actionDeleteSkill={() => {
                      const findArraySkills = skillsAdding.find((skill) => {
                        return skill === skillG;
                      });
                      const newItems = [];
                      // eslint-disable-next-line no-unused-vars
                      const newArraySkills = skillsAdding.find((skills) => {
                        findArraySkills !== skills && newItems.push(skills);
                      });
                      return setSkillsAdding(newItems);
                    }}
                    skillName={skillG}
                    imgSkill={""}
                    altSkill={`skill-${skillG}`}
                  />
                );
              })}
              <button
                className={`${styles.boxSkill} bg-gray-200 px-5 py-3  rounded-xl text-center flex gap-2`}
                onClick={() => {
                  Swal.fire({
                    title: "اختر المهارة",
                    html: `
                      <div >
                      <input id="skill" type="text" class="text-end border px-3 py-2" placeholder="ادخل المهارة"/> 
                      </div>
                    `,
                    confirmButtonText: "اضافة",
                    preConfirm: () => {
                      if (document.getElementById("skill").value === "") {
                        // toast.error("خطأ في اسم المهارة", {
                        //   position: "top-left",
                        //   autoClose: 3000,
                        //   hideProgressBar: false,
                        //   closeOnClick: true,
                        //   pauseOnHover: true,
                        //   draggable: true,
                        //   progress: undefined,
                        //   theme: "light",
                        // });
                      } else {
                        setSkillsAdding([
                          ...skillsAdding,
                          document.getElementById("skill").value,
                        ]);
                        return [document.getElementById("skill").value];
                      }
                    },
                  });
                }}
              >
                <img src={addSkill} alt="add-skill" />
              </button>
            </div>
          </div>
          {window.innerWidth > 900 && (
            <div className="col-3">
              <img src={men} className="" alt="Untitled" />
            </div>
          )}
        </div>
        <div className="col-10 col-sm-10 col-lg-7 container">
          <h3 className={`font-bold text-end `}>الخبرات العملية</h3>
          <Cart
            stylePerant="mt-4 flex justify-around gap-2 flex-wrap mx-auto px-2 pb-2"
            titleBTN="تعديل"
            urlImage={Edit}
            titleIcon="font-bold flex gap-2 h-full pb-2"
            styleImage="mx-auto w-75"
            titleSC={"UX Design"}
            desSC={"Information Technology Institute (ITI)"}
            Certificate={CertificateImgITI}
            actionBTN={() => {
              console.log("function exprians");
            }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
