import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Co-Founder</h4>
                <h5>Undark — IIMA Ventures AI Residency</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Selected to the inaugural IIMA Ventures AI Residency (43 out of 11,500+ applicants). Built a Python MVP parsing case files, reconstructing timelines, and flagging contradictions across lender and bureau data; demoed live to investors.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Apprentice</h4>
                <h5>ACAD — Atria CoE in AI & Tech</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Forecasted Global Horizontal Irradiance (GHI) for solar energy using LSTM and Temporal Fusion Transformer time-series models as part of weather-energy research under Prof. Dinker Mattam.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in DS & AI</h4>
                <h5>Atria University · CGPA 8.4/10</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Computer Science undergraduate focusing on real systems, generative diffusion pipelines, process-supervised reward design, vector databases, and multi-agent backend architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathons & Certs</h4>
                <h5>Meta x Scaler & DeepLearning.AI</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Built SRE-Bot for Meta x Scaler OpenEnv Hackathon. Certifications: NLP Classification & Vector Spaces, Sequence Models, AI on Jetson Nano, and RAGxthon 2026 (Agents in Production).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
