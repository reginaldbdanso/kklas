import { useState } from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const Dashboard = () => {
  const [mainContentView, setMainContentView] = useState("library");

  const handleClassroomClick = () => {
    setMainContentView("library");
  };

  return (
    <div className="dashboard-container">
      <Sidebar onClassroomClick={handleClassroomClick} />
      <MainContent view={mainContentView} setView={setMainContentView} />
    </div>
  );
};

export default Dashboard;
