import logos from "../utils/logos";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container vh">
        <div
          className="row justify-content-between display: flex;
     gx-0"
          id="projects"
        >
          {logos.map((logo) => {
            const { no, id, name, src } = logo;
            return (
              <div className="col-md-5 col-lg-3" key={id}>
                <Link
                  to={`/logo/${name}`}
                  className="logo d-flex flex-column justify-content-center"
                  id={id}
                >
                  <img src={src} alt={name} />
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
