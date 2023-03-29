import Footer from "@/components/footer/footer";
import About from "@/components/Home/About";
import App_install from "@/components/Home/App_install";
import HomePage from "@/components/Home/HomePage";
import How_it_work from "@/components/Home/How_it_work";
import People from "@/components/Home/People";
import Pricing from "@/components/Home/Pricing";
import Why_choose from "@/components/Home/Why_Choose";
import MainLayout from "@/components/layouts/MainLayout";
import Navbar from "@/components/navbar/Navbar";
import { Box } from "@chakra-ui/react";
import LoyoutDror from "@/components/LoyoutDror";
// import { Add_Community } from '@/pages/';Add_Community
import Add_Community from './Add_Community';
import Payment_Done from './Payment_Done';
import No_user_Screen from './No_user_Screen';
import Payemnt_Page from './Payemnt_Page';
import Communities from './Communities';
import SuccessMyRservations from './SuccessMyRservations';
import Not404 from './Not404';
import Edit_Profile from './Edit_Profile';

const Home = () => {
  return (
    <MainLayout>
      <div>
        {/* <Add_Community /> */}
        {/* <Payemnt_Page /> */}
        {/* <Payment_Done/> */}
        {/* <Communities/> */}
        {/* <SuccessMyRservations/> */}
        {/* <Not404 /> */}
        <Edit_Profile/>
        {/* <No_user_Screen/> */}
        {/* <LoyoutDror /> */}
        {/* <Navbar />
        <HomePage />
        <About />
        <How_it_work />
        <Why_choose />
        <App_install />
        <People />
        <Pricing />
        <hr></hr>
        <Footer />   */}
      </div>
    </MainLayout>
  );
};
export default Home;
