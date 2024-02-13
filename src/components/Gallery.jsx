import logos from "../static/logos";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../states/GlobalContext";

const Gallery = () => {
  const { setId, setName } = useContext(Context);

  return (
    <section className="gallery" id="gallery">
      <div className="container vh">
        <div className="row projects gx-0">
          {logos.map((logo) => {
            const { id, name, src } = logo;

            return (
              <div className="col-8 col-md-5 col-lg-3" key={id}>
                <Link
                  to={`/logo/${name}`}
                  className="logo d-flex flex-column justify-content-center"
                  id={id}
                  onClick={() => {
                    setId(id);
                    setName(name);
                  }}
                >
                  <img src={src} alt={name} loading="lazy" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
