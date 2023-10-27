import Lottie from "lottie-react";
import animationData from "../../assets/Lottie_animations/animation_lo8iw1rg.json";

const LoadingAnimation = () => {
  return (
    <div className="hero__loading-animation-container">
      {/* {setShowSearchBar(false)} */}
      <Lottie animationData={animationData} />
    </div>
  );
};

export default LoadingAnimation;
