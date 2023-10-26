// import world from "../../Images/Hero/world_map_two.svg";
import { useState } from "react";
import SearchBar from "../Searchbar/SearchBar";
import { MapSVG } from "../Map_SVG/MapSVG";
import CountryInfoBox from "../CountryInfoBox/CountryInfoBox";

const Hero = () => {
  const [dataFromApi, setDataFromApi] = useState(null);

  return (
    <section className="hero__div">
      <MapSVG setDataFromApi={setDataFromApi} />
      <SearchBar dataFromApi={dataFromApi} setDataFromApi={setDataFromApi} />
      <CountryInfoBox
        dataFromApi={dataFromApi}
        setDataFromApi={setDataFromApi}
      />
    </section>
  );
};

export default Hero;
