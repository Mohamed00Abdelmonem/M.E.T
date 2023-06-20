import React from 'react'
import styles from "./../HeaderData/HeaderData.module.css";
import deleteIocn from "./../../Images/Home/Icons/delete_FILL0_wght500_GRAD0_opsz40.svg";
function Skill({ skillName, imgSkill, altSkill, actionDeleteSkill }) {
  return (
    <div
      className={`bg-gray-200 px-5 py-3  rounded-xl text-center flex gap-2 ${styles.boxSkill} relative`}
    >
      <button onClick={(e) => actionDeleteSkill(e.innerHTML)}>
        <img
          src={deleteIocn}
          width={20}
          className="absolute top-1 right-1"
          alt="delete-icon"
        />
      </button>
      <h4>{skillName}</h4>
      {/*<img src={imgSkill} className='py-2'  alt={altSkill} />*/}
    </div>
  );
}

export default Skill