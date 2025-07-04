import { useNavigate } from "react-router-dom";
import "./SubjectImages.css";

const SubjectImages = ({ subject = "Science", onBack }) => {
  const navigate = useNavigate();

  const imageData = [
    {
      id: 1,
      title: "Fish Labeling",
      size: "100 Kb",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e679ad2c54cadda89b645610cb4a7fe7bb0a7ebf?width=254",
    },
    {
      id: 2,
      title: "Human Parts",
      size: "1.2 mb",
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/166b92b5ed70e47a8737c20f73e9228cb5367909?width=254",
    },
  ];

  return (
    <div className="subject-images-container">
      {/* Search Container - Top Right */}
      <div className="search-section">
        <div className="search-input-container">
          <svg
            className="search-icon"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.39148 9.01019C6.84549 10.2484 4.58249 10.151 3.14936 8.71783C1.61167 7.18014 1.61167 4.68705 3.14936 3.14936C4.68705 1.61167 7.18014 1.61167 8.71783 3.14936C10.1509 4.58248 10.2484 6.84548 9.0102 8.39147L12.0176 11.3989C12.1885 11.5698 12.1885 11.8468 12.0176 12.0176C11.8468 12.1885 11.5698 12.1885 11.3989 12.0176L8.39148 9.01019ZM3.76808 8.09911C2.5721 6.90313 2.5721 4.96406 3.76808 3.76808C4.96406 2.5721 6.90313 2.5721 8.09911 3.76808C9.29421 4.96318 9.29509 6.90028 8.10174 8.09647C8.10086 8.09734 8.09998 8.09822 8.0991 8.09909C8.09822 8.09997 8.09735 8.10085 8.09648 8.10174C6.90029 9.29509 4.96318 9.29421 3.76808 8.09911Z"
              fill="#616161"
            />
          </svg>
          <span className="search-placeholder">Search</span>
        </div>
      </div>

      {/* Navigation Header */}
      <div className="navigation-header">
        <svg
          className="back-button"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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

        <div className="breadcrumb-section">
          <div className="breadcrumb-circle">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad91a383ee8c83a0c684d7021aaf6c845fe3a532?width=40"
              alt=""
              className="education-icon"
            />
          </div>
          <span className="breadcrumb-text">{subject} / Images</span>
        </div>
      </div>

      {/* Images Grid */}
      <div className="images-grid-container">
        {imageData.map((image) => (
          <div key={image.id} className="image-card">
            <div className="image-thumbnail-wrapper">
              <img
                src={image.image}
                alt={image.title}
                className="image-thumbnail"
              />
            </div>
            <div className="image-details">
              <div className="image-title">{image.title}</div>
              <div className="image-size">Size: {image.size}</div>
            </div>
            <svg
              className="download-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0568 8.35338C9.88425 8.13775 9.56961 8.10279 9.35397 8.2753L8.49967 8.95874V6.66573C8.49967 6.38959 8.27582 6.16573 7.99967 6.16573C7.72353 6.16573 7.49967 6.38959 7.49967 6.66573V8.95877L6.64534 8.2753C6.42971 8.10279 6.11506 8.13775 5.94255 8.35338C5.77005 8.56901 5.80501 8.88366 6.02064 9.05617L7.68551 10.3881C7.77136 10.4575 7.88066 10.4991 7.99967 10.4991C8.11971 10.4991 8.22987 10.4568 8.31605 10.3863L9.97867 9.05617C10.1943 8.88366 10.2293 8.56901 10.0568 8.35338Z"
                fill="#828282"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.63993 4.85497C6.26835 3.88396 7.36148 3.24023 8.60573 3.24023C10.4816 3.24023 12.0157 4.70323 12.1293 6.55045C12.1667 6.54902 12.2043 6.5483 12.2421 6.5483C13.8571 6.5483 15.1663 7.85753 15.1663 9.47255C15.1663 11.0876 13.8571 12.3968 12.2421 12.3968L4.66634 12.3968C2.54925 12.3968 0.833008 10.6805 0.833008 8.56345C0.833008 6.44636 2.54925 4.73012 4.66634 4.73012C5.00228 4.73012 5.32866 4.77345 5.63993 4.85497ZM8.60573 4.24023C7.60236 4.24023 6.73441 4.82422 6.32505 5.67307C6.21168 5.90815 5.93658 6.01649 5.69337 5.92185C5.37561 5.7982 5.02952 5.73012 4.66634 5.73012C3.10153 5.73012 1.83301 6.99865 1.83301 8.56345C1.83301 10.1283 3.10153 11.3968 4.66634 11.3968L12.2415 11.3968C13.3042 11.3968 14.1663 10.5353 14.1663 9.47255C14.1663 8.40982 13.3048 7.5483 12.2421 7.5483C12.0692 7.5483 11.9023 7.57099 11.7439 7.61328C11.5838 7.65605 11.4129 7.61668 11.2876 7.50817C11.1623 7.39965 11.0989 7.2361 11.1184 7.0715C11.13 6.97299 11.136 6.87257 11.136 6.77054C11.136 5.37309 10.0032 4.24023 8.60573 4.24023Z"
                fill="#828282"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectImages;
