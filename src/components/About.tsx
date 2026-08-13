import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I am a Computer Science undergraduate at Atria University specializing in Data Science & Artificial Intelligence.
          I build and ship real systems instead of only calling library APIs. My work spans co-founding Undark (IIMA Ventures AI Summer Residency),
          engineering adversarial incident response benchmarks, training conditional diffusion models, and architecting multi-agent backend systems that handle 100+ concurrent requests at sub-100ms latency.
        </p>
      </div>
    </div>
  );
};

export default About;
