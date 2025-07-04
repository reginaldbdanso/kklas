import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import "./LearningMaterials.css";

const LearningMaterials = () => {
  const navigate = useNavigate();
  const { subject: rawSubject } = useParams() || { subject: "English" };
  const subject = rawSubject ? decodeURIComponent(rawSubject) : "English";

  const handleBack = () => {
    navigate(`/dashboard/${encodeURIComponent(subject)}`);
  };

  const materials = [
    {
      id: 1,
      title: "Phonology",
      size: "3.6 mb",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7638940ae27e0031c480d0cacfc1e1e42b184896?width=254",
      hasDownload: false,
    },
    {
      id: 2,
      title: "English Poetry",
      size: "3.6 mb",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8069fdfbaa94cc44ee099c2ee83104d9f40f305c?width=254",
      hasDownload: true,
    },
    {
      id: 3,
      title: "Historical Linguistics",
      size: "3.6 mb",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b846930916fe9704d8e0af371946b56cbd0a021e?width=254",
      hasDownload: false,
    },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="content-wrapper">
          <div className="content-inner">
            {/* Header */}
            <div className="learning-materials-header">
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
                  {subject}/ My Learning Materials
                </span>
              </div>

              <div className="search-container">
                <div className="search-box">
                  <svg
                    className="search-icon"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.39148 9.01019C6.84549 10.2484 4.58249 10.151 3.14936 8.71783C1.61167 7.18014 1.61167 4.68705 3.14936 3.14936C4.68705 1.61167 7.18014 1.61167 8.71783 3.14936C10.1509 4.58248 10.2484 6.84548 9.0102 8.39147L12.0176 11.3989C12.1885 11.5698 12.1885 11.8468 12.0176 12.0176C11.8468 12.1885 11.5698 12.1885 11.3989 12.0176L8.39148 9.01019ZM3.76808 8.09911C2.5721 6.90313 2.5721 4.96406 3.76808 3.76808C4.96406 2.5721 6.90313 2.5721 8.09911 3.76808C9.29421 4.96318 9.29509 6.90028 8.10174 8.09647C8.10086 8.09734 8.09998 8.09822 8.0991 8.09909C8.09822 8.09997 8.09735 8.10085 8.09648 8.10174C6.90029 9.29509 4.96318 9.29421 3.76808 8.09911Z"
                      fill="#616161"
                    />
                  </svg>
                  <span className="search-text">Search</span>
                </div>
              </div>
            </div>

            {/* Materials Grid */}
            <div className="materials-grid">
              {materials.map((material) => (
                <div key={material.id} className="material-card">
                  <div className="card-container">
                    <img
                      src={material.image}
                      alt={material.title}
                      className="material-image"
                    />
                    {material.hasDownload && (
                      <div className="download-icon">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M10.0568 8.35534C9.88425 8.13971 9.56961 8.10474 9.35397 8.27725L8.49967 8.96069V6.66768C8.49967 6.39154 8.27582 6.16768 7.99967 6.16768C7.72353 6.16768 7.49967 6.39154 7.49967 6.66768V8.96072L6.64534 8.27725C6.42971 8.10474 6.11506 8.13971 5.94255 8.35534C5.77005 8.57097 5.80501 8.88561 6.02064 9.05812L7.68551 10.39C7.77136 10.4594 7.88066 10.501 7.99967 10.501C8.11971 10.501 8.22987 10.4587 8.31605 10.3882L9.97867 9.05812C10.1943 8.88561 10.2293 8.57097 10.0568 8.35534Z"
                            fill="#828282"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.63993 4.85693C6.26835 3.88591 7.36148 3.24219 8.60573 3.24219C10.4816 3.24219 12.0157 4.70519 12.1293 6.5524C12.1667 6.55098 12.2043 6.55026 12.2421 6.55026C13.8571 6.55026 15.1663 7.85948 15.1663 9.4745C15.1663 11.0895 13.8571 12.3987 12.2421 12.3987L4.66634 12.3987C2.54925 12.3987 0.833008 10.6825 0.833008 8.56541C0.833008 6.44832 2.54925 4.73207 4.66634 4.73207C5.00228 4.73207 5.32866 4.7754 5.63993 4.85693ZM8.60573 4.24219C7.60236 4.24219 6.73441 4.82617 6.32505 5.67503C6.21168 5.9101 5.93658 6.01844 5.69337 5.9238C5.37561 5.80016 5.02952 5.73207 4.66634 5.73207C3.10153 5.73207 1.83301 7.0006 1.83301 8.56541C1.83301 10.1302 3.10153 11.3987 4.66634 11.3987L12.2415 11.3987C13.3042 11.3987 14.1663 10.5372 14.1663 9.4745C14.1663 8.41177 13.3048 7.55026 12.2421 7.55026C12.0692 7.55026 11.9023 7.57295 11.7439 7.61524C11.5838 7.65801 11.4129 7.61864 11.2876 7.51012C11.1623 7.40161 11.0989 7.23805 11.1184 7.07345C11.13 6.97494 11.136 6.87453 11.136 6.77249C11.136 5.37504 10.0032 4.24219 8.60573 4.24219Z"
                            fill="#828282"
                          />
                        </svg>
                      </div>
                    )}
                    <div className="material-info">
                      <h3 className="material-title">{material.title}</h3>
                      <p className="material-size">Size: {material.size}</p>
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

export default LearningMaterials;
