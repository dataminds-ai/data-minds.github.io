import React, { useState } from "react";
import "../../styles/stepper.css";
import { TiTick } from "react-icons/ti";

const Stepper = ({ currentStep, complete }) => {
  const steps = ["Authentication", "Parameters", "Prediction"];
  // const [currentStep, setCurrentStep] = useState(1);
  // const [complete, setComplete] = useState(false);
  return (
    <>
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
            <p className="text-gray-500 text-xs md:text-base">{step}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Stepper;