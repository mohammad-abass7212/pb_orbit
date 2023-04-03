import React, { useState, useRef } from "react";
import "../styles/otpvarification/OtpInput.module.css";


const OtpInput= ({ onOtpChange }) => {
  const [otp, setOtp] = useState({ otp1: "", otp2: "", otp3: "", otp4: "" });
  const inputRefs = useRef([
    null,
    null,
    null,
    null,
  ]);

  const handleChange = (
    value
    
  ) => {
    const newOtp = { ...otp, [value]: event.target.value };
    setOtp(newOtp);
    onOtpChange(Object.values(newOtp).join(""));
  };

  const inputFocus = (
    event,
    index
  ) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    } else {
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  return (
    <div className="otpContainer" style={{}}>
      {["otp1", "otp2", "otp3", "otp4"].map((key, index) => (
        <input
          style={{
            border: "none",
            background: "transperent",
            marginRight: "5px",
            borderBottom: " 5px solid #00e276",
          }}
          key={key}
          name={key}
          type="number"
          autoComplete="off"
          className="otpInput"
          value={(otp)[key]}
          onChange={(e) => handleChange(key, e)}
          tabIndex={index + 1}
          maxLength={1}
          onKeyUp={(e) => inputFocus(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
