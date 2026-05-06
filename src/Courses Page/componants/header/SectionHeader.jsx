// import React from 'react'
import "./style.css"
import { useTranslation } from "react-i18next";


export default function SectionHeader() {
      const { t } = useTranslation();

  return (
    <div className="section-header relative">
        <section className="container flex justify-between items-center">
            <div className="text">
                <h1 className="mb-7">{t("coursesPage.header.titleHeader")}</h1>
                <p>{t("coursesPage.header.description")}</p>
                <button>{t("coursesPage.header.btnMore")}</button>
            </div>
            <img className=" photo w-140 mt-10" src="/images/Personalized-Care-Approach-2 1.png" alt="" />
        </section>
        <img className="photo-mark fixed top-11 -right-7.5" src="/images/Vector 4.svg" alt="" />
    </div>
  )
}
