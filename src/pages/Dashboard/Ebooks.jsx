import { useNavigate } from "react-router-dom";

const Ebooks = ({ onBack }) => {
  const navigate = useNavigate();

  const handleSubjectClick = (subject) => {
    navigate(`/dashboard/${subject}`);
  };

  return (
    <div className="ebooks-container">
      {/* Header with back arrow and title */}
      <div className="ebooks-header">
        <svg
          className="back-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={onBack}
        >
          <circle cx="12" cy="12" r="12" fill="white" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7204 6.3006C14.3476 5.8998 13.7433 5.8998 13.3705 6.3006L8.27958 11.7743C7.90681 12.1751 7.90681 12.8249 8.27958 13.2257L13.3705 18.6994C13.7433 19.1002 14.3476 19.1002 14.7204 18.6994C15.0932 18.2986 15.0932 17.6488 14.7204 17.248L10.3045 12.5L14.7204 7.75203C15.0932 7.35123 15.0932 6.7014 14.7204 6.3006Z"
            fill="#333333"
          />
        </svg>
        <h1 className="ebooks-title">E-Books</h1>
      </div>

      {/* Subjects Grid */}
      <div className="subjects-grid">
        {/* English */}
        <div
          className="subject-card"
          onClick={() => handleSubjectClick("English")}
        >
          <div className="subject-icon-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6750e28e8cc950177b086c0a4ccfb87e33de8a2a?width=120"
              alt=""
              className="subject-icon"
            />
          </div>
          <div className="subject-label">English</div>
        </div>

        {/* Mathematics */}
        <div
          className="subject-card"
          onClick={() => handleSubjectClick("Mathematics")}
        >
          <div className="subject-icon-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e14f138c3ed0b651b2f5f7f5a9736b9536e4bf36?width=100"
              alt=""
              className="subject-icon"
            />
          </div>
          <div className="subject-label">Mathematics</div>
        </div>

        {/* Science */}
        <div
          className="subject-card science-card"
          onClick={() => handleSubjectClick("Science")}
        >
          <div className="subject-icon-container science-icon">
            <div className="subject-letter">S</div>
          </div>
          <div className="subject-label science-label">Science</div>
        </div>

        {/* Social Studies */}
        <div
          className="subject-card"
          onClick={() => handleSubjectClick("Social Studies")}
        >
          <div className="subject-icon-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/478b95195529b3053ae32e8fe88c0aaf278f8f4e?width=120"
              alt=""
              className="subject-icon"
            />
          </div>
          <div className="subject-label">Social Studies</div>
        </div>

        {/* Languages */}
        <div
          className="subject-card languages-card"
          onClick={() => handleSubjectClick("Languages")}
        >
          <div className="subject-icon-container languages-icon">
            <div className="subject-letter">L</div>
          </div>
          <div className="subject-label"> Languages</div>
        </div>

        {/* Computer Studies */}
        <div
          className="subject-card"
          onClick={() => handleSubjectClick("Computer Studies")}
        >
          <div className="subject-icon-container">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e87cd028fd26bfba4ef8b480ea652c54359bf83?width=116"
              alt=""
              className="subject-icon"
            />
          </div>
          <div className="subject-label computer-label">Computer Studies</div>
        </div>
      </div>

      {/* Ad Banner */}
      <div className="ebooks-ad-banner">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/55d3bba327b86fb458ff295ad918b335d0a9466e?width=1482"
          alt=""
          className="ad-banner-image"
        />
        <div className="ad-banner-overlay"></div>
      </div>
    </div>
  );
};

export default Ebooks;
