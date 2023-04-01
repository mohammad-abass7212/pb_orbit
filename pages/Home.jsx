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
import CommunityframeFlow from "./communityFrameFlow/index";
import Searchbar from "@/components/AdminFlow/Searchbar";
import CardDetail from "@/components/AdminFlow/CardDetail";
import CardRequest from "@/components/AdminFlow/CardRequest";
import CommonUserCard from "@/components/AdminFlow/CommonUserCard";
import ViewAllCommunity from "@/components/AdminFlow/viewAllCommunity";
import Communities from "@/components/AdminFlow/Communities";
import UserCard from "../components/AdminFlow/UserCard";
const Home = () => {
  return (
    <MainLayout>
      <div>
        {/* <CommonUserCard/>
        <ViewAllCommunity/> */}
        {/* <UserCard /> */}
        {/* <Communities/> */}
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
