import logos from "../utils/logos";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container vh">
        <div
          className="row d-flex flex-wrap justify-content-between display: flex;
    flex-wrap: wrap; gx-0"
          id="projects"
        >
          {logos.map((logo) => {
            const { no, id, name, src } = logo;
            return (
              <div
                className="col-md-5 col-lg-3 d-flex flex-column justify-content-center"
                key={id}
              >
                <a href="#" className="logo" id={id}>
                  <img src={src} alt={name} />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
