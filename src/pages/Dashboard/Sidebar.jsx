import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <div className="sidebar-background">
        <div className="sidebar-content">
          {/* School Logo and Info Section */}
          <div className="school-section">
            <div className="school-header">
              <div className="school-logo">
                <img
                  // src="https://cdn.builder.io/api/v1/image/assets/TEMP/c06baaa35d93b457f1a71672e8cf9ad1e78f8443?width=160"
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
                  d="M7.58477 0.17615C7.81177 -0.0587168 8.18822 -0.0587168 8.41522 0.17615L10.3958 2.22536H13.1972C13.5161 2.22536 13.7746 2.4839 13.7746 2.80283V5.60422L15.8238 7.58477C16.0587 7.81177 16.0587 8.18823 15.8238 8.41522L13.7746 10.3958V13.1972C13.7746 13.5161 13.5161 13.7746 13.1972 13.7746H10.3958L8.41522 15.8238C8.18823 16.0587 7.81177 16.0587 7.58477 15.8238L5.60421 13.7746H2.80283C2.4839 13.7746 2.22536 13.5161 2.22536 13.1972V10.3958L0.17615 8.41522C-0.0587164 8.18823 -0.0587169 7.81177 0.17615 7.58477L2.22536 5.60421V2.80283C2.22536 2.4839 2.4839 2.22536 2.80283 2.22536H5.60421L7.58477 0.17615ZM7.99999 4.34273C5.98014 4.34273 4.34272 5.98015 4.34272 8C4.34272 10.0199 5.98014 11.6573 7.99999 11.6573C10.0198 11.6573 11.6573 10.0199 11.6573 8C11.6573 5.98015 10.0198 4.34273 7.99999 4.34273Z"
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

            <div className="menu-item" onClick={handleLogout}>
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
  );
};

export default Sidebar;
