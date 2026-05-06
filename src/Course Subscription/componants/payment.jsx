// import React from 'react'
import { useTranslation } from "react-i18next";
import "../style.css"

export default function PaymentCourse({setCounter}) {
    const { t } = useTranslation();
  return (
    <>
        <div className="p-4 rounded-xl text-white payment-course">

            {/* Header */}
            <div className="relative bg-[rgba(255,255,255,0.25)] rounded-[15.94px] p-8">
                <span
                onClick={()=>{setCounter(0)}}
                className="absolute left-3 top-3 cursor-pointer text-[17.34px]">×</span>

                <div className="flex justify-between items-center gap-5 container-img">
                    <div className="w-63.75 h-44.25 bg-[#D9D9D9] rounded-[29px]"></div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-[34.681px]">{t("courseSubscription.payment.titleCourse")}</h3>
                        <p className="text-[26.01px] font-bold">{t('courseSubscription.subscription.priceCard')}</p>
                        <span className="text-[17.34px] font-normal text-[rgba(255,255,255,0.5)]">{t('courseSubscription.subscription.note')}</span>
                        <div className="relative w-fit flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                                <path d="M18.8662 0.727145L12.8437 7.90941C11.4354 9.58896 8.86796 9.63752 7.39712 8.01241L0.80345 0.727144" stroke="white" stroke-width="2.16754"/>
                            </svg>
                            <select className="outline-none text-[26.01px] font-black  rounded appearance-none pr-3">
                                <option className="text-black text-[18px]">{t('courseSubscription.payment.selectTime')}</option>
                                <option className="text-black text-[18px]">----</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

                {/* Divider */}
                <div className="my-8 border-t border-white"></div>

                {/* Price */}
                <div className="flex justify-between mb-2">
                    <span className="font-bold text-[28.901px]">{t('courseSubscription.payment.priceFinish')}</span>
                    <span className="font-bold text-[28.901px]">{t('courseSubscription.subscription.priceCard')}</span>
                </div>

                <div className="add-code flex gap-2.5 my-5">
                    <button className=" rounded-[33.958px] text-[17.34px] font-bold bg-white/20">
                    {t('courseSubscription.payment.addCode')}
                    </button>
                    <input type="text"className="w-full py-2 text-[17.34px] font-bold px-2 rounded-[33.958px] bg-white/20 text-sm placeholder-white/50 focus:outline-none focus:bg-white/30 transition" />
                </div>
                {/* Pay Button */}
                <button className="cursor-pointer w-full py-2 text-[26.01px] rounded-[70.806px] bg-[#0061EF] font-bold hover:bg-blue-800 transition">
                    {t('courseSubscription.payment.btnPaymint')}
                </button>
                </div>
    </>
  )
}
