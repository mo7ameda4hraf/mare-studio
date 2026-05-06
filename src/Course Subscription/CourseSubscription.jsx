import "./style.css"
import { useState } from "react";
import { useTranslation } from "react-i18next";

// componants:
import PaymentCourse from "./componants/payment"
import Subscription from "./componants/Subscription"
import CheckoutSummary from "./componants/CheckoutSummary"


export default function CourseSubscription() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const en = i18n.language === "en";

  const [counter, setCounter] = useState(0);

  return (
    <div className={`flex course-subscription ${counter===0?"":"course-summary"}`}>
        <div className={`bg-white w-[45%] h-auto ${counter===0?"part-summary-empty":"part-summary-full"}`}>
            {counter === 1 && <CheckoutSummary />}
        </div>
        <div className="flex flex-col
        justify-center items-center h-auto
        w-full bg-linear-to-r from-blue-600
        to-blue-500 p-6 text-white">

        {/* Title */}
        <div className="title flex gap-6 justify-center mb-10 mt-20">
            <img width={"20px"} className={en ? "rotate-180" : ""} src="public/images/Arrow 8.svg" alt="" />
            <h2 className="text-center text-[39.846px] font-bold">
                {t('courseSubscription.title')}
            </h2>
        </div>
        
        {counter === 0 && <Subscription setCounter={setCounter} />}
        {/* ------------------ */}
        {counter === 1 && <PaymentCourse setCounter={setCounter} />}
        {/* ------------------ */}
        </div>
    </div>
  );
}