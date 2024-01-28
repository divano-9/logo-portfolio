import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <section className="contact container" id="contact">
        <div className="row">
          <div className="col-12 col-lg-9">
            <h1 className="mb-3">CONTACT ME</h1>
            <form
              action="mailto:dusanivanovic@mail.com"
              method="post"
              className="contact-form"
            >
              <div className="row">
                <div className="form-group col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      defaultValue=""
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                    />

                    <FontAwesomeIcon
                      icon={faUser}
                      className="input-group-addon fa fa-user"
                    />
                  </div>
                  <div className="error"></div>
                </div>

                <div className="form-group col-md-6">
                  <div className="input-group">
                    <input
                      type="text"
                      defaultValue=""
                      name="email"
                      className="form-control"
                      placeholder="Your email"
                    />

                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="input-group-addon fa fa-envelope"
                    />
                  </div>
                  <div className="error"></div>
                </div>

                <div className="form-group col-12">
                  <div className="input-group">
                    <textarea
                      name="message"
                      placeholder="Your message"
                      className="form-control text-area"
                    ></textarea>
                    <span className="input-group-addon fa fa-comment"></span>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="input-group-addon fa fa-comment"
                    />
                  </div>
                  <div className="error"></div>
                </div>

                <div className="row btns">
                  <div className="col-6 col-md-3 sub-btn">
                    <button
                      type="submit"
                      defaultValue="submit"
                      name="submit"
                      className="btn btn-dark submit-btn"
                    >
                      SUBMIT
                    </button>
                  </div>
                  <div className="col-8 col-md-5 e-mail">
                    <p>
                      e-mail :
                      <br />
                      <span id="myEmail">dusanivanovic@mail.com</span>
                    </p>
                  </div>

                  <div className="col-4 col-md-2 copy">
                    <a href="#" id="copy-btn">
                      COPY E-MAIL
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
