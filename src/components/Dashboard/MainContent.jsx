import LibraryGrid from "./LibraryGrid";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="content-inner">
          {/* Tab Navigation */}
          <div className="tab-navigation">
            <div className="tab-group">
              <div className="tab-wrapper">
                <div className="tab-bg active"></div>
                <span className="tab-text active">My Library</span>
              </div>
              <div className="tab-wrapper">
                <div className="tab-bg"></div>
                <span className="tab-text">Quiz</span>
              </div>
              <div className="tab-wrapper">
                <div className="tab-bg"></div>
                <span className="tab-text">Assignments</span>
              </div>
              <div className="tab-wrapper">
                <div className="tab-bg"></div>
                <span className="tab-text">Chats</span>
              </div>
              <div className="tab-wrapper live-class">
                <div className="tab-bg"></div>
                <span className="tab-text">Live Class</span>
                <div className="live-indicator"></div>
              </div>
            </div>
          </div>

          {/* Library Grid */}
          <LibraryGrid />

          {/* Ad Banner */}
          <div className="ad-banner">
            <div className="ad-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
