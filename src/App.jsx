import './App.css'
import { Routes, Route } from "react-router-dom";

//Componants:
import MainCoursesPage from './Courses Page/MainCoursesPage';
import ActiveCourseContent from './Active Course/ActiveCourseContent';
import CourseSubscription from "./Course Subscription/CourseSubscription"
import PaymentCourse from "./Course Subscription/PaymentCourse"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainCoursesPage />} />
        <Route path="/course" element={<ActiveCourseContent />} />
        <Route path="/courseSubscription" element={<CourseSubscription />} />
        <Route path="/courseSubscription/payment" element={<PaymentCourse />} />
      </Routes>
    </>
  );
}

export default App;
