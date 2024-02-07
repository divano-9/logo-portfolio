import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../states/GlobalContext";
import logos from "../static/logos";
import Slider from "../components/Slider";

const Logo = () => {
  const { id } = useContext(Context);
  const { name } = useParams();
  const num = id - 1;
  const [toggler, setToggler] = useState(false);

  return (
    <div className="logo-wrapper container">
      <div className=" logo-single row">
        <div className="col-4 left">
          <div className="slider">
            <Slider />
          </div>
          <div className="txt">
            {logos[num].text.map((txt, index) => {
              return <p key={index}>{txt}</p>;
            })}
          </div>
        </div>
        <div className="col-8 l-img">
          <img
            src={`../../src/assets/img/background/single-${id}-m.png`}
            alt="background"
            className="s-background"
          />
          <img
            src={`../../src/assets/img/gallery_logos/single-${id}-550.png`}
            alt="logo"
            className="s-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
