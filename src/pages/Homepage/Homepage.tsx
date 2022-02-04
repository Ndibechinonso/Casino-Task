import "./Homepage.scss";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Intro from "../../components/Intro/Intro";
import CryptoAddBox from "../../components/CryptoAddBox/CryptoAddBox";
import figure from "../../assets/figure.png";
import bg from "../../assets/bg.png";
import ConverterDisplay from "../../components/ConverterDisplay/ConverterDisplay";

const Homepage = () => {
  const [currency, setCurrency] = useState("");
  const handleCallback = (childData: any) => {
    setCurrency(childData);
  };

  return (
    <div className="homepage-container">
      <div className="bg-div">
        <img src={bg} alt="" />
      </div>
      <div className="left-section">
        <Navbar />
        <Intro />
        <div className="convertion-table">
          <ConverterDisplay currency={currency} />
        </div>
      </div>
      <div className="image-div">
        <img src={figure} alt="" />
      </div>
      <div className="crypto-div">
        <CryptoAddBox parentCallback={handleCallback} />
      </div>
    </div>
  );
};

export default Homepage;
