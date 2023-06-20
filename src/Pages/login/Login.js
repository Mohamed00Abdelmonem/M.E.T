import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
// Get Images
import logo from "./../../Images/Login/logo 1.jpg";
import profile_img from "./../../Images/Input/Profile.jpg";
import Lock_img from "./../../Images/Input/Lock.jpg";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginData } from "../../Data/Recoil/Main";
import { BarLoader } from "react-spinners";
import { motion } from "framer-motion";




const dbUsers = [
  { userName: "mahmoud", password: 123 },
  { userName: " ali", password: 123 },
  { userName: "ahmed", password: 123 },
];






function Login() {
  const navigate = useNavigate();
  // eslint-disable-next-line no-use-before-define
  window.localStorage.getItem("ID") && navigate("/");
  const [dataLogin, setDataLogin] = useRecoilState(LoginData);
  const [password, setPassword] = useState("");
  const [id, setID] = useState("");
  const [remember, setRemember] = useState(false);
  // handel errors
  const [errorId, setErrorId] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [fontUser, setFontUser] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const user_data = {
      password,
      id,
      remember,
    };
    // id.toLocaleLowerCase() === "mahmoud" && +password === 123
    // eslint-disable-next-line array-callback-return
    const chackUser = dbUsers.find((e) => {
      // eslint-disable-next-line no-unused-expressions
      return e.userName === id.toLocaleLowerCase() && +e.password === +password
        ? true
        : false;
    });
    if (chackUser) {
      const allData = [...dataLogin, { password, id, remember }];
      setDataLogin(allData);
      window.localStorage.setItem("ID", `${id}`);
      navigate("/");
    } else {
      const chackUserId = dbUsers.find((e) => {
        // eslint-disable-next-line no-unused-expressions
        return e.userName !== id.toLocaleLowerCase() &&
          +e.password === +password
          ? true
          : false;
      });
      const chackUserPassword = dbUsers.find((e) => {
        // eslint-disable-next-line no-unused-expressions
        return e.userName === id.toLocaleLowerCase() &&
          +e.password !== +password
          ? true
          : false;
      });
      chackUserId && setErrorId("رقم الهوية الشخصية غير صحيح");
      chackUserPassword && setErrorPassword("كلمة المرور غير صحيح");
      if (!chackUserId && !chackUserPassword) {
        !chackUser && setFontUser("لا يوجد مستخدم بهذة البيانات");
      }
      // !errorId ||
      //   (!errorPassword &&
      //     !chackUser &&
      //     setFontUser("لا يوجد مستخدم بهذة البيانات"));
      // toast.warn("خطأ في الهوية او الباسورد اعد كتابهم", {
      //   position: "top-right",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "light",
      // });
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
  return (
    <>
      <div
        className={`${styles.bgMain} flex justify-center relative  align-bottom`}
      >
        <motion.div
          transition={{ duration: 1 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`${styles.mainContenar}  lg:w-96 pb-32 px-11 py-11 absolute  bottom-0   flex justify-center flex-col text-center`}
        >
          <div className={`mx-auto`}>
            <motion.img
              transition={{ duration: 1 }}
              initial={{ x: "-100vw", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              src={logo}
              width={`100`}
              height={`100`}
              alt="MET-logo"
            />
          </div>
          <div className={` `}>
            <h4 className={`font-bold md:px-3  text-black`}>
              معهد مصر العالي للتجارة و الحاسبات بالمنصورة
            </h4>
            <h6 className={` py-2`}>المنصة الالكترونية</h6>
          </div>
          {/* Input Login */}
          <form method="GET" className={`flex mt-4 flex-col gap-3`}>
            <span
              className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
            >
              {fontUser}
            </span>
            <div className={` flex flex-nowrap `}>
              <input
                onChange={(e) => {
                  setID(e.target.value);
                  setErrorId("");
                  setFontUser("");
                }}
                type={`text`}
                name={`id`}
                placeholder={`ID`}
                title="ادخل الهوية الخاص بك"
                className={`${styles.input_login} ${styles.input_bordre} ${styles.boxInputShado}   w-100 px-2 py-2  outline-0 text-right rounded-l-lg`}
              />
              <span
                className={` ${styles.input_login} ${styles.boxInputShado} flex align-items-center pr-2 pl-2 rounded-r-lg`}
              >
                <img src={profile_img} alt={``} />
              </span>
            </div>
            {/* span error Id */}
            <span
              className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
            >
              {errorId}
            </span>
            <div className={` flex flex-nowrap `}>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorPassword("");
                  setFontUser("");
                }}
                type={`password`}
                name={`password`}
                title="ادخل كلمة المرور الخاص بك"
                placeholder={`كلمة السر`}
                className={`${styles.input_login} ${styles.input_bordre} ${styles.boxInputShado} focus:outline-0 w-100 px-2 py-2  text-right rounded-l-lg`}
              />
              <span
                className={` ${styles.input_login} ${styles.boxInputShado}  flex align-items-center px-1 pl-2 rounded-r-lg`}
              >
                <img src={Lock_img} alt={``} />
              </span>
            </div>
            <span
              className={`bg-red-400 text-stone-100 fs-6 font-bold rounded-lg`}
            >
              {errorPassword}
            </span>
            {/* Remember me ==> chack box */}
            <div className={`flex justify-end gap-2`}>
              <label htmlFor="remember">تذكرني</label>
              <input
                type={`checkbox`}
                onChange={(e) => setRemember(e.target.value)}
                id="remember"
              />
            </div>

            <button
              type="submit"
              className={`${styles.btn_submit} ml-auto fs-5 text-white w-fit px-8 py-1`}
              onClick={(e) => submitForm(e)}
            >
              تسجيل دخول
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
}

export default Login;
