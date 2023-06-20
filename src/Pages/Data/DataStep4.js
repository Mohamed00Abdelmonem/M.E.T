import React, { useEffect, useState } from "react";
import logo from "./../../Images/Login/logo 1.jpg";
import style from "./Data.module.css";
import {  step3, step4 } from "../../Data/Recoil/Main";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
function DataStep3() {
  const navigate = useNavigate();
  
  const [step4Data, setStep4] = useRecoilState(step4);

  const [step3Data] = useRecoilState(step3);

  useEffect(() => {
    if (step3Data[0].length === 0) {
      navigate("/data/steps/3/");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // data
  const [approval, setApproval] = useState(
      `${step4Data[0].approval ? step4Data[0].approval : ""}`
    );
    const [signature, setSignature] = useState(
      `${step4Data[0].signature ? step4Data[0].signature : ""}`
    );

    const [errorSignature, setErrorSignature] = useState("");
  const [errorApproval, setErrorApproval] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    if (!approval) {
      setErrorApproval("الاقرار مطلوب");
    } else if (!signature) {
      setErrorSignature("التوقيع مطلوب");
    } else {
      const dataStep3 = {
        approval,
        signature
      }
      setStep4([dataStep3]);
      navigate("/data/steps/5");
    }
  };
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
          <form action="" className={style.formData}>
            <div className="">
              <label htmlFor="approval" className={`font-bold fs-5`}>
                أقر أنا الطالب
              </label>
              <input
                value={`${approval}`}
                onChange={(e) => {
                  setApproval(e.target.value);
                  setErrorApproval("");
                }}
                type="text"
                id="approval"
                className={`${style.input_login}  ${style.boxInputShado} focus:outline-0  px-2 py-2  text-right rounded-lg`}
                placeholder="الاقرار"
              />
            </div>

            <div
              className={`bg-red-400 text-center mt-2 text-stone-100 fs-6 font-bold rounded-lg`}
            >
              {errorApproval}
            </div>
            <p className={`font-bold text-center pt-2`}>
              بأن البيانات الموضحة سابقا هي البيانات الصحيحة ومن واقع شهادة
              الميلاد وتحت مسئوليتي
            </p>
            <div className={`mb-20`}>
              <div className={style.in_form}>
                <label htmlFor="signature" className={`font-bold fs-5`}>
                  التوقيع
                </label>
                <input
                  value={`${signature}`}
                  onChange={(e) => {
                    setSignature(e.target.value);
                    setErrorSignature("");
                  }}
                  type="text"
                  id="signature"
                  className={`${style.input_login}  ${style.boxInputShado} focus:outline-0  px-2 py-2  text-right rounded-lg`}
                  placeholder="التوقيع"
                />
              </div>
              <div
                className={`bg-red-400 text-center mt-2 text-stone-100 fs-6 font-bold rounded-lg`}
              >
                {errorSignature}
              </div>
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
                onClick={() => navigate("/data/steps/3")}
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
