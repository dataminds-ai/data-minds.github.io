import React, { useState } from "react";
import "../../styles/stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = ({ currentStep, complete }) => {
  const steps = ["Authentication", "Enter Parameters", "Prediction"];
  // const [currentStep, setCurrentStep] = useState(1);
  // const [complete, setComplete] = useState(false);
  return (
    <>
      {console.log( currentStep, complete)}
      <div className="flex justify-between">
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${
              (i + 1 < currentStep || complete) && "complete"
            } `}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-500">{step}</p>
          </div>
        ))}
      </div>
      {/* {!complete && (
        <button
          className="btn"
          onClick={() => {
            currentStep === steps.length
              ? setComplete(true)
              : setCurrentStep((prev) => prev + 1);
          }}
        >
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )} */}
    </>
  );
};

export default Stepper;