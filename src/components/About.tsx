import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Aspiring Data Science and Software Developer skilled in Python, SQL,
          Machine Learning, and web development, with hands-on experience
          through a Data Science and AI/ML internship. Proficient in data
          analysis, visualization, and developing solutions for real-world
          problems.
        </p>

        <div className="about-details">
          <div>
            <div className="about-sub">Languages</div>
            <div className="about-tags">
              <span className="about-tag">English</span>
              <span className="about-tag">Kannada</span>
              <span className="about-tag">Hindi</span>
              <span className="about-tag">Tamil</span>
              <span className="about-tag">Tulu</span>
            </div>
          </div>
          <div>
            <div className="about-sub">Hobbies</div>
            <div className="about-tags">
              <span className="about-tag">Photo & Video Editing</span>
              <span className="about-tag">Browsing the Internet</span>
              <span className="about-tag">Playing Games</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
