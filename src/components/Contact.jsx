import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEnvelope,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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
              onSubmit={handleSubmit((data) => console.log(data))}
            >
              <div className="row">
                <div className="form-group col-md-6">
                  {/* name input */}
                  <div className="input-group">
                    <input
                      type="text"
                      {...register("name", {
                        required: "The name field is required!",
                        minLength: {
                          value: 3,
                          message: "name must be at least 3 characters",
                        },
                        maxLength: {
                          value: 60,
                          message: "name can be at most 60 characters",
                        },
                      })}
                      defaultValue=""
                      className="form-control"
                      placeholder="Your name"
                    />

                    <FontAwesomeIcon
                      icon={faUser}
                      className="input-group-addon fa fa-user"
                    />
                  </div>
                  <div className="error">
                    {errors.name && <p>{errors.name.message}</p>}
                  </div>
                </div>

                <div className="form-group col-md-6">
                  {/* email input */}
                  <div className="input-group">
                    <input
                      type="text"
                      defaultValue=""
                      {...register("email", {
                        required: "The emle field is required!",
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Entered value does not match email format",
                        },
                      })}
                      className="form-control"
                      placeholder="Your email"
                    />

                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="input-group-addon fa fa-envelope"
                    />
                  </div>
                  <div className="error">
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>
                </div>

                <div className="form-group col-12">
                  {/* message text area */}
                  <div className="input-group">
                    <textarea
                      {...register("message", {
                        minLength: {
                          value: 10,
                          message:
                            "The message must contain at least 10 characters!",
                        },
                        maxLength: {
                          value: 250,
                          message:
                            "The message can have at most 250 characters",
                        },
                      })}
                      placeholder="Your message"
                      className="form-control text-area"
                    ></textarea>
                    <span className="input-group-addon fa fa-comment"></span>
                    <FontAwesomeIcon
                      icon={faComment}
                      className="input-group-addon fa fa-comment"
                    />
                  </div>
                  <div className="error">
                    {errors.message && <p>{errors.message.message}</p>}
                  </div>
                </div>

                <div className="row btns">
                  <div className="col-6 col-md-3 sub-btn">
                    {/* submit button */}
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
