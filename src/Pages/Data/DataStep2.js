/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import HeaderData from "../../Components/HeaderData/HeaderData";
import Steps from "../../Components/Steps/Steps";
import { BgAtom, step1, step2 } from "../../Data/Recoil/Main";
import styles from "./Data.module.css";
import { useEffect } from "react";

function DataStep2() {
  const navigate = useNavigate();
  const [step1Data] = useRecoilState(step1);
  useEffect(() => {
    if (step1Data[0].length === 0) {
      navigate("/data/steps/1/");
    }
  }, []);
  const [step2Data, setStep2] = useRecoilState(step2);

  const localStorageID = window.localStorage.getItem("ID");
  const [textTitle] = useState(
    "نرجو العناية باستيفاء هذا النموذج بكل دقة حيث يتوقف علية كتابة الشهادة الأصلية للبكالوريوس وذلك طبقا لشهادة الميلاد ."
  );
  const [bg, setBg] = useRecoilState(BgAtom);
  // Data
  const [nationality, setNationality] = useState(
    `${step2Data[0].nationality ? step2Data[0].nationality : ""}`
  );
  const [type, setType] = useState(
    `${step2Data[0].type ? step2Data[0].type : ""}`
  );
  const [Section, setSection] = useState(
    `${step2Data[0].Section ? step2Data[0].Section : ""}`
  );

  // Error handel
  const [errorNationality, setErrorNationalty] = useState("");
  const [errortype, setErrortype] = useState("");
  const [errorSection, setErrorSection] = useState("");

  const stepNext = (e) => {
    e.preventDefault();
    if (!nationality) {
      setErrorNationalty("يجب عليك أختيار جنسية");
      // toast.warn("يجب عليك أختيار جنسية", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    } else if (!type) {
      setErrortype("يجب عليك اخيار نوع");
      // toast.warn("يجب عليك اخيار نوع", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
    } else if (!Section) {
      setErrorSection("يجب عليك اختيار نوع الشعبة");
      // toast.warn("يجب عليك اختيار نوع الشعبة", {
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
      const dataStep2 = {
        nationality,
        type,
        Section,
      };
      setStep2([dataStep2]);
      navigate("/data/steps/3/");
    }
  };
  return (
    <>
      {localStorageID == null && <Navigate to={`/login`} />}
      <div
        className={`${styles.bgMain}  flex justify-center relative  align-bottom`}
      >
        <div
          className={`${styles.mainContenar} lg:max-w-lg md:max-w-lg sm:max-w-lg  pb-20 py-4 absolute  bottom-0   flex justify-center flex-col text-center`}
        >
          <div className="px-11">
            <HeaderData title={textTitle} />
            {/* Steps => Step One {1} */}
            <Steps
              step1={styles.stepDefulte}
              step2={styles.stepActive}
              step3={styles.stepDefulte}
            />
          </div>
          <div>
            <form method="GET" className={`flex mt-4 flex-col gap-2 px-4`}>
              <div
                className={` flex justify-end gap-2 text-center  flex-nowrap `}
              >
                <select
                  onChange={(e) => {
                    setNationality(e.target.value);
                    setErrorNationalty("");
                  }}
                  defaultValue={nationality}
                  title="اختر الجنسية"
                  name="sexuality"
                  id="pet-select"
                  className={`${styles.input_login}  ${styles.boxInputShado} mx-auto focus:outline-0  px-2 py-2  text-right rounded-lg`}
                >
                  <option value="" className="text-end">
                    --اختر الجنسية الخاصة بك--
                  </option>
                  <option value="eg" className="text-start">
                    مصري
                  </option>
                  <option value="outlandish">اجنبي</option>
                </select>

                <label
                  htmlFor="pet-select"
                  className="fs-4 mx-auto font-bold text-nowrap"
                >
                  الجنسية
                </label>
              </div>
              <span
                className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
              >
                {errorNationality}
              </span>
              {/* جهة العمل ==> Chack box */}
              <div className={` flex justify-end text-end  flex-nowrap `}>
                <div
                  className={`flex gap-5 justify-between mx-auto   flex-nowrap `}
                >
                  <div className="flex align-items-center gap-1">
                    <label htmlFor="female">انثي</label>
                    <input
                      checked={`${type === "female" ? "checked" : ""}`}
                      onChange={(e) => {
                        setType(e.target.value);
                        setErrortype("");
                      }}
                      defaultValue={type}
                      id="female"
                      type={`radio`}
                      name={`type`}
                      value="female"
                      title="في حالة اذا كنت انثي"
                      className={`${styles.input_login}  ${styles.boxInputShado} ms-auto focus:outline-0  px-2 py-2  text-right rounded-lg`}
                    />
                  </div>
                  <div className="flex align-items-center gap-1">
                    <label htmlFor="type">ذكر</label>

                    <input
                      checked={`${type === "male" ? "checked" : ""}`}
                      onChange={(e) => {
                        setType(e.target.value);
                        setErrortype("");
                      }}
                      defaultValue={type}
                      id="type"
                      type={`radio`}
                      name={`type`}
                      value="male"
                      title="في حالة اذا كنت ذكر"
                      className={`${styles.input_login}  ${styles.boxInputShado} ms-auto focus:outline-0  px-2 py-2  text-right rounded-lg`}
                    />
                  </div>
                </div>
                <label className="fs-4 mx-auto font-bold text-nowrap">
                  نوع
                </label>
              </div>
              <span
                className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
              >
                {errortype}
              </span>
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
                        setErrorSection("");
                      }}
                      className={` ${
                        bg === 1
                          ? "bg-slate-800 text-white"
                          : "bg-zinc-100 text-black"
                      }   ${
                        window.innerWidth > 600 && "hover:bg-slate-800"
                      } px-3 py-2 rounded-lg fs-5 ${styles.boxInputShado}`}
                    >
                      نظم معلومات ادارية
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setBg(2);
                        setSection("علوم الحاسب");
                        setErrorSection("");
                      }}
                      className={`${
                        bg === 2
                          ? "bg-slate-800 text-white"
                          : "bg-zinc-100 text-black"
                      }  ${
                        window.innerWidth > 600 && "hover:bg-slate-800"
                      }  px-3 py-2 rounded-lg fs-5 ${styles.boxInputShado}`}
                    >
                      علوم الحاسب
                    </button>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setBg(3);
                        setSection("محاسبة");
                        setErrorSection("");
                      }}
                      className={`${
                        bg === 3
                          ? "bg-slate-800 text-white"
                          : "bg-zinc-100 text-black"
                      }   ${
                        window.innerWidth > 600 && "hover:bg-slate-800"
                      } px-3 py-2 rounded-lg fs-5   ${styles.boxInputShado}`}
                    >
                      محاسبة
                    </button>
                  </div>
                </div>
                <label className="fs-4 mx-auto font-bold text-nowrap">
                  شعبة
                </label>
              </div>
              <span
                className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
              >
                {errorSection}
              </span>
              <div className={`flex justify-around mt-2`}>
                <button
                  title="الرجوع الي الخطوة السابقة"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/data/steps/1/");
                  }}
                  className={`hover:text-white hover:bg-slate-800   mr-auto fs-5 font-bold w-fit rounded-2xl px-8 py-1`}
                >
                  رجوع
                </button>
                <button
                  onClick={stepNext}
                  className={`${styles.btn_submit} ml-auto fs-5 font-bold text-white w-40 px-8 py-1`}
                >
                  التالي
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataStep2;
