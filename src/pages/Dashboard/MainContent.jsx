import LibraryGrid from "./LibraryGrid";
import Ebooks from "./Ebooks";
import Images from "./Images";
import Podcasts from "./Podcasts";
import Videos from "./Videos";
import "./Ebooks.css";

const MainContent = ({ view, setView }) => {
  const currentView = view || "library";

  const handleEbooksClick = () => {
    setView("ebooks");
  };

  const handleImagesClick = () => {
    setView("images");
  };

  const handlePodcastsClick = () => {
    setView("podcasts");
  };

  const handleVideosClick = () => {
    setView("videos");
  };

  const handleBackToLibrary = () => {
    setView("library");
  };

  const renderContent = () => {
    if (currentView === "ebooks") {
      return <Ebooks onBack={handleBackToLibrary} />;
    }

    if (currentView === "images") {
      return <Images onBack={handleBackToLibrary} />;
    }

    if (currentView === "podcasts") {
      return <Podcasts onBack={handleBackToLibrary} />;
    }

    if (currentView === "videos") {
      return <Videos onBack={handleBackToLibrary} />;
    }

    return (
      <>
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
        <LibraryGrid
          onEbooksClick={handleEbooksClick}
          onImagesClick={handleImagesClick}
          onPodcastsClick={handlePodcastsClick}
          onVideosClick={handleVideosClick}
        />

        {/* Ad Banner */}
        <div className="ad-banner">
          <div className="ad-overlay"></div>
        </div>
      </>
    );
  };

  return (
    <div className="main-content">
      <div className="content-wrapper">
        <div className="content-inner">{renderContent()}</div>
      </div>
    </div>
  );
};

export default MainContent;
