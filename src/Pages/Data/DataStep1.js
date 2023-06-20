import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
import HeaderData from "../../Components/HeaderData/HeaderData";
import Steps from "../../Components/Steps/Steps";
import styles from "./Data.module.css";
import { useRecoilState } from "recoil";
import { step1 } from "../../Data/Recoil/Main";
import { BarLoader } from "react-spinners";

import arrow from "./../../Images/Home/Icons/Arrow---Right-Square.png";

function DataStep1() {
  const [step1Data, setStep1] = useRecoilState(step1);
  const navigate = useNavigate();
  const localStorageID = window.localStorage.getItem("ID");
  const [textTitle] = useState(
    "نرجو العناية باستيفاء هذا النموذج بكل دقة حيث يتوقف علية كتابة الشهادة الأصلية للبكالوريوس وذلك طبقا لشهادة الميلاد ."
  );
  const [fullName, setFullName] = useState(
    `${step1Data[0].fullName ? step1Data[0].fullName : ""}`
  );
  const [id, setId] = useState(`${step1Data[0].id ? step1Data[0].id : ""}`);
  const [birthDay, setBirthDay] = useState(
    `${step1Data[0].birthDay ? step1Data[0].birthDay : ""}`
  );
  const [countre, setCountre] = useState(
    `${step1Data[0].countre ? step1Data[0].countre : ""}`
  );
  const [errorName, setErrorName] = useState("");
  const [errorId, setErrorId] = useState("");
  const [errorIdCount, setErrorIdCount] = useState("");
  const [errorDate, setErrorDate] = useState("");
  const [errorCountre, setErrorCountre] = useState("");
  const stepNext = (e) => {
    e.preventDefault();
    if (!fullName) {
      setFullName("");
      setErrorName("حقل الاسم مطلوب");
      // toast.warn("ادخل الاسم", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    } else if (!id) {
      setId("");
      setErrorId("حقل رقم الهوية مطلوب");
      // toast.warn("ادخل الهوية الوطنية", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    } else if (+id.length !== 14) {
      setErrorIdCount("يجب ان تكون الهوية مكونة من 14 رقم");
      // toast.warn("يجب ان تكون الهوية مكونة من 14 رقم", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
      // eslint-disable-next-line use-isnan
    } else if (+id === NaN) {
      setErrorIdCount("يجب ان تكون الهوية مكونة من 14 رقم");
    } else if (!birthDay) {
      setBirthDay("");
      setErrorDate("تاريخ الميلاد مطلوب");
      // toast.warn("ادخل تارخ ميلاد", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    } else if (!countre) {
      setCountre("");
      setErrorCountre("جهة الميلاد مطلوبة");
      // toast.warn("اختر جهة ميلاد", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    } else {
      const dataStep1 = {
        fullName,
        id,
        birthDay,
        countre,
      };
      setStep1([dataStep1]);
      navigate("/data/steps/2");
    }
  };
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
  if (window.innerWidth < 532) {
    return (
      <>
        {localStorageID == null && <Navigate to={`/login`} />}
        <button
          onClick={() => {
            navigate("/");
          }}
          className={`bg-white absolute top-5 right-5 z-50 p-2 rounded-xl ${styles.boxBG}`}
        >
          <img src={arrow} className="rotate-180" alt="arrow" />
        </button>
        <div
          className={`${styles.bgMain}  flex justify-center relative  align-bottom`}
        >
          <div
            className={`${styles.mainContenar} lg:max-w-lg md:max-w-lg sm:max-w-lg   py-4 absolute  bottom-0   flex justify-center flex-col text-center`}
          >
            <div className="px-1">
              <HeaderData
                title={textTitle}
                padding={window.innerWidth < 600 ? " px-4" : ""}
              />
              {/* Steps => Step One {1} */}
              <Steps
                step1={styles.stepActive}
                step2={styles.stepDefulte}
                step3={styles.stepDefulte}
              />
            </div>
            <div className="px-2">
              <form method="POST" className={`flex mt-4 flex-col gap-2`}>
                {/* اسم الطالب */}
                <div
                  className={` flex flex-col justify-end gap-2 text-center  flex-nowrap `}
                >
                  <label
                    htmlFor="stude_name"
                    className="fs-4 ms-auto font-bold text-nowrap"
                  >
                    :اسم الطالب بالكامل
                  </label>
                  <input
                    onChange={(e) => {
                      setFullName(e.target.value);
                      setErrorName("");
                    }}
                    defaultValue={fullName}
                    id="stude_name"
                    type={`text`}
                    name={`studeName`}
                    title="ادخل الاسم بالكامل"
                    className={`${styles.input_login}  ${styles.boxInputShado} focus:outline-0  px-2 py-2  text-right rounded-lg`}
                  />
                </div>
                <span
                  className={`bg-red-400  text-stone-100 fs-6 font-bold rounded-lg`}
                >
                  {errorName}
                </span>
                {/* رقم البطالقة  */}
                <div
                  className={`flex flex-col justify-end text-end  flex-nowrap `}
                >
                  <label
                    htmlFor="card_number"
                    className="fs-4  ms-auto font-bold text-nowrap "
                  >
                    <span className="fs-6 font-normal">{`${+id.length}/14`}</span>{" "}
                    :رقم البطاقة
                  </label>

                  <input
                    onChange={(e) => {
                      setId(e.target.value);
                      setErrorId("");
                      setErrorIdCount("");
                    }}
                    defaultValue={id}
                    id="card_number"
                    type={`number`}
                    name={`cardNumber`}
                    title="ادخل رقم البطاقة"
                    className={`${styles.input_login} ${styles.boxInputShado}  focus:outline-0  px-2 py-2  text-right rounded-lg`}
                  />
                </div>
                <span
                  className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
                >
                  {errorId}
                  {errorIdCount}
                </span>
                {/* تاريخ الميلاد  */}
                <div
                  className={`flex justify-end text-end  flex-wrap-reverse `}
                >
                  <input
                    onChange={(e) => {
                      setBirthDay(e.target.value);
                      setErrorDate("");
                    }}
                    id="date_birth"
                    type={`date`}
                    name={`dateBirth`}
                    // value="2002-01-01"
                    defaultValue={birthDay}
                    title="اختر تارخ الميلاد"
                    className={`${styles.input_login}  ${styles.boxInputShado} me-auto  focus:outline-0  px-2 py-2  text-right rounded-lg`}
                  />
                  <label
                    htmlFor="date_birth"
                    className="fs-4 ms-auto font-bold text-nowrap"
                  >
                    تاريخ الميلاد
                  </label>
                </div>
                <span
                  className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
                >
                  {errorDate}
                </span>
                {/* جهة العمل ==> Chack box */}
                <div
                  className={` flex justify-end text-end  flex-wrap-reverse `}
                >
                  <div className={`flex gap-5 justify-between flex-nowrap `}>
                    <div className="flex align-items-center gap-1">
                      <label htmlFor="Outside">الخارج</label>
                      <input
                        checked={`${countre === "Outside" ? "checked" : ""}`}
                        onChange={(e) => {
                          setCountre(e.target.value);
                          setErrorCountre("");
                        }}
                        defaultValue={countre}
                        id="Outside"
                        type={`radio`}
                        name={`Birthplace`}
                        value="Outside"
                        title="في حالة اذا كنت مصري الجنسة"
                        className={`${styles.input_login}  ${styles.boxInputShado} ms-auto focus:outline-0  px-2 py-2  text-right rounded-lg`}
                      />
                    </div>

                    <div className="flex align-items-center gap-1">
                      <label htmlFor="eg">مصر</label>
                      <input
                        checked={`${countre === "eg" ? "checked" : ""}`}
                        onChange={(e) => {
                          setCountre(e.target.value);
                          setErrorCountre("");
                        }}
                        defaultValue={countre}
                        id="eg"
                        type={`radio`}
                        name={`Birthplace`}
                        value="eg"
                        title="في حالة اذا كنت مصري الجنسة"
                        className={`${styles.input_login}  ${styles.boxInputShado} ms-auto focus:outline-0  px-2 py-2  text-right rounded-lg`}
                      />
                    </div>
                  </div>

                  <label className="fs-4 ms-auto font-bold text-nowrap">
                    جهة الميلاد
                  </label>
                </div>
                <span
                  className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
                >
                  {errorCountre}
                </span>
                <button
                  onClick={(e) => stepNext(e)}
                  className={`${styles.btn_submit} ml-auto fs-5 text-white w-fit px-8 py-1`}
                >
                  التالي
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      {localStorageID == null && <Navigate to={`/login`} />}
      <button
        onClick={() => {
          navigate("/");
        }}
        className={`bg-white absolute top-5 right-5 z-50 p-2 rounded-xl ${styles.boxBG}`}
      >
        <img src={arrow} className="rotate-180" alt="arrow" />
      </button>
      <div
        className={`${styles.bgMain}  flex justify-center relative  align-bottom`}
      >
        <div
          className={`${styles.mainContenar} lg:max-w-lg md:max-w-lg sm:max-w-lg  pb-10 pt-3 absolute  bottom-0   flex justify-center flex-col text-center`}
        >
          <div className="px-11">
            <HeaderData title={textTitle} />
            {/* Steps => Step One {1} */}
            <Steps
              step1={styles.stepActive}
              step2={styles.stepDefulte}
              step3={styles.stepDefulte}
            />
          </div>
          <div className="">
            {/* Input Login */}
            <form method="GET" className={`flex mt-4 flex-col gap-4 px-4`}>
              <div
                className={` flex justify-end gap-2 text-center  flex-nowrap `}
              >
                <input
                  onChange={(e) => {
                    setFullName(e.target.value);
                    setErrorName("");
                  }}
                  defaultValue={fullName}
                  id="stude_name"
                  type={`text`}
                  name={`studeName`}
                  title="ادخل الاسم بالكامل"
                  className={`${styles.input_login}  ${styles.boxInputShado} focus:outline-0  px-2 py-2  text-right rounded-lg`}
                />
                <label
                  htmlFor="stude_name"
                  className="fs-4 mx-auto font-bold text-nowrap"
                >
                  اسم الطالب بالكامل
                </label>
              </div>
              <span
                className={`bg-red-400  text-stone-100 fs-6 font-bold rounded-lg`}
              >
                {errorName}
              </span>
              <div className={`flex justify-end text-end  flex-nowrap `}>
                <input
                  onChange={(e) => {
                    setId(e.target.value);
                    setErrorId("");
                    setErrorIdCount("");
                  }}
                  defaultValue={id}
                  id="card_number"
                  type={`text`}
                  name={`cardNumber`}
                  title="ادخل رقم البطاقة"
                  className={`${styles.input_login}    ${styles.boxInputShado}  focus:outline-0  px-2 py-2  text-right rounded-lg`}
                />
                <label
                  htmlFor="card_number"
                  className="fs-4  mx-auto font-bold text-nowrap "
                >
                  <span className="fs-6 font-normal">{`${+id.length}/14`}</span>{" "}
                  رقم البطاقة
                </label>
              </div>
              <span
                className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
              >
                {errorId}
                {errorIdCount}
              </span>
              <div className={`flex justify-end text-end  flex-nowrap `}>
                <input
                  onChange={(e) => {
                    setBirthDay(e.target.value);
                    setErrorDate("");
                  }}
                  id="date_birth"
                  type={`date`}
                  name={`dateBirth`}
                  // value="2002-01-01"
                  defaultValue={birthDay}
                  title="اختر تاريخ الميلاد"
                  className={`${styles.input_login}  ${styles.boxInputShado} me-auto  focus:outline-0  px-2 py-2  text-right rounded-lg`}
                />
                <label
                  htmlFor="date_birth"
                  className="fs-4 mx-auto font-bold text-nowrap"
                >
                  تاريخ الميلاد
                </label>
              </div>
              <span
                className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
              >
                {errorDate}
              </span>
              {/* جهة العمل ==> Chack box */}
              <div className={` flex justify-end text-end  flex-nowrap `}>
                <div
                  className={`flex gap-5 justify-between me-5   flex-nowrap `}
                >
                  <div className="flex align-items-center gap-1">
                    <label htmlFor="Outside">الخارج</label>

                    <input
                      checked={`${countre === "Outside" ? "checked" : ""}`}
                      onChange={(e) => {
                        setCountre(e.target.value);
                        setErrorCountre("");
                      }}
                      defaultValue={countre}
                      id="Outside"
                      type={`radio`}
                      name={`Birthplace`}
                      value="Outside"
                      title="في حالة اذا كنت مصري الجنسة"
                      className={`${styles.input_login}  ${styles.boxInputShado} ms-auto focus:outline-0  px-2 py-2  text-right rounded-lg`}
                    />
                  </div>
                  <div className="flex align-items-center gap-1">
                    <label htmlFor="eg">مصر</label>
                    <input
                      checked={`${countre === "eg" ? "checked" : ""}`}
                      onChange={(e) => {
                        setCountre(e.target.value);
                        setErrorCountre("");
                      }}
                      defaultValue={countre}
                      id="eg"
                      type={`radio`}
                      name={`Birthplace`}
                      value="eg"
                      title="في حالة اذا كنت مصري الجنسة"
                      className={`${styles.input_login}  ${styles.boxInputShado} ms-auto focus:outline-0  px-2 py-2  text-right rounded-lg`}
                    />
                  </div>
                </div>

                <label className="fs-4 mx-auto font-bold text-nowrap">
                  جهة الميلاد
                </label>
              </div>
              <span
                className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
              >
                {errorCountre}
              </span>
              <button
                onClick={stepNext}
                className={`${styles.btn_submit} ml-auto fs-5 text-white w-fit px-8 py-1`}
              >
                التالي
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataStep1;
