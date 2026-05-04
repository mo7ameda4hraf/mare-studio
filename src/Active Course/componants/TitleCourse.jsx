// import React from 'react'
import "../style.css"

export default function TitleCourse() {
  return (
    <div className="pt-15 pb-30 bg-[#F9F4F4] title-head">
        <div className='container text-center'>
            <h1 className='text-[70px] font-bold'>كورس تصميم الجرافيك</h1>
            <div className="flex items-center justify-center gap-2.5 mt-4 mb-8">
                <img src="/images/image 197.svg" alt="" />
                <p className="text-[36.819px] font-normal">18 درس مسجل</p>
                <img src="/images/image 198.svg" alt="" />
                <p className="text-[36.819px] font-normal">المعلم حسن الأحمدي</p>
            </div>
            <button className="btn-subscribe mx-auto">
                اشترك الحين
            </button>
        </div>
    </div>
  )
}
