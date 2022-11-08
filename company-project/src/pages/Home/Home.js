import React from "react";
import Landing from "./Landing";
import Description from "./Description";
import OurSolutions from "./OurSolutions";
import Services from "./Services";
import Footer from "../Footer/Footer";
import LoginDialog from "../../components/LoginDialog";

const Home = () => {
  return (
    <div>
      <div className="md:text-4xl">
        <Landing />
      </div>
      <div className="relative h-screen bg-gray-900">
        <Description />
        <div className="md:pt-36 bg-gray-900">
          <OurSolutions />
        </div>
        <div className="bg-black">
          <Services />
        </div>
        <div>
          <Footer />
        </div>
      </div>

      </div>
  );
};

export default Home;
