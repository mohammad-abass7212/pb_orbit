import MainLayout from "@/components/layouts/MainLayout";
import Navbar from "@/components/navbar/Navbar";
import HomePage from "@/components/Home/HomePage";
import About from "@/components/Home/About";
import How_it_work from "@/components/Home/How_it_work";
import Why_choose from "@/components/Home/Why_Choose";
import App_install from "@/components/Home/App_install";
import People from "@/components/Home/People";
import Pricing from "@/components/Home/Pricing";
import Footer from "@/components/footer/footer";
import SecondPage from "./SecondPage";

const Home = () => {
  return (
    <MainLayout>
      <div>
        <Navbar />
        <HomePage />
        <About />
        <How_it_work />
        <Why_choose />
        <App_install />
        <People />
        <Pricing />
        <hr></hr>
        <Footer /> 
      </div>
    </MainLayout>
  );
};
export default Home;
