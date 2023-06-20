import React, { useEffect, useState } from "react";
import logo from "./../../Images/Login/logo 1.jpg";
import style from "./Data.module.css";
import {  step4, step5 } from "../../Data/Recoil/Main";
import {  useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import paper from "../../Images/file-uplode/Paper-Upload.png";
import camera from "../../Images/file-uplode/Camera.png";
function DataStep3() {
  const navigate = useNavigate();
  const [step5Data, setStep5] = useRecoilState(step5);

  const [step4Data] = useRecoilState(step4);


  const [, setFileData] = useState(null);
  const [errorFileData, setErrorFileData] = useState("");
  // data
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileData(file);
      setStep5([file]);
      const formData = new FormData();
      formData.append("file", file);
    }
  };
  const submitData = (e) => {
    e.preventDefault();
    step5Data[0].length !== 0
      ? navigate("/")
      : setErrorFileData("يجب تحديد صورة شخصية");
  };
  useEffect(() => {
    step5Data[0].length !== 0 && setFileData(step5Data[0]);
    if (step4Data[0].length === 0) {
      navigate("/data/steps/4/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
          <form
            action=""
            onSubmit={(e) => submitData(e)}
            className={style.formData}
          >
            <div className="mb-20">
              <label
                htmlFor="approval"
                className={`font-bold fs-4 mb-1 w-100 h-fit cursor-pointer`}
              >
                تحميل صورة شخصية
                <div
                  className={`border-dashed border-2 border-black rounded-lg  mt-2 relative`}
                >
                  <div className="align-self-center pt-3 ">
                    <div className={`images flex justify-center gap-4 `}>
                      <div className={`p-3 rounded-lg bg-gray-200`}>
                        <img src={paper} alt="" />
                      </div>
                      <div className={`p-3 rounded-lg bg-gray-200`}>
                        <img src={camera} alt="" />
                      </div>
                    </div>
                    <h6 className={`mt-2 text-black  font-bold text-center `}>
                      تحميل الصورة بصيغة GPJ ,PNG
                    </h6>
                  </div>
                  <input
                    onChange={(e) => {
                      handleFileUpload(e);
                      setErrorFileData("");
                    }}
                    type="file"
                    accept="image/png, image/jpg, image/gif, image/jpeg"
                    id="approval"
                    className={`${style.input_login} ${style.fileUplode} w-100  absolute d-none top-0 focus:outline-0 block px-2 py-2  text-right rounded-lg`}
                    placeholder="الاقرار"
                  />
                </div>
              </label>
              <div
                className={`bg-green-200 text-center mt-2 text-stone-800 fs-6 font-bold rounded-lg`}
              >
                {step5Data[0].length !== 0 && "تم رفع الصورة بنجاح✅"}
              </div>
              <div
                className={`bg-red-400 text-center mt-2 text-stone-100 fs-6 font-bold rounded-lg`}
              >
                {errorFileData}
              </div>
            </div>

            <div className={`${style.last_form} `}>
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
