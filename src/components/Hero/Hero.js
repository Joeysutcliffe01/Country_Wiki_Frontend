import { useState } from "react";
import SearchBar from "../Searchbar/SearchBar";
import { MapSVG } from "../Map_SVG/MapSVG";
import CountryInfoBox from "../CountryInfoBox/CountryInfoBox";

import Lottie from "lottie-react";
import animationData from "../../assets/Lottie_animations/animation_lo8iw1rg.json";

const Hero = () => {
  const [dataFromApi, setDataFromApi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  console.log("isLoading", isLoading);

  return (
    <section className="hero__div">
      <MapSVG setDataFromApi={setDataFromApi} setIsLoading={setIsLoading} />
      <SearchBar
        dataFromApi={dataFromApi}
        setDataFromApi={setDataFromApi}
        setIsLoading={setIsLoading}
      />
      {isLoading ? (
        <div className="hero__loading-animation-container">
          <Lottie animationData={animationData} />
        </div>
      ) : (
        <CountryInfoBox
          dataFromApi={dataFromApi}
          setDataFromApi={setDataFromApi}
        />
      )}
    </section>
  );
};

export default Hero;
