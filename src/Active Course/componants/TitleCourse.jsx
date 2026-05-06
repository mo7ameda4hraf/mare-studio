// import React from 'react'
import "../style.css"
import { useTranslation } from "react-i18next";
export default function TitleCourse() {
  const { t } = useTranslation();
  return (
    <div className="pt-15 pb-30 bg-[#F9F4F4] title-head">
        <div className='container text-center'>
            <h1 className='text-[70px] font-bold'>{t('courseActive.titleCourse.headTitle')}</h1>
            <div className="flex items-center justify-center gap-2.5 mt-4 mb-8">
                <img src="/images/image 197.svg" alt="" />
                <p className="text-[36.819px] font-normal">{t('courseActive.titleCourse.pragraph1')}</p>
                <img src="/images/image 198.svg" alt="" />
                <p className="text-[36.819px] font-normal">{t('courseActive.titleCourse.pragraph2')}</p>
            </div>
            <button className="btn-subscribe mx-auto">
                {t('courseActive.titleCourse.subscription')} 
            </button>
        </div>
    </div>
  )
}
