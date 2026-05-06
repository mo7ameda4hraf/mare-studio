// import React from 'react'
import { useTranslation } from "react-i18next";


export default function Subscription({setCounter}) {
    const { t } = useTranslation();

    //data:
    const plans = [
        {
            title: t('courseSubscription.subscription.titleCardSingle'),
            price: t('courseSubscription.subscription.priceCard'),
            period: t('courseSubscription.subscription.priceBefore'),
        },
        {
            title: t('courseSubscription.subscription.titleCardGroup'),
            price: t('courseSubscription.subscription.priceCard'),
            period: t('courseSubscription.subscription.priceBefore'),
        },
    ];

  return (
    
    <>
        <div className=" card-sub flex gap-4 justify-center flex-wrap">
            {plans.map((plan, i) => (
            <div
                key={i}
                className="bg-white hover:scale-101 transition-transform duration-300  text-black rounded-[43.402px] p-4 shadow-md"
            >
                <div className="bg-[#D9D9D9] mb-3 py-5
                w-75 rounded-[31.632px] flex justify-center items-center flex-col">
                    {/* Badge */}
                    <div className=" text-center text-[17.655px] mb-5 font-bold pb-1 bg-white w-[107.597px] rounded-full">
                    {plan.title}
                    </div>

                    {/* Price */}
                    <h3 className="text-center text-[35.31px] font-bold">
                    {plan.price}
                    </h3>
                    <p className="text-center line-through text-[17.655px] font-normal">
                    {plan.period}
                    </p>
                </div>
                <p className="text-[#2D2C2B] mb-5 text-[16.184px] text-center">{t('courseSubscription.subscription.note')}</p>

                {/* Button */}
                <button
                onClick={()=>{setCounter(1)}}
                className="w-full h-[63.999px] text-[26.483px] 
                font-bold bg-[#2D2C2B] text-white py-2 rounded-[52.229px] 
                hover:bg-[#1a1a1a] transition-colors duration-300 cursor-pointer">
                    {t('courseSubscription.subscription.btnSubscription')}
                </button>

                {/* Features */}
                <ul className=" text-gray-600 space-y-1 mr-4 my-5">
                <li className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M0.73584 2.55302L3.32524 5.88497L8.82771 0.735596" stroke="#2D2C2B" stroke-width="1.47125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-[ 17.655px]">{t('courseSubscription.subscription.feature1')}</p>
                </li>
                <li className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M0.73584 2.55302L3.32524 5.88497L8.82771 0.735596" stroke="#2D2C2B" stroke-width="1.47125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-[ 17.655px]">{t('courseSubscription.subscription.feature2')}</p>
                </li>
                <li className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M0.73584 2.55302L3.32524 5.88497L8.82771 0.735596" stroke="#2D2C2B" stroke-width="1.47125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-[ 17.655px]">{t('courseSubscription.subscription.feature3')}</p>
                </li>
                <li className="flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                        <path d="M0.73584 2.55302L3.32524 5.88497L8.82771 0.735596" stroke="#2D2C2B" stroke-width="1.47125" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className="text-[ 17.655px]">{t('courseSubscription.subscription.feature4')}</p>
                </li>
                </ul>
            </div>
            ))}
        </div>
    </>
  )
}
