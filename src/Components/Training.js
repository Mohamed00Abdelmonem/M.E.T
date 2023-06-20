/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import styles from "./../Pages/CertificateReq/Home.module.css";
import { BarLoader } from "react-spinners";
import Menu from "./Home/Menu";
// Get Images
import bgITI from "./../Images/Certificate/bgCarttreaining.png";
import iconITI from "./../Images/Certificate/1519885145295 1.png";
import dateIcon from "./../Images/Certificate/Icons/Date.png";
import location from "./../Images/Certificate/Icons/Location.png";
import user3 from "./../Images/Certificate/Icons/3 User.png";
import arrow from "./../Images/Certificate/Icons/Arrow---Left-Square.png";
import doneClip from "./../Images/Certificate/Icons/Clip path group.png";
import arrowBack from "./../Images/Home/Icons/Arrow---Right-Square.png";

import Footer from "./Home/Footer";
import isMobilePhone from "validator/lib/isMobilePhone";
import { useRecoilState } from "recoil";
import { subTrainings } from "../Data/Recoil/Main";

const trainings = [
  {
    id: 1,
    title: "باك اند",
    descrebtion: "فرصة تدريب باك اند",
    detiual: `هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال هذا النص مجرد مثال 
هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال  `,
    bgTrain: bgITI || "",
    iconTrain: iconITI || "",
    trainStart: { d: 23, m: 5, y: 2023 },
    trainEnd: { d: 23, m: 5, y: 2023 },
    trainPlace: "المنصورة",
    trainCount: 24,
  },
  {
    id: 2,
    title: "فرون اند",
    descrebtion: "فرصة تدريب فرونت اند",
    detiual: `هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال هذا النص مجرد مثال 
هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال  `,
    bgTrain: bgITI || "",
    iconTrain: iconITI || "",
    trainStart: { d: 23, m: 5, y: 2023 },
    trainEnd: { d: 23, m: 5, y: 2023 },
    trainPlace: "المنصورة",
    trainCount: 24,
  },
  {
    id: 3,
    title: "جرافيك ديزاين",
    descrebtion: "فرصة تدريب جرافيك ديزاين",
    detiual: `هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال هذا النص مجرد مثال 
هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال  `,
    bgTrain: bgITI || "",
    iconTrain: iconITI || "",
    trainStart: { d: 23, m: 5, y: 2023 },
    trainEnd: { d: 23, m: 5, y: 2023 },
    trainPlace: "المنصورة",
    trainCount: 24,
  },
  {
    id: 4,
    title: "فول ستاك",
    descrebtion: "فرصة تدريب فول ستاك",
    detiual: `هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال هذا النص مجرد مثال 
هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال  `,
    bgTrain: bgITI || "",
    iconTrain: iconITI || "",
    trainStart: { d: 23, m: 5, y: 2023 },
    trainEnd: { d: 23, m: 5, y: 2023 },
    trainPlace: "المنصورة",
    trainCount: 24,
  },
];

function Training() {
  // Form Training
  const [bg, setBg] = useState(0);
  const [openTraining, setOpenTraining] = useState(false);

  const [fullName, setFullName] = useState("");
  const [barthDay, setDarthDay] = useState("");
  const [section, setSection] = useState("");
  const [phoneNumber, setPhoneNamber] = useState("");
  const [errorsFullName, setErrorsFullName] = useState("");
  const [errorsBarthDay, setErrorsDarthDay] = useState("");
  const [errorsSection, setErrorsSection] = useState("");
  const [errorPhoneNumber, setErrorsPhoneNamber] = useState("");
  const [successfulForm, setSuccessfulForm] = useState(false);
  const [dataSubTrainings, setSubTrainings] = useRecoilState(subTrainings);
  const mobilePhone = isMobilePhone(`${phoneNumber}`, "ar-EG");
  const [trainData, setTrainData] = useState({});
  const submitTraining = (e) => {
    e.preventDefault();
    if (!fullName) {
      setErrorsFullName("الاسم مطلوب");
    } else if (!barthDay) {
      setErrorsDarthDay("تاريخ الميلاد مطلوب");
    } else if (!section) {
      setErrorsSection("يجب اختيار القسم");
    } else if (!phoneNumber || phoneNumber.length !== 11) {
      setErrorsPhoneNamber("ادخل رقم تلفون صحيح");
    } else {
      setOpenTraining(false);
      setSuccessfulForm(true);
      const newSubTraining = {
        fullName,
        barthDay,
        section,
        phoneNumber,
        trainData,
      };
      setSubTrainings([...dataSubTrainings, newSubTraining]);
      setTimeout(() => {
        navigate("/TrainingOpportunity");
      }, 1000);
    }
  };

  const [, setShareUrl] = useState("");
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const localStorageID = window.localStorage.getItem("ID");
  if (localStorageID == null) {
    navigate("/login");
  }
  const [looding, setLooding] = useState(true);
  const findDataTraining = () => {
    const url = pathname.split("/");
    const routId = url.slice(-1);
    const id = routId.join();
    const dataTraining = trainings.filter((training) => +id === training.id);
    if (dataTraining) {
      setShareUrl(`https://alumni-iota.vercel.app${pathname}`);
      return setTrainData(...dataTraining);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLooding(false);
    }, 1000);
    findDataTraining();
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
      <div className={` ${window.innerWidth > 900 && "flex "}`}>
        {window.innerWidth < 900 && (
          <div className={`${styles.fixNav} `}>
            <div
              className={`flex justify-evenly pt-3 px-3 bg-stone-100 ${
                window.innerWidth > 900 ? "bg-white" : "bg-slate-100"
              }`}
            >
              <Menu />
            </div>
          </div>
        )}
        <div
          className={`  ${
            window.innerWidth > 900 ? "relative" : ""
          } container mt-2 ${
            window.innerWidthbgUser > 900 ? "top-20" : "top-5"
          }`}
        >
          <div
            className={`flex gap-3 justify-end align-items-center  ${
              window.innerWidth > 900 ? "mt-20" : "mt-2"
            }`}
          >
            <h1 className={`text-end font-bold`}>احدث فرص التدريب </h1>
            <div
              className="rounded-lg cursor-pointer"
              onClick={() => navigate("/TrainingOpportunity")}
            >
              <img src={arrowBack} className="rotate-180 " alt="" />
            </div>
          </div>
          <h6 className="font-sans text-end mt-2 text-slate-500">
            فرص تدريب / {trainData.title}
          </h6>
          <div className="flex justify-center">
            <img
              className={`rounded-xl my-3  w-100 max-w-4xl`}
              src={trainData.bgTrain}
              alt="ITI"
            />
          </div>
          <div className="flex justify-end mt-3 gap-4">
            <div>
              <h2 className="text-end">{trainData.title}</h2>
              <h6 className="text-end text-slate-500">
                {trainData.descrebtion}
              </h6>
            </div>
            <div className={`w-fit h-fit rounded-full `}>
              <img
                src={trainData.iconTrain}
                className={`${styles.boxBG} w-75`}
                alt={trainData.title}
              />
            </div>
          </div>
          <div className="text-end mt-3">
            <h2 className="font-semibold">:عن التدريب</h2>
            <p>{trainData.detiual}</p>
          </div>
          <div className="text-end mt-3">
            <h2 className="font-semibold">:وقت البدء</h2>
            <div className="flex gap-2 justify-end">
              <p>
                {trainData.trainStart.d}/{trainData.trainStart.m}/
                {trainData.trainStart.y}
              </p>
              <img src={dateIcon} className="w-8 h-8" alt="Date" />
            </div>
          </div>
          <div className="text-end mt-3">
            <h2 className="font-semibold">:وقت الانتهاء</h2>
            <div className="flex gap-2 justify-end">
              <p>
                {trainData.trainEnd.d}/{trainData.trainEnd.m}/
                {trainData.trainEnd.y}
              </p>
              <img src={dateIcon} className="w-8 h-8" alt="Date" />
            </div>
          </div>
          <div className="text-end mt-3">
            <h2 className="font-semibold">:مكان التدريب</h2>
            <div className="flex gap-2 justify-end">
              <p>{trainData.trainPlace}</p>
              <img src={location} className="w-8 h-8" alt="Date" />
            </div>
          </div>
          <div className="text-end mt-3">
            <h2 className="font-semibold">:عدد الأشخاص</h2>
            <div className="flex gap-2 justify-end">
              شخصاً
              <p>{trainData.trainCount}</p>
              <img src={user3} className="w-8 h-8" alt="Date" />
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <button
              onClick={() => {
                window.scroll(0, 0);
                setOpenTraining(true);
              }}
              className={`flex gap-5 align-items-center ${styles.colorBTN} px-4 py-2 rounded-xl text-white font-semibold  `}
            >
              <img src={arrow} alt="arrow" />
              <span className={`fs-5 `}>احجز الان مقعداً</span>
            </button>
          </div>
        </div>
        {window.innerWidth > 900 && (
          <div className={`${styles.fixNav}`}>
            <div
              className={`flex justify-evenly pt-3 px-3  bg-stone-100 ${
                window.innerWidth > 900 ? "bg-white" : "bg-slate-100"
              }`}
            >
              <Menu />
            </div>
          </div>
        )}
      </div>
      <Footer />
      {openTraining && (
        <div
          onClick={() => setOpenTraining(false)}
          className={`absolute ${styles.blurHiden}`}
        ></div>
      )}
      {openTraining && (
        <div
          className={`mt-5 ${styles.boxForm} ${styles.boxBG} pb-16 pt-10 px-12 rounded-2xl leading-8 bg-white  text-end`}
        >
          <h2 className="font-semibold">من فضلك ادخل بيناتك</h2>
          <form className="mt-4" onSubmit={(e) => submitTraining(e)}>
            <div className="flex flex-col">
              <label htmlFor="fullName" className="font-semibold ">
                اسم الطالب بالكامل
              </label>
              <input
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  setErrorsFullName("");
                }}
                className={`${styles.boxBG} rounded-lg px-2 py-1`}
                id="fullName"
                type="text"
                name="fullName"
              />
              <div className="bg-red-400 text-center text-white mt-2 rounded-lg">
                {errorsFullName}
              </div>
            </div>
            <div className="flex gap-1 justify-around mt-3">
              <input
                className={`${styles.boxBG} rounded-lg px-2 py-1`}
                type="date"
                id="barDay"
                name="barDay"
                value={barthDay}
                onChange={(e) => {
                  setDarthDay(e.target.value);
                  setErrorsDarthDay("");
                }}
              />
              <label htmlFor="barDay" className="font-semibold">
                تاريخ الميلاد
              </label>
            </div>
            <div className="bg-red-400 text-center text-white mt-2 rounded-lg">
              {errorsBarthDay}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold">شعبة</label>
              {/* الشعبة ==>  btn 3*/}
              <div className={`flex justify-end text-end  flex-nowrap`}>
                <div
                  className={`flex gap-5 justify-between mx-auto   flex-nowrap `}
                >
                  <div className="sectionBtn flex flex-col gap-2">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setBg(1);
                        setSection("نظم معلومات ادارية");
                        setErrorsSection("");
                      }}
                      className={` ${
                        bg === 1
                          ? "bg-slate-800 text-white"
                          : "bg-zinc-100 text-black"
                      }   ${
                        window.innerWidth > 600 && "hover:bg-slate-800"
                      } px-5 py-1 rounded-lg fs-6 ${styles.boxInputShado}`}
                    >
                      نظم معلومات ادارية
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setBg(2);
                        setSection("علوم الحاسب");
                        setErrorsSection("");
                      }}
                      className={`${
                        bg === 2
                          ? "bg-slate-800 text-white"
                          : "bg-zinc-100 text-black"
                      }  ${
                        window.innerWidth > 600 && "hover:bg-slate-800"
                      } px-5 py-1 rounded-lg fs-6${styles.boxInputShado}`}
                    >
                      علوم الحاسب
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setBg(3);
                        setSection("محاسبة");
                        setErrorsSection("");
                      }}
                      className={`${
                        bg === 3
                          ? "bg-slate-800 text-white"
                          : "bg-zinc-100 text-black"
                      }   ${
                        window.innerWidth > 600 && "hover:bg-slate-800"
                      } px-5 py-1 rounded-lg fs-6 ${styles.boxInputShado}`}
                    >
                      محاسبة
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-red-400 text-center text-white mt-2 rounded-lg">
                {errorsSection}
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <label htmlFor="phoneNumber" className="font-semibold">
                رقم الموبايل
              </label>
              <div className={`${styles.input_phone}`}>
                <div className={`${styles.boxBG} rounded-lg`}>
                  <input
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNamber(e.target.value);
                      setErrorsPhoneNamber("");
                    }}
                    type="text"
                    id="phoneNumber"
                    placeholder="رقم الموبايل"
                    className={`${styles.input_login} bg-transparent   ${styles.boxInputShado} focus:outline-0  px-2 py-2  text-right rounded-lg`}
                  />
                  <span>02</span>
                </div>
                <div className={`text-gray-400 fs-6 font-sans`}>
                  ({phoneNumber.length}/11){" "}
                  {phoneNumber.length === 11 &&
                  errorPhoneNumber === "" &&
                  mobilePhone
                    ? "✅"
                    : "✖️"}
                </div>
              </div>

              <div className="bg-red-400 text-center text-white mt-2 rounded-lg">
                {errorPhoneNumber}
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <button
                className={`flex gap-2 align-items-center  ${styles.colorBTN} px-4 py-2 rounded-xl text-white font-semibold  `}
              >
                <img src={arrow} alt="arrow" />
                <span className={`fs-5`}>احجز الان مقعداً</span>
              </button>
            </div>
          </form>
        </div>
      )}
      {successfulForm && (
        <>
          <div
            onClick={() => setOpenTraining(false)}
            className={`absolute ${styles.blurHiden}`}
          ></div>
          <div
            className={`mt-5 ${styles.boxForm} ${styles.boxBG} pb-16 pt-10 px-12 rounded-2xl leading-8 bg-white  text-end`}
          >
            <h2 className="font-semibold text-center">تم حجز مقعدك بنجاح</h2>
            <img src={doneClip} className="w-75 mx-auto" alt="successful" />
          </div>
        </>
      )}
    </>
  );
}

export default Training;
