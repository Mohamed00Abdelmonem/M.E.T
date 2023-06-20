import React, { useEffect, useState } from "react";
import styles from "./../HeaderData/HeaderData.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  // TelegramShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  FacebookShareButton,
  FacebookMessengerShareButton,
} from "react-share";
// Icons
import sendIcon from "./../../Images/Home/Icons/Send.png";
import arrow from "./../../Images/Home/Icons/Arrow---Right-Square.png";
import doneCopyIcon from "./../../Images/Home/Icons/done_all.svg";
import facbook from "./../../Images/Certificate/Icons/iconmonstr-facebook-3.png";
import messenger from "./../../Images/Certificate/Icons/iconmonstr-facebook-messenger-3.png";
import linkedin from "./../../Images/Certificate/Icons/iconmonstr-linkedin-3.png";
import whatsapp from "./../../Images/Certificate/Icons/iconmonstr-whatsapp-3.png";
// import telegram from "./../../Images/Certificate/Icons/";
import copy from "./../../Images/Certificate/Icons/copy.png";

// Images
import itiIcon from "./../../Images/Certificate/1519885145295 1.png";


function TrainingCart({ jobTitle, jobDet, id }) {
  const navigate = useNavigate();
  const [shareUrl, setShareUrl] = useState("");
  const { pathname } = useLocation();
  const copyUrlTraining = () => {
    const textCopy = shareUrl;
    const input = document.createElement("input");
    input.value = textCopy;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  };
  useEffect(() => {
    setShareUrl(`https://alumni-iota.vercel.app${pathname}/Training/${id}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [shareShow, setShareShow] = useState("hide");
  const [doneCopy, setDoneCopy] = useState("notCopying");
  return (
    <>
      <div
        className={`relative overflow-hidden rounded-3xl mt-4 ${styles.bgCartTraining}`}
      >
        <div className="flex  justify-between">
          <div>
            {shareShow !== "show" && (
              <button
                onClick={() => {
                  setShareShow("show");
                }}
                className="px-2 py-1 rounded-xl bg-transparent border bodrer-2 flex gap-2 m-3"
              >
                <img src={sendIcon} width={30} alt="send" />
                <span className="text-end text-white">مشاركة</span>
              </button>
            )}
          </div>
          <div>
            <div className={`rounded-full p-3 ${styles.boxShad} bg-white m-3`}>
              <img
                src={itiIcon}
                className="rounded-full"
                width={75}
                alt="iti-logo"
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles.holdBottom} w-100 rounded-b-3xl mt-3 p-4 flex flex-wrap-reverse gap-2 justify-between`}
        >
          <button
            onClick={() => navigate(`./Training/${id}`)}
            className={` rounded-xl px-3 py-1 font-semibold flex gap-2  align-items-center justify-around bg-white ${styles.boxShad}`}
          >
            <img src={arrow} className="" width={30} alt="arrow" />
            <span className={`${styles.text} text-end`}>المزيد</span>
          </button>
          <div className="">
            <h5 className={`${styles.dir} text-end font-bold text-black`}>
              {jobTitle}
            </h5>
            <h6
              className={`${styles.dir} text-end font-semibold text-slate-600`}
            >
              {jobDet}
            </h6>
          </div>
        </div>
        <div
          className={`absolute rounded-lg ${styles.boxShad} -top-50  ${
            shareShow === "show" ? "top-4" : "-top-50"
          } pb-4 pt-2 px-4 transition duration-700 ease-in-out  left-10 col-7 bg-white flex flex-col justify-around`}
        >
          <div>
            <button
              onClick={() => {
                setShareShow("hide");
              }}
            >
              <h5 className=" border px-2 py-1  rounded-md text-black">x</h5>
            </button>
          </div>
          <div className={`w-100 flex gap-2 justify-end `}>
            <div
              onClick={() => {
                copyUrlTraining();
                setDoneCopy("copying");
                setTimeout(() => {
                  setDoneCopy("notCopying");
                }, 2000);
              }}
              className="flex align-items-center cursor-pointer"
            >
              <h6 className="font-bold">انسخ الرابط</h6>
              <button>
                {doneCopy === "notCopying" ? (
                  <img src={copy} alt="copyContant" className="text-white" />
                ) : (
                  <img
                    src={doneCopyIcon}
                    alt="copyContant"
                    className="text-white  w-10"
                  />
                )}
              </button>
            </div>
          </div>
          <h6 className="text-end mt-2">:مشاركة علي</h6>
          <div className={`flex justify-around flex-wrap gap-2 mt-2`}>
            {/*<button className="">
              <TelegramShareButton url={shareUrl}>
                <TelegramIcon className="w-6"/>
              </TelegramShareButton>
              </button>*/}
            <button className="w-fit h-fit m-0 p-0">
              <FacebookShareButton url={shareUrl}>
                <img src={facbook} alt="facbook" />
              </FacebookShareButton>
            </button>
            <button className="w-fit h-fit m-0 p-0">
              <WhatsappShareButton url={shareUrl}>
                <img src={whatsapp} alt="whatsapp" />
              </WhatsappShareButton>
            </button>
            <button className="w-fit h-fit m-0 p-0">
              <LinkedinShareButton url={shareUrl}>
                <img src={linkedin} alt="linkedin" />
              </LinkedinShareButton>
            </button>
            <button className="w-fit h-fit m-0 p-0">
              <FacebookMessengerShareButton url={shareUrl}>
                <img src={messenger} alt="messenger" />
              </FacebookMessengerShareButton>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrainingCart;
