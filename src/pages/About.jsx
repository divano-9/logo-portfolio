import Contact from "../components/Contact";

const About = () => {
  return (
    <>
      <div className="about container">
        <h1>
          Hi, my name is Dušan,
          <br />
          and I am a Logo Designer.
        </h1>
        <div className="myImg">
          <img src="/assets/img/about/about-1.jpg" alt="Me" />
        </div>

        <div className="about-txt">
          <p>
            Aldough I have experience in both web development and graphic
            design, thanks to my passion for creativity-based activities,
            currently my main focus is on logo design.
          </p>
          <p>
            Always eager for new challanges and learning opportunities. My
            friends and colleagues describe me as a reliable, creative, honest
            and sometimes witty person.
          </p>
          <p>
            Born and rased in Belgrade, Serbia. Besides Serbian language
            (motherthongue) I am fluent in English and beginner in Japanese.
          </p>
          <p>
            I am a lover of good food, traveling, animals and Japanese culture.
            Some of my more interesting hobbies are: martial arts (wing chun and
            kendo), going to cinema, reading web and light novels, watching
            anime,and feeding and petting local stray cats.
          </p>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default About;
