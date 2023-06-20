import { atom } from "recoil";

const BgAtom = atom({
  key: "textState", 
  default: 0, 
});
const LoginData = atom({
  key: "LoginData", 
  default: [], 
});

const step1 = atom({
  key: "step1", 
  default: [[]], 
});

const step2 = atom({
  key: "step2", 
  default: [[]], 
});

const step3 = atom({
  key: "step3", 
  default: [[]], 
});
const step4 = atom({
  key: "step4", 
  default: [[]], 
});
const step5 = atom({
  key: "step5", 
  default: [[]], 
});
const hiden = atom({
  key: "hiden", 
  default: "close", 
});
const subTrainings = atom({
  key: "subTrainings",
  default: [],
});
const dataTrainings = atom({
  key: "trainings",
  default: [
    {
      id: 1,
      title: "باك اند",
      descrebtion: "فرصة تدريب باك اند",
      detiual: `هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال هذا النص مجرد مثال 
هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال ,هذا النص مجرد مثال  `,
      bgTrain: "",
      iconTrain: "",
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
      bgTrain: "",
      iconTrain: "",
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
      bgTrain: "",
      iconTrain: "",
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
      bgTrain: "",
      iconTrain: "",
      trainStart: { d: 23, m: 5, y: 2023 },
      trainEnd: { d: 23, m: 5, y: 2023 },
      trainPlace: "المنصورة",
      trainCount: 24,
    },
  ],
});
// eslint-disable-next-line import/no-anonymous-default-export
export {
  BgAtom,
  LoginData,
  step1,
  step2,
  step3,
  step4,
  step5,
  hiden,
  subTrainings,
  dataTrainings,
};
