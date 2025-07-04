import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./ExaminationGuidelines.css";

const ExaminationGuidelines = () => {
  const navigate = useNavigate();
  const { subject: rawSubject } = useParams() || { subject: "English" };
  const subject = rawSubject ? decodeURIComponent(rawSubject) : "English";

  const handleBack = () => {
    navigate(`/dashboard/${encodeURIComponent(subject)}`);
  };

  const guidelines = [
    {
      id: 1,
      title: "Five steps you shouldn't miss",
      author: "Dr. Nkansah Kofi",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7c4b7881facccdf212d014991e85cad1e283cb13?width=80",
    },
    {
      id: 2,
      title: "Maths is easy",
      author: "Prof. Albert Osei Tutu",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f52cca84be66ef0087a16ef0f6aab58db4a8fcc8?width=80",
    },
    {
      id: 3,
      title: "How to get it right",
      author: "Prof. Josphine Boatemaa",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6050ec5c0102968f5c812d3973b61f12d75d07fb?width=80",
    },
    {
      id: 4,
      title: "What you must know before sitting",
      author: "BECE",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8e6a7e937447df6dde7a325e9840e2b6af478697?width=80",
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="content-inner">
            {/* Header */}
            <div className="examination-guidelines-header">
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
                  {subject} / Examination Guideline
                </span>
              </div>
            </div>

            {/* Guidelines List */}
            <div className="guidelines-list">
              {guidelines.map((guideline) => (
                <div key={guideline.id} className="guideline-item">
                  <div className="guideline-content">
                    <img
                      src={guideline.image}
                      alt={guideline.author}
                      className="author-image"
                    />
                    <div className="guideline-info">
                      <h3 className="guideline-title">{guideline.title}</h3>
                      <p className="guideline-author">{guideline.author}</p>
                    </div>
                    <div className="nav-arrow">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.96967 7.46967C10.2626 7.17678 10.7374 7.17678 11.0303 7.46967L15.0303 11.4697C15.3232 11.7626 15.3232 12.2374 15.0303 12.5303L11.0303 16.5303C10.7374 16.8232 10.2626 16.8232 9.96967 16.5303C9.67678 16.2374 9.67678 15.7626 9.96967 15.4697L13.4393 12L9.96967 8.53033C9.67678 8.23744 9.67678 7.76256 9.96967 7.46967Z"
                          fill="#A0A0A0"
                        />
                      </svg>
                    </div>
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

export default ExaminationGuidelines;
