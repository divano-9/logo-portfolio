import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { Context } from "../states/GlobalContext";
import ReactSlidy from "react-slidy";
import FsLightbox from "fslightbox-react";
import text from "../static/text";

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
            <a href="#" onClick={() => setToggler(!toggler)}>
              <ReactSlidy itemsToPreload={1} infiniteLoop>
                <img
                  src={`../../src/assets/img/logo-mockups/logo-${id}-mockup-1-S.jpg`}
                  alt={`${name} mockup`}
                />

                <img
                  src={`../../src/assets/img/logo-mockups/logo-${id}-mockup-2-S.jpg`}
                  alt={`${name} mockup 2`}
                />
              </ReactSlidy>
            </a>

            <FsLightbox
              toggler={toggler}
              sources={[
                `../../src/assets/img/logo-mockups/logo-${id}-mockup-1-L.jpg`,
                `../../src/assets/img/logo-mockups/logo-${id}-mockup-2-L.jpg`,
              ]}
            />
          </div>
          <div className="txt">
            {text[num].map((txt, index) => {
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
