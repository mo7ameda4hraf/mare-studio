import './App.css'
import { Routes, Route } from "react-router-dom";

//Componants:
import MainCoursesPage from './Courses Page/MainCoursesPage';
import ActiveCourseContent from './Active Course/ActiveCourseContent';
import CourseSubscription from "./Course Subscription/CourseSubscription"
function App() {

  return (
    <>
      <Routes>
        <Route path="/coursesPage" element={<MainCoursesPage />} />
        <Route path="/course" element={<ActiveCourseContent />} />
        <Route path="/courseSubscription" element={<CourseSubscription />} />
      </Routes>
    </>
  );
}

export default App;
