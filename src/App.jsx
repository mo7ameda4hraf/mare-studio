import './App.css'
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


//Componants:
import MainCoursesPage from './Courses Page/MainCoursesPage';
import ActiveCourseContent from './Active Course/ActiveCourseContent';
import CourseSubscription from "./Course Subscription/CourseSubscription";

function App() {
  const { i18n } = useTranslation();

    useEffect(() => {
      document.documentElement.dir =
        i18n.language === "ar" ? "rtl" : "ltr";
    }, [i18n.language]);

    const changeLang = (lang) => {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
      };

  return (
    <>
          <p className="bg-amber-500 w-fit mx-auto cursor-pointer" onClick={() => changeLang(i18n.language === "en" ? "ar" : "en")}>en</p>
      <Routes>
        <Route path="/" element={<MainCoursesPage />} />
        <Route path="/course" element={<ActiveCourseContent />} />
        <Route path="/courseSubscription" element={<CourseSubscription />} />
      </Routes>
    </>
  );
}

export default App;
