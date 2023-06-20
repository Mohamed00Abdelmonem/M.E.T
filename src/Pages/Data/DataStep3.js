/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import logo from "./../../Images/Login/logo 1.jpg";
import style from "./Data.module.css";
import Steps from "../../Components/Steps/Steps";
import { RegionDropdown } from "react-country-region-selector";
import { step2, step3 } from "../../Data/Recoil/Main";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import isMobilePhone from "validator/lib/isMobilePhone";
function DataStep3() {
  const navigate = useNavigate();
  const [step2Data] = useRecoilState(step2);

  useEffect(() => {
    if (step2Data[0].length === 0) {
      navigate("/data/steps/2/");
    }
  }, []);

  const [step3Data, setStep3] = useRecoilState(step3);
  const [country, ] = useState("Egypt");
  // Values Inputs
  const [region, setRegion] = useState(
    `${step3Data[0].region ? step3Data[0].region : ""}`
  );
  const [city, setCity] = useState(
    `${step3Data[0].city ? step3Data[0].city : ""}`
  );
  const [locaiton1, setLocaiton1] = useState(
    `${step3Data[0].locaiton1 ? step3Data[0].locaiton1 : ""}`
  );
  const [locaiton2, setLocaiton2] = useState(
    `${step3Data[0].locaiton2 ? step3Data[0].locaiton2 : ""}`
  );
  const [phoneNumber, setphoneNumber] = useState(
    `${step3Data[0].phoneNumber ? step3Data[0].phoneNumber : ""}`
  );

  const [errorMohafza, setErrorMohafza] = useState("");
  const [errorCity, setErrorCity] = useState("");
  const [errorLoc1Name, setErrorLoc1Name] = useState("");
  const [errorLoc2Name, setErrorLoc2Name] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState("");
  // chack isMobilePhone in eg
  const mobilePhone = isMobilePhone(`${phoneNumber}`, "ar-EG");

  const submitData = (e) => {
    e.preventDefault();
    if (!region) {
      setErrorMohafza("يجب اختيار محافظة");
    } else if (!city) {
      setErrorCity("يحب ادخال مدينة");
    } else if (!locaiton1) {
      setErrorLoc1Name("يحب ادخال عنوان اول");
    } else if (!locaiton2) {
      setErrorLoc2Name("يحب ادخال عنوان ثاني");
    } else if (!phoneNumber) {
      setErrorPhoneNumber("يحب ادخال رقم هاتف");
    } else if (phoneNumber.length !== 11) {
      setErrorPhoneNumber(
        "رقم الهاتف يجب ان يتكون من 11 ارقام فقط التي بعد رقم البلد"
      );
      // eslint-disable-next-line use-isnan
    } else if (!mobilePhone) {
      setErrorPhoneNumber("قم بأزالة الحروف");
    } else {
      const dataStep3 = {
        region,
        city,
        locaiton1,
        locaiton2,
        phoneNumber,
      };
      setStep3([dataStep3]);
      navigate("/data/steps/4");
    }
  };
  // <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
  return (
    <>
      <div
        className={`${style.bgMain} flex justify-center relative align-bottom`}
      >
        <div className={`${style.box_form} absolute bottom-0`}>
          <img src={logo} className={style.imgTop} alt="" />
          <p className={`${style.textP} font-bold`}>
            نرجو العناية باستيفاء هذا النموذج بكل دقة حيث يتوقف علية كتابة
            الشهادة الأصلية للبكالوريوس وذلك طبقا لشهادة الميلاد .
          </p>
          <div>
            <Steps
              step1={style.stepDefulte}
              step2={style.stepDefulte}
              step3={style.stepActive}
            />
          </div>

          <form action="" className={style.formData}>
            <div className="">
              <label htmlFor="mohafza" className={`font-bold fs-5`}>
                المحافظة
              </label>
              <RegionDropdown
                country={country}
                value={region}
                onChange={(val) => {
                  setRegion(val);
                  setErrorMohafza("");
                }}
              />
            </div>
            <div
              className={`bg-red-400 text-center mt-2 text-stone-100 fs-6 font-bold rounded-lg`}
            >
              {errorMohafza}
            </div>
            <div className={style.in_form}>
              <label htmlFor="city" className={`font-bold fs-5`}>
                المدينة
              </label>
              <input
                value={`${city}`}
                onChange={(e) => {
                  setCity(e.target.value);
                  setErrorCity("");
                }}
                type="text"
                id="city"
                className={`${style.input_login}  ${style.boxInputShado} focus:outline-0  px-2 py-2  text-right rounded-lg`}
                placeholder="المدينة"
              />
            </div>
            <div
              className={`bg-red-400 text-center mt-2 text-stone-100 fs-6 font-bold rounded-lg`}
            >
              {errorCity}
            </div>
            <div className={style.in_form}>
              <label htmlFor="cate1" className={`font-bold fs-5`}>
                العنوان الاول
              </label>
              <input
                value={`${locaiton1}`}
                onChange={(e) => {
                  setLocaiton1(e.target.value);
                  setErrorLoc1Name("");
                }}
                type="text"
                id="cate1"
                className={`${style.input_login}  ${style.boxInputShado} focus:outline-0  px-2 py-2  text-right rounded-lg`}
                placeholder="العنوان الاول"
              />
            </div>
            <div
              className={`bg-red-400 text-center mt-2 text-stone-100 fs-6 font-bold rounded-lg`}
            >
              {errorLoc1Name}
            </div>
            <div className={style.in_form}>
              <label htmlFor="cate2" className={`font-bold fs-5`}>
                العنوان الثاني
              </label>
              <input
                value={`${locaiton2}`}
                onChange={(e) => {
                  setLocaiton2(e.target.value);
                  setErrorLoc2Name("");
                }}
                type="text"
                id="cate2"
                className={`${style.input_login}  ${style.boxInputShado} focus:outline-0  px-2 py-2  text-right rounded-lg`}
                placeholder="العنوان الثاني"
              />
            </div>
            <div
              className={`bg-red-400 text-center mt-2 text-stone-100 fs-6 font-bold rounded-lg`}
            >
              {errorLoc2Name}
            </div>
            <div className={style.in_form}>
              <label
                htmlFor="phoneNumber"
                className={`font-bold fs-5 align-self-baseline`}
              >
                رقم الموبايل
              </label>

              <div className={style.input_phone}>
                <input
                  value={`${phoneNumber}`}
                  onChange={(e) => {
                    setphoneNumber(e.target.value);
                    setErrorPhoneNumber("");
                  }}
                  type="text"
                  id="phoneNumber"
                  placeholder="رقم الموبايل"
                  className={`${style.input_login}  ${style.boxInputShado} focus:outline-0  px-2 py-2  text-right rounded-lg`}
                />
                <div className={`text-gray-400 fs-6 font-sans`}>
                  ({phoneNumber.length}/11){" "}
                  {phoneNumber.length === 11 &&
                  errorPhoneNumber === "" &&
                  mobilePhone
                    ? "✅"
                    : "✖️"}
                </div>
                <span>02</span>
              </div>
            </div>
            <div
              className={`bg-red-400 text-center mt-2 text-stone-100 fs-6 font-bold rounded-lg`}
            >
              {errorPhoneNumber}
            </div>
            <div className={style.last_form}>
              <button
                onClick={(e) => submitData(e)}
                className={`hover:text-slate-800 hover:bg-white ms-2 mr-auto fs-5 font-bold w-fit rounded-2xl px-8 py-1`}
              >
                التالي
              </button>
              <button
                type="button"
                onClick={() => navigate("/data/steps/2")}
                className={` bg-white text-black hover:bg-black hover:text-white mr-auto fs-5 font-bold w-fit rounded-2xl px-8 py-1`}
              >
                رجوع
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default DataStep3;
