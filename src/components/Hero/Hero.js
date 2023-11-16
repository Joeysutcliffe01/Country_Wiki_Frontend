import { useEffect, useState } from "react";
import SearchBar from "../Searchbar/SearchBar";
import { MapSVG } from "../Map_SVG/MapSVG";
import CountryInfoBox from "../CountryInfoBox/CountryInfoBox";
import LoadingAnimation from "../Animations/LoadingAnimation";

const Hero = () => {
  const [dataFromApi, setDataFromApi] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isLoading, setIsLoading] = useState(false);



  return (
    <section data-test="hero-container" className="hero__div">
      <MapSVG
        setDataFromApi={setDataFromApi}
        setIsLoading={setIsLoading}
        setShowSearchBar={setShowSearchBar}
      />
      <SearchBar
        dataFromApi={dataFromApi}
        setDataFromApi={setDataFromApi}
        setIsLoading={setIsLoading}
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
      />
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          {!showSearchBar && (
            <CountryInfoBox
              dataFromApi={dataFromApi}
              setDataFromApi={setDataFromApi}
            />
          )}
        </>
      )}
    </section>
  );
};

export default Hero;
