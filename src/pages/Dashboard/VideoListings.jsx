import { useNavigate } from "react-router-dom";
import "./VideoListings.css";

const VideoListings = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };

  const videoSections = [
    {
      title: "Grammar",
      videoCount: "7 Videos",
      videos: [
        {
          id: 1,
          title: "Lacus id tempus",
          duration: "4:28",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/15894af94693906d3aca4c048cb9423973a6d9be?width=260",
          hasDownload: false,
        },
        {
          id: 2,
          title: "Morbi",
          duration: "3:51",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/ac01dce52c7aceb14d917d42d0630cb0c6146910?width=260",
          hasDownload: true,
        },
        {
          id: 3,
          title: "Nisl urna dolor",
          duration: "12:29",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/fe942666d9755ffc27b9cbb894f3b3001aec55ea?width=260",
          hasDownload: true,
        },
        {
          id: 4,
          title: "Duis nisl non",
          duration: "12:29",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/a55f0fd7fbcde536c326c9d6f4d6dc7143fe0b36?width=260",
          hasDownload: true,
        },
        {
          id: 5,
          title: "Libero leo",
          duration: "5:01",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/1603734b2b18ad85f5a48d27384920ecb991eb79?width=260",
          hasDownload: true,
        },
        {
          id: 6,
          title: "Nisl urna dolor",
          duration: "6:17",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/a2ec189fa08f5cdc2a4f09db5d5e3da16dacfd36?width=260",
          hasDownload: true,
        },
        {
          id: 7,
          title: "Nisl urna dolor",
          duration: "10:01",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/6ff977b61ce6b6abad0cdbc4bd895253890d29f4?width=260",
          hasDownload: false,
        },
      ],
    },
    {
      title: "Composition",
      videoCount: "3 Videos",
      videos: [
        {
          id: 8,
          title: "Rhoncus",
          duration: "2:28",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/9cc13c219b6e33b7ff5772ef293174a3e9988a85?width=260",
          hasDownload: true,
        },
        {
          id: 9,
          title: "Vitae tellus lacus",
          duration: "3:14",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/bca70ef2094b75f787057395cfb11d0bd0569f04?width=260",
          hasDownload: false,
        },
        {
          id: 10,
          title: "Ipsum enim",
          duration: "7:09",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/d5f4993b921a5ae916b5f4a1f9a98dc4af512f2e?width=260",
          hasDownload: false,
        },
      ],
    },
    {
      title: "Literature",
      videoCount: "7 Videos",
      videos: [
        {
          id: 11,
          title: "Neque quis est",
          duration: "4:28",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/87236af5919bc652416ad21dfc53f1082562d073?width=260",
          hasDownload: true,
        },
        {
          id: 12,
          title: "Eget pharetra eget",
          duration: "3:51",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/3ed391e9c40818f3abd5f3c3d202db42a4595f06?width=260",
          hasDownload: false,
        },
        {
          id: 13,
          title: "Massa proin",
          duration: "8:06",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/259655cdcd89deeea6cbaff6ac62f7fe850ebe8a?width=260",
          hasDownload: true,
        },
        {
          id: 14,
          title: "Pellentesque",
          duration: "12:29",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/e79cab4b6c1fc7a9950a9cb3a74489a709135b87?width=260",
          hasDownload: true,
        },
        {
          id: 15,
          title: "Cras ullamcorper",
          duration: "5:01",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/61d0930b4ff90e294787bf66128dba5a941a3bf1?width=260",
          hasDownload: true,
        },
        {
          id: 16,
          title: "Nam in orci amet",
          duration: "4:42",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/518aa9d4e87217a1a12657c2cb406aa9b7c2480b?width=260",
          hasDownload: true,
        },
        {
          id: 17,
          title: "Pellentesque",
          duration: "12:29",
          thumbnail:
            "https://cdn.builder.io/api/v1/image/assets/TEMP/462d8cba87ea90f317a25ffaa680ca6c6653980a?width=260",
          hasDownload: false,
        },
      ],
    },
  ];

  const DownloadIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.0568 8.35534C9.88425 8.13971 9.56961 8.10474 9.35398 8.27725L8.49967 8.96069V6.66768C8.49967 6.39154 8.27582 6.16768 7.99967 6.16768C7.72353 6.16768 7.49967 6.39154 7.49967 6.66768V8.96072L6.64534 8.27725C6.42971 8.10474 6.11506 8.13971 5.94255 8.35534C5.77005 8.57097 5.80501 8.88561 6.02064 9.05812L7.68551 10.39C7.77136 10.4594 7.88066 10.501 7.99967 10.501C8.11971 10.501 8.22987 10.4587 8.31605 10.3882L9.97867 9.05812C10.1943 8.88561 10.2293 8.57097 10.0568 8.35534Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.63993 4.85693C6.26835 3.88591 7.36148 3.24219 8.60574 3.24219C10.4816 3.24219 12.0157 4.70519 12.1293 6.5524C12.1667 6.55098 12.2043 6.55026 12.2421 6.55026C13.8571 6.55026 15.1663 7.85948 15.1663 9.4745C15.1663 11.0895 13.8571 12.3987 12.2421 12.3987L4.66634 12.3987C2.54925 12.3987 0.833008 10.6825 0.833008 8.56541C0.833008 6.44832 2.54925 4.73207 4.66634 4.73207C5.00228 4.73207 5.32866 4.7754 5.63993 4.85693ZM8.60574 4.24219C7.60236 4.24219 6.73441 4.82617 6.32505 5.67503C6.21168 5.9101 5.93658 6.01844 5.69337 5.9238C5.37561 5.80016 5.02952 5.73207 4.66634 5.73207C3.10153 5.73207 1.83301 7.0006 1.83301 8.56541C1.83301 10.1302 3.10153 11.3987 4.66634 11.3987L12.2415 11.3987C13.3042 11.3987 14.1663 10.5372 14.1663 9.4745C14.1663 8.41177 13.3048 7.55026 12.2421 7.55026C12.0692 7.55026 11.9023 7.57295 11.7439 7.61524C11.5838 7.65801 11.4129 7.61864 11.2876 7.51012C11.1623 7.40161 11.0989 7.23805 11.1184 7.07345C11.13 6.97494 11.136 6.87453 11.136 6.77249C11.136 5.37504 10.0032 4.24219 8.60574 4.24219Z"
        fill="white"
      />
    </svg>
  );

  const SearchIcon = () => (
    <svg
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
  );

  return (
    <div className="video-listings-container">
      {/* Sidebar */}
      <div className="video-sidebar">
        <div className="sidebar-background">
          <div className="sidebar-content">
            {/* School Logo and Info Section */}
            <div className="school-section">
              <div className="school-header">
                <div className="school-logo">
                  <img
                    src="/school-logo.svg"
                    alt="college 1"
                    className="logo-image"
                  />
                  <div className="school-name">Katon Virtual School</div>
                </div>
                <div className="student-info">
                  <span>Kofi Mochacho</span>
                </div>
              </div>

              {/* Main Navigation */}
              <div className="main-nav">
                <div className="nav-item active">
                  <span>Classroom</span>
                  <svg
                    className="nav-arrow"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.4697 8.53033C13.1768 8.23744 13.1768 7.76256 13.4697 7.46967C13.7626 7.17678 14.2374 7.17678 14.5303 7.46967L18.5303 11.4697C18.8232 11.7626 18.8232 12.2374 18.5303 12.5303L14.5303 16.5303C14.2374 16.8232 13.7626 16.8232 13.4697 16.5303C13.1768 16.2374 13.1768 15.7626 13.4697 15.4697L16.1893 12.75H6.5C6.08579 12.75 5.75 12.4142 5.75 12C5.75 11.5858 6.08579 11.25 6.5 11.25H16.1893L13.4697 8.53033Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <div className="nav-item">
                  <span>Calendar</span>
                  <div className="notification-badge">2</div>
                </div>

                <div className="nav-item">
                  <span>Announcement</span>
                  <div className="notification-badge">2</div>
                </div>
              </div>
            </div>

            {/* Secondary Menu */}
            <div className="secondary-menu">
              <div className="menu-item">
                <svg
                  className="menu-icon"
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                >
                  <path
                    d="M2.07227 5.62891V14.8727C2.07227 15.1914 2.28477 15.4039 2.60352 15.4039H14.3973C14.716 15.4039 14.9285 15.1914 14.9285 14.8727V5.62891H2.07227ZM10.6254 9.02891H6.37539C6.05664 9.02891 5.84414 8.81641 5.84414 8.49766C5.84414 8.17891 6.05664 7.96641 6.37539 7.96641H10.6254C10.9441 7.96641 11.1566 8.17891 11.1566 8.49766C11.1566 8.81641 10.9441 9.02891 10.6254 9.02891Z"
                    fill="#C4C4C4"
                  />
                  <path
                    d="M15.9375 4.56719V2.07031C15.9375 1.75156 15.725 1.53906 15.4062 1.53906H1.59375C1.275 1.53906 1.0625 1.75156 1.0625 2.07031V4.56719H15.9375Z"
                    fill="#C4C4C4"
                  />
                </svg>
                <span>Archive</span>
              </div>

              <div className="menu-item">
                <svg
                  className="menu-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.49765 8C5.49765 6.61799 6.61799 5.49766 7.99999 5.49766C9.382 5.49766 10.5023 6.61799 10.5023 8C10.5023 9.382 9.382 10.5023 7.99999 10.5023C6.61799 10.5023 5.49765 9.382 5.49765 8Z"
                    fill="#C4C4C4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.58477 0.17615C7.81177 -0.0587168 8.18822 -0.0587168 8.41522 0.17615L10.3958 2.22536H13.1972C13.5161 2.22536 13.7746 2.4839 13.7746 2.80283V5.60422L15.8238 7.58477C16.0587 7.81177 16.0587 8.18823 15.8238 8.41523L13.7746 10.3958V13.1972C13.7746 13.5161 13.5161 13.7746 13.1972 13.7746H10.3958L8.41522 15.8238C8.18822 16.0587 7.81177 16.0587 7.58477 15.8238L5.60421 13.7746H2.80283C2.4839 13.7746 2.22536 13.5161 2.22536 13.1972V10.3958L0.17615 8.41522C-0.0587164 8.18823 -0.0587169 7.81177 0.17615 7.58477L2.22536 5.60421V2.80283C2.22536 2.4839 2.4839 2.22536 2.80283 2.22536H5.60421L7.58477 0.17615ZM7.99999 4.34273C5.98014 4.34273 4.34272 5.98015 4.34272 8C4.34272 10.0199 5.98014 11.6573 7.99999 11.6573C10.0198 11.6573 11.6573 10.0199 11.6573 8C11.6573 5.98015 10.0198 4.34273 7.99999 4.34273Z"
                    fill="#C4C4C4"
                  />
                </svg>
                <span>Settings</span>
              </div>

              <div className="menu-item">
                <svg
                  className="menu-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7ZM7.8 3.8C7.8 4.24183 7.44183 4.6 7 4.6C6.55817 4.6 6.2 4.24183 6.2 3.8C6.2 3.35817 6.55817 3 7 3C7.44183 3 7.8 3.35817 7.8 3.8ZM7 6C7.33137 6 7.6 6.26863 7.6 6.6V10.6C7.6 10.9314 7.33137 11.2 7 11.2C6.66863 11.2 6.4 10.9314 6.4 10.6V6.6C6.4 6.26863 6.66863 6 7 6Z"
                    fill="#C4C4C4"
                  />
                </svg>
                <span>Help</span>
              </div>

              <div className="menu-item" onClick={handleBack}>
                <svg
                  className="menu-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.63077 14.5231C7.63077 14.1152 7.96139 13.7846 8.36923 13.7846H14.2769C14.4129 13.7846 14.5231 13.6744 14.5231 13.5385L14.5231 1.72308C14.5231 1.58713 14.4129 1.47692 14.2769 1.47692L8.36923 1.47692C7.96139 1.47692 7.63077 1.1463 7.63077 0.738462C7.63077 0.330622 7.96139 0 8.36923 0H14.2769C15.2286 0 16 0.771448 16 1.72308V13.5385C16 14.4901 15.2286 15.2615 14.2769 15.2615H8.36923C7.96139 15.2615 7.63077 14.9309 7.63077 14.5231Z"
                    fill="#C4C4C4"
                  />
                  <path
                    d="M11.9253 8.72883C11.9253 9.27262 11.4844 9.71344 10.9407 9.71344H6.15938C6.1368 10.0634 6.10854 10.4131 6.07459 10.7623L6.04539 11.0628C5.9979 11.5515 5.47905 11.8441 5.03635 11.6319C3.23655 10.7694 1.60723 9.58904 0.226739 8.14769L0.197243 8.11689C-0.0657475 7.84231 -0.0657475 7.40929 0.197243 7.1347L0.22674 7.1039C1.60723 5.66256 3.23655 4.48223 5.03635 3.61969C5.47905 3.40752 5.9979 3.70014 6.04539 4.18875L6.07459 4.48925C6.10854 4.83853 6.1368 5.18821 6.15938 5.53817L10.9407 5.53817C11.4844 5.53817 11.9253 5.979 11.9253 6.52278V8.72883Z"
                    fill="#C4C4C4"
                  />
                </svg>
                <span>Logout</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="video-main-content">
        <div className="content-wrapper">
          {/* Header with Back Button and Subject Info */}
          <div className="video-header">
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
              <span className="subject-name">English / Syndicated videos</span>
            </div>

            <div className="search-container">
              <div className="search-background"></div>
              <SearchIcon />
              <span className="search-placeholder">Search</span>
            </div>
          </div>

          {/* Video Sections */}
          <div className="video-sections">
            {videoSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="video-section">
                <div className="section-header">
                  <span className="section-title">{section.title} -</span>
                  <span className="video-count">{section.videoCount}</span>
                </div>

                <div className="videos-grid">
                  {section.videos.map((video) => (
                    <div key={video.id} className="video-card">
                      <div className="video-thumbnail">
                        <img src={video.thumbnail} alt={video.title} />
                        <div className="video-overlay"></div>
                        <div className="video-duration">{video.duration}</div>
                        <div className="video-title-overlay">{video.title}</div>
                        <div className="download-icon">
                          <DownloadIcon />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoListings;
