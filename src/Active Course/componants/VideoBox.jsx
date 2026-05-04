// import React from 'react'

import { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef(null);

  const videos = [
    {
      src: "/videos/video1.mp4",
      title: "الفيديو الأول",
    },
    {
      src: "/videos/video2.mp4",
      title: "الفيديو الثاني",
    },
    {
      src: "/videos/video3.mp4",
      title: "الفيديو الثالث",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(nextIndex);

    setTimeout(() => {
      videoRef.current?.play();
    }, 100);
  };

  const handleShare = async () => {
    const currentVideo = videos[currentIndex].src;

    // لو الموبايل بيدعم share
    if (navigator.share) {
      await navigator.share({
        title: "شوف الفيديو ده",
        url: window.location.origin + currentVideo,
      });
    } else {
      // fallback: نسخ اللينك
      navigator.clipboard.writeText(
        window.location.origin + currentVideo
      );
      alert("تم نسخ الرابط ✅");
    }
  };

  return (
    <div className="video-section">

        <div className="w-[80%] mx-auto">
            <video
                ref={videoRef}
                src={videos[currentIndex].src}
                controls
                className="video w-full h-100 object-cover rounded-2xl bg-black"
            />

            <div className="flex items-center justify-around bg-[#F9F4F1] mt-10 rounded-xl px-6 py-3">

                {/* Next */}
                <button
                onClick={handleNext}
                className="flex cursor-pointer items-center gap-2 text-[#41413C] hover:text-black transition"
                >
                <img src="/images/Polygon 3.svg" alt="" />
                <span className="text-[32.684px] font-bold">تشغيل التالي</span>
                </button>
                {/* Divider */}
                <div className="w-px h-[81.711px] bg-gray-400"></div>
                {/* Share */}
                <button
                onClick={handleShare}
                className="flex cursor-pointer items-center gap-2 text-[#41413C] hover:text-black transition"
                >
                <img src="/images/2 5.svg" alt="" />
                <span className="text-[32.684px] font-bold">مشاركة</span>
                </button>


            </div>
        </div>
    </div>
  );
}