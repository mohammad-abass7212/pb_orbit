import { Button } from "@chakra-ui/react";
import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useRef, useState } from "react";
import OtpInput from "./OtpInput";

const OtpAsset = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const ref = useRef<HTMLFormElement>(null!);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Feature detection
    if ("OTPCredential" in window) {
      const form = ref.current;
      //Allows us to cancel the web API if the form is submitted manually
      const ac = new AbortController();
      const handler = () => {
        ac.abort();
      };
      form.addEventListener("submit", handler);

      //Let the browser listen for any sms message containing an OTP code.
      navigator.credentials
        .get({
          // @ts-ignore
          otp: { transport: ["sms"] },
          signal: ac.signal,
        })
        .then((otp: any) => {
          //set the state and submit the form automatically
          setOtp(otp.code);
          form.submit();
        })
        .catch((err) => {
          console.log(err);
        });

      //Cleanup useEffect
      return () => {
        form.removeEventListener("submit", handler);
      };
    }
  }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    router.push("/forgotPassword");
    try {
      const response = await fetch(`/api/verify-otp`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ code: otp }),
      });
      type Result = {
        success: boolean;
        message?: string;
      };
      const result: Result = await response.json();
      setSubmitting(false);
      if (result.success) {
        setMessage("You are now verified.");
      } else {
        setMessage(result.message ?? "Invalid code");
        setOtp("");
      }
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (message) {
    return (
      <div className="flex flex-col items-stretch gap-2">
        <p className="text-xl">{message}</p>
        <Button
          onClick={() => {
            setMessage("");
            setOtp("");
          }}
          className="btn btn-primary"
        >
          Reset Form
        </Button>
      </div>
    );
  }

  return (
    <form
      className="card shadow-md bg-base-200"
      ref={ref}
      onSubmit={handleSubmit}
    >
      <div className="card-body items-stretch text-center">
        <div className="my-2">
          <h2 className="text-xl"> One-Time Password</h2>
          <p className="text-sm text-base-content/80"> Input the code</p>
        </div>
        <OtpInput
          value={otp}
          onChange={(val) => {
            setOtp(val);
          }}
        />
        <button
          className={classNames({
            "btn btn-primary": true,
            loading: submitting,
          })}
          type="submit"
        >
          Verify OTP
        </button>
      </div>
    </form>
  );
};

export default OtpAsset;
