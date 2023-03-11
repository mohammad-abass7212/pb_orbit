import React, { useState } from "react";

const OTPBox: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));

  const handleChange = (
    element: HTMLInputElement,
    index: number
  ): boolean | void => {
    if (isNaN(Number(element.value))) return false;

    setOtp((prevOtp) =>
      prevOtp.map((d, idx) => (idx === index ? element.value : d))
    );

    // Focus next input
    if (element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <>


      <div className="row">
        <div className="col text-center">
          <h2>Welcome to the channel!!!</h2>
          <p>Enter the OTP sent to you to verify your identity</p>

          {otp.map((data, index) => (
            <input
              className="otp-field"
              type="text"
              name="otp"
              maxLength={1}
              key={index}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
            />
          ))}

          <p>OTP Entered - {otp.join("")}</p>
          <p>
            <button
              className="btn btn-secondary mr-2"
              onClick={() => setOtp(new Array(4).fill(""))}
            >
              Clear
            </button>
            <button
              className="btn btn-primary"
              onClick={() => alert("Entered OTP is " + otp.join(""))}
            >
              Verify OTP
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default OTPBox;
