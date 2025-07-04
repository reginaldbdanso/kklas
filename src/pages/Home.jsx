import * as React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <div className="main-container">
        <div className="header">
          <div className="header-content">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/7d03cf7f681648139d0d3878342d489b/449c1928445830dd3f4038af7e91725818c23591?placeholderIfAbsent=true"
              className="logo"
              alt="Logo"
            />
            <div className="navigation">
              <div className="h-nav-item school-admin">School Admin</div>
              <div className="h-nav-item">Teacher</div>
              <div className="h-nav-item">PTA</div>
            </div>
          </div>
        </div>
        <div className="hero-section">
          <div className="hero-content">
            <div className="text-column">
              <div className="hero-text">
                <div className="subtitle">Katon 360 Classroom</div>
                <div className="title">
                  TEACH SMART, <br />
                  LEARN EASY.
                </div>
                <div className="description">
                  Welcome to the 360 Classroom where Teachers, Students and
                  Parents meet to continue the traditional classroom activities.
                </div>
                <div className="cta-button" onClick={() => navigate("/signup")}>
                  <div>Join Classroom as Student</div>
                </div>
              </div>
            </div>
            <div className="image-column">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/7d03cf7f681648139d0d3878342d489b/b397624c338a517df211a180bfb1b9e1eea631fa?placeholderIfAbsent=true"
                className="hero-image"
                alt="Hero"
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-left">
            <div>FAQ</div>
            <div>Legal</div>
            <div>Support</div>
          </div>
          <div className="footer-right">
            <div className="copyright">@2024 Katon</div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/7d03cf7f681648139d0d3878342d489b/b4f03003a32273bda2cea4825f254204f28836df?placeholderIfAbsent=true"
              className="footer-logo"
              alt="Footer Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
