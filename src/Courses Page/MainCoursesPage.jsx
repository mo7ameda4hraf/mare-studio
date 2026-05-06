// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useTranslation } from "react-i18next";



//Componants:
import SectionHeader from './componants/header/SectionHeader'
import CourseCard from './componants/courses/CourseCard'


export default function MainCoursesPage() {
  const { t } = useTranslation();
    const designRef = useRef(null);
    const langRef = useRef(null);
    const techRef = useRef(null);
    const abilityRef = useRef(null);
    const { i18n } = useTranslation();

    const en = i18n.language === "en";
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <>
        <SectionHeader />

      <div className="option-courses text-center mt-20">
        <h2 className="title text-[50px] font-bold mb-12">
          {t("coursesPage.courses.optionCourses.title")}
        </h2>

        <div className="tabs flex justify-center gap-2.5 flex-wrap">
          <input type="radio" name="tabs" id="tab1" />
          <label className={`${en?"w-66.75 text-[17px]":"w-60.5 text-[25px]"}`} htmlFor="tab1" onClick={() => scrollToSection(abilityRef)}>
            {t("coursesPage.courses.optionCourses.option4Course")}
          </label>

          <input type="radio" name="tabs" id="tab2" />
          <label className={`${en?"w-66.75 text-[17px]":"w-60.5 text-[25px]"}`} htmlFor='tab2' onClick={() => scrollToSection(techRef)}>
            {t("coursesPage.courses.optionCourses.option3Course")}
          </label>

          <input type="radio" name="tabs" id="tab3" />
          <label className={`${en?"w-66.75 text-[17px]":"w-60.5 text-[25px]"}`} htmlFor='tab3' onClick={() => scrollToSection(langRef)}>
            {t("coursesPage.courses.optionCourses.option2Course")}
          </label>

          <input type="radio" name="tabs" id="tab4" defaultChecked  />
          <label className={`${en?"w-66.75 text-[17px]":"w-60.5 text-[25px]"}`} htmlFor='tab4'onClick={() => scrollToSection(designRef)}>
            {t("coursesPage.courses.optionCourses.option1Course")}
          </label>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <div ref={designRef}>
          <CourseCard color="#FF921F" title={t("coursesPage.courses.optionCourses.option1Course")} backGroundCard="#FFCE00"/>
        </div>

        <div ref={langRef}>
          <CourseCard color="#5431A5" title={t("coursesPage.courses.optionCourses.option2Course")} backGroundCard="#281466"/>
        </div>

        <div ref={techRef}>
          <CourseCard color="#02873E" title={t("coursesPage.courses.optionCourses.option3Course")} backGroundCard="#0B662A"/>
        </div>

        <div ref={abilityRef}>
          <CourseCard color="#0061EF" title={t("coursesPage.courses.optionCourses.option4Course")} backGroundCard="#0040EA"/>
        </div>
      </div>
    </>
  )
}
