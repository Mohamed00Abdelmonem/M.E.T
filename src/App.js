import React from "react";
import Login from "./Pages/login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/CertificateReq/Home";
import Data from "./Pages/Data/DataStep1";
import DataStep2 from "./Pages/Data/DataStep2";
import DataStep3 from "./Pages/Data/DataStep3";
import DataStep4 from "./Pages/Data/DataStep4";
import DataStep5 from "./Pages/Data/DataStep5";
import TrainingOpportunity from "./Pages/CertificateReq/TrainingOpportunity";
import Training from "./Components/Training";


function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/data/steps/1/" element={<Data />} />
        <Route path="/data/steps/2/" element={<DataStep2 />} />
        <Route path="/data/steps/3/" element={<DataStep3 />} />
        <Route path="/data/steps/4/" element={<DataStep4 />} />
        <Route path="/data/steps/5/" element={<DataStep5 />} />
        <Route
          path="/TrainingOpportunity/Training/:id"
          element={<Training />}
        />
        {/*<Route path="/home" element={<Home />} />*/}
        <Route path="/TrainingOpportunity" element={<TrainingOpportunity />} />
      </Routes>
    </>
  );
}

export default App;
