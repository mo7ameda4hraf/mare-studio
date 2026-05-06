import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css"
import { useTranslation } from "react-i18next";


const CourseCard = ({ color, title,backGroundCard }) => {
  const { t } = useTranslation();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;

      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <div
    className="container course"
      style={{
        backgroundColor: color,
        direction:"rtl",
        padding: "60px 40px ",
        borderRadius: "35px",
        marginBottom: "15px",
        color: "#fff",
        textAlign: "center",
      }}
    >
      
      <h2 className="title-course text-[50px] font-bold">{title}</h2>
      <p className=" description-course text-[25px] w-[45%] m-auto font-normal mt-5" style={{lineHeight:"32px"}}>{t("coursesPage.courses.courseCard.description")}</p>
      <button className="enroll-btn px-2.5">{t("coursesPage.courses.courseCard.enroll")}</button>

      <div style={{ marginTop: "15px",display: "flex",justifyContent: "space-between", }}>
          <img className="cursor-pointer w-8" ref={prevRef} src="/images/Group 153.svg" alt="" />

          <Swiper
          style={{ margin: "0 20px"}}
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={3}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <SwiperSlide key={item}>
                <div className="card p-5 rounded-lg" style={{ backgroundColor: backGroundCard }}>
                  <img src="public/images/seo.png" alt="img" />
                  <h3 className="title-card text-[35px] font-normal" >{t("coursesPage.courses.courseCard.TitleCard")} {item}</h3>
                  <p className="description-card text-[20px] font-normal my-2.5">{t("coursesPage.courses.courseCard.descriptionCard")} {item}</p>
                  <button className="learn-more-btn">{t("coursesPage.courses.courseCard.enroll")}</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <img className="cursor-pointer w-8" ref={nextRef} src="/images/Group 152.svg" alt="" />
      </div>
    </div>
  );
};


export default CourseCard;