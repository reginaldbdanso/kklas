import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import SubjectSpecific from "./pages/Dashboard/SubjectSpecific";
import QuestionBank from "./pages/Dashboard/QuestionBank";
import LearningMaterials from "./pages/Dashboard/LearningMaterials";
import ExaminationGuidelines from "./pages/Dashboard/ExaminationGuidelines";
import VideoListings from "./pages/Dashboard/VideoListings";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import StudentJoin from "./pages/StudentJoin";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:subject" element={<SubjectSpecific />} />
          <Route
            path="/dashboard/:subject/my-learning-materials"
            element={<LearningMaterials />}
          />
          <Route
            path="/dashboard/:subject/questions-bank"
            element={<QuestionBank />}
          />
          <Route
            path="/dashboard/:subject/examination-guidelines"
            element={<ExaminationGuidelines />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/student-join" element={<StudentJoin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
