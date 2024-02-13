import { useContext } from "react";
import { Context } from "../states/GlobalContext";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { register } from "swiper/element/bundle";

const Slider = () => {
  const { id } = useContext(Context);

  register();
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <swiper-container
      navigation="true"
      pagination="true"
      loop="true"
      preventClicks="false"
    >
      <swiper-slide>
        <Zoom>
          <img
            alt="img1"
            src={`/assets/img/logo-mockups/logo-${id}-mockup-1-L.jpg`}
          />
        </Zoom>
      </swiper-slide>
      <swiper-slide>
        <Zoom>
          <img
            alt="img1"
            src={`/assets/img/logo-mockups/logo-${id}-mockup-2-L.jpg`}
          />
        </Zoom>
      </swiper-slide>
    </swiper-container>
  );
};

export default Slider;
