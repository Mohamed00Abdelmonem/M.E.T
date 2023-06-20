import React from 'react'

function Steps({ step1, step2, step3 }) {
  return (
      <div className={`flex justify-center pt-2 gap-3`}>
      <span className={`${step1} h-1 w-20 rounded-sm`}></span>
      <span className={`${step2} h-1 w-20 rounded-sm`}></span>
      <span className={`${step3} h-1 w-20 rounded-sm`}></span>
    </div>
  );
}

export default Steps