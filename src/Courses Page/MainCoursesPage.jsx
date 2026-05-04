// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";



//Componants:
import SectionHeader from './componants/header/SectionHeader'
import CourseCard from './componants/courses/CourseCard'


export default function MainCoursesPage() {
    const designRef = useRef(null);
    const langRef = useRef(null);
    const techRef = useRef(null);
    const abilityRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <>
        <SectionHeader />

      <div className="option-courses text-center mt-20">
        <h2 className="title text-[50px] font-bold mb-12">
          كورساتنا مصممه لإعداد المستقبل
        </h2>

        <div className="tabs flex justify-center gap-2.5 flex-wrap">
          <input type="radio" name="tabs" id="tab1" defaultChecked />
          <label htmlFor="tab1" onClick={() => scrollToSection(abilityRef)}>
            كورسات القدرات
          </label>

          <input type="radio" name="tabs" id="tab2" />
          <label htmlFor='tab2' onClick={() => scrollToSection(techRef)}>
            تكنولوجيا وبرمجة
          </label>

          <input type="radio" name="tabs" id="tab3" />
          <label htmlFor='tab3' onClick={() => scrollToSection(langRef)}>
            لغات وتأسيس
          </label>

          <input type="radio" name="tabs" id="tab4" />
          <label htmlFor='tab4'onClick={() => scrollToSection(designRef)}>
            جرافيك ديزاين
          </label>
        </div>
      </div>

      <div style={{ padding: "20px" }}>
        <div ref={designRef}>
          <CourseCard color="#FF921F" title="جرافيك ديزاين" backGroundCard="#FFCE00"/>
        </div>

        <div ref={langRef}>
          <CourseCard color="#5431A5" title="لغات وتأسيس" backGroundCard="#281466"/>
        </div>

        <div ref={techRef}>
          <CourseCard color="#02873E" title="تكنولوجيا وبرمجة" backGroundCard="#0B662A"/>
        </div>

        <div ref={abilityRef}>
          <CourseCard color="#0061EF" title="كورسات القدرات" backGroundCard="#0040EA"/>
        </div>
      </div>
    </>
  )
}
