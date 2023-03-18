import ChooseSignupMedium from "@/components/chooseSignupMedium/ChooseSignupMedium";
import { useRouter } from "next/router";
import ForgotPassword from "./forgotPassword";
import NotFound from "./NotFound";
import OtpForm from "./otpForm";
import ResetPassword from "./resetPassword";
import SignupForm from "./signupForm";
import UserSignIn from "./userSignin";
import chooseSignup from "./ChooseSignup";

const AuthFlowPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  switch (slug) {
    case "authFlow/chooseSignup":
      return <chooseSignup />;
    case "authFlow/forgotPassword":
      return <ForgotPassword />;
    case "authFlow/otpForm":
      return <OtpForm />;
    case "authFlow/resetPassword":
      return <ResetPassword />;
    case "authFlow/UserSignin":
      return <UserSignIn />;
    case "authFlow/SignupForm":
      return <SignupForm />;
    default:
      return <NotFound />;
  }
};

export default AuthFlowPage;
