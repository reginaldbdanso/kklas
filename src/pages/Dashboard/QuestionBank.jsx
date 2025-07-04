import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./QuestionBank.css";

const QuestionBank = () => {
  const navigate = useNavigate();
  const { subject: rawSubject } = useParams() || { subject: "English" };
  const subject = rawSubject ? decodeURIComponent(rawSubject) : "English";

  const handleBack = () => {
    navigate(`/dashboard/${encodeURIComponent(subject)}`);
  };

  const questionTopics = [
    "Introduction to Literature",
    "Reading",
    "Grammar Usage at word and Phrase Level",
    "Writing",
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="content-inner">
            {/* Header */}
            <div className="question-bank-header">
              <button className="back-button" onClick={handleBack}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="white" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.7204 6.3006C14.3476 5.8998 13.7433 5.8998 13.3705 6.3006L8.27958 11.7743C7.90681 12.1751 7.90681 12.8249 8.27958 13.2257L13.3705 18.6994C13.7433 19.1002 14.3476 19.1002 14.7204 18.6994C15.0932 18.2986 15.0932 17.6488 14.7204 17.248L10.3045 12.5L14.7204 7.75203C15.0932 7.35123 15.0932 6.7014 14.7204 6.3006Z"
                    fill="#333333"
                  />
                </svg>
              </button>

              <div className="subject-info">
                <div className="subject-icon">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                    <circle cx="18" cy="18" r="18" fill="#F6F6F6" />
                  </svg>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0893acb428e1a210f9a63bfdcb545c4062cfef45?width=44"
                    alt=""
                    className="dictionary-icon"
                  />
                </div>
                <span className="breadcrumb-text">
                  {subject} / Question bank
                </span>
              </div>
            </div>

            {/* Topics List */}
            <div className="topics-list">
              {questionTopics.map((topic, index) => (
                <div key={index} className="topic-item">
                  <div className="topic-content">
                    <div className="topic-border"></div>
                    <span className="topic-text">{topic}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionBank;
