// import React from 'react'
import "./style.css"

export default function SectionHeader() {
  return (
    <div className="section-header relative">
        <section className="container flex justify-between items-center">
            <div className="text">
                <h1 className="mb-7">ابني نفسك من انهارده وشوف فرق بكرة</h1>
                <p>من خلال كورسات في البرمجة، اللغات، التصميم، والذكاء الاصطناعي، بأسلوب سهل وتطبيقي يساعدك تطور نفسك بثقة.</p>
                <button>اعرف المزيد</button>
            </div>
            <img className=" photo w-140 mt-10" src="/images/Personalized-Care-Approach-2 1.png" alt="" />
        </section>
        <img className="photo-mark fixed top-11 -right-7.5" src="/images/Vector 4.svg" alt="" />
    </div>
  )
}
