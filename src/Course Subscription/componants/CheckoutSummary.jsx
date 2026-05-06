
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function CheckoutSummary() {
  const [plan, setPlan] = useState("group"); // group | individual
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const en = i18n.language === "en";

  //data:
    const arr = [
        {
            time:t('courseSubscription.checkoutSummary.timesCourse.time1'),
            note1:t('courseSubscription.checkoutSummary.notes.note1'),
            note2:t('courseSubscription.checkoutSummary.notes.note2')
        },
        {
            time:t('courseSubscription.checkoutSummary.timesCourse.time2'),
            note1:t('courseSubscription.checkoutSummary.notes.note3'),
            note2:t('courseSubscription.checkoutSummary.notes.note4')
        },
        {
            time:t('courseSubscription.checkoutSummary.timesCourse.time3'),
            note1:t('courseSubscription.checkoutSummary.notes.note5'),
            note2:t('courseSubscription.checkoutSummary.notes.note6')
        }
    ];
  return (
    <div className="fixed check-summary p-5 flex flex-col justify-between">

      {/* Title */}
      <div>
        <h3 className={` font-bold ${en ? 'text-left text-[22.388px]' : 'text-right text-[30.388px]'} mb-2`}>
        {t('courseSubscription.checkoutSummary.titleH3')}
        </h3>
        <p className={`font-bold ${en ? 'text-left text-[22.388px] w-89' : 'text-right text-[30.388px]'} mb-4`}>
        {t('courseSubscription.checkoutSummary.titleP')} 
        <span className="text-[#01A652]">{t('courseSubscription.checkoutSummary.titleSpan')}</span>
        </p>

        {/* Steps */}
        <div className="space-y-3 mb-6 flex gap-2">
            <img src="public/images/Group 38888.svg" alt="" />
            <div>    
                {arr.map((item, i) => (
                        <div key={i} className="flex flex-col items-start gap-1 mb-6 mt-3">
                        <h3 className="text-[16.105px] font-bold mb-1">{item.time}</h3>
                        <p className="text-[8.722px] font-normal text-[#2D2C2B]">{item.note1}</p>
                        <p className="text-[8.722px] font-normal text-[#2D2C2B]">{item.note2}</p>
                    </div>
                ))}
            </div>
        </div>


        {/* Info */}
        <p className={`text-[13px] font-normal  mb-4 ${en ? 'w-90 text-left' : 'text-right'}`}>
        {t('courseSubscription.checkoutSummary.noteEnd')}
        </p>

        <div className="flex gap-2 p-1.5 ">


      {/* جماعي */}
      <div className="relative">
        {/* badge */}
        <span className="absolute -top-3 right-7 font-bold bg-green-500
         text-white text-[9.979px] px-5 py-[2px] rounded-full">
          {t('courseSubscription.checkoutSummary.greenNote')}
        </span>

        <button
          onClick={() => setPlan("group")}
          className={`flex items-center gap-2 ${en ? "px-3 py-2" : "px-6 py-4"} rounded-[18.309px] text-sm font-medium transition
          ${
            plan === "group"
              ? "bg-[#44423F] text-white"
              : "text-[#6B6B6B] bg-[#F9F4F2]"
          }`}
        >
          {/* radio */}
          <span
            className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
            ${
              plan === "group"
                ? "border-white"
                : "border-gray-400"
            }`}
          >
            {plan === "group" && (
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 21 21" fill="none">
                        <circle cx="10.3754" cy="10.3754" r="9.92426" fill="white" stroke="#BEBAB3" stroke-width="0.902205"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96852 14.256L5.50787 10.7872C5.44721 10.7269 5.41309 10.6448 5.41309 10.5591C5.41309 10.4735 5.44721 10.3914 5.50787 10.3311L6.86009 8.96927C6.92025 8.90847 7.00215 8.87427 7.08759 8.87427C7.17303 8.87427 7.25493 8.90847 7.31509 8.96927L9.3274 11.0056L13.3392 6.41263C13.3994 6.35183 13.4813 6.31763 13.5667 6.31763C13.6521 6.31763 13.734 6.35183 13.7942 6.41263L15.2425 7.69738C15.3032 7.75769 15.3373 7.83978 15.3373 7.92542C15.3373 8.01106 15.3032 8.09315 15.2425 8.15346L9.89777 14.2175C9.78213 14.3503 9.61712 14.4296 9.44141 14.4369C9.26569 14.4442 9.0947 14.3788 8.96852 14.256Z" fill="#44423F"/>
                    </svg>
                </div>
            )}
          </span>

          {t('courseSubscription.checkoutSummary.btnGroup')}
        </button>
      </div>

      {/* فردي */}
      <button
        onClick={() => setPlan("individual")}
        className={`flex items-center gap-2 ${en ? "px-3 py-2" : "px-6 py-4"} rounded-[18.309px] text-sm font-medium transition
        ${
          plan === "individual"
            ? "bg-[#44423F] text-white shadow-sm"
            : "text-[#6B6B6B] bg-[#F9F4F2]"
        }`}
      >
        {/* radio */}
        <span className="w-4 h-4 rounded-full border-2 border-gray-400 flex items-center justify-center">
          {plan === "individual" && (
            <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 21 21" fill="none">
                        <circle cx="10.3754" cy="10.3754" r="9.92426" fill="white" stroke="#BEBAB3" stroke-width="0.902205"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.96852 14.256L5.50787 10.7872C5.44721 10.7269 5.41309 10.6448 5.41309 10.5591C5.41309 10.4735 5.44721 10.3914 5.50787 10.3311L6.86009 8.96927C6.92025 8.90847 7.00215 8.87427 7.08759 8.87427C7.17303 8.87427 7.25493 8.90847 7.31509 8.96927L9.3274 11.0056L13.3392 6.41263C13.3994 6.35183 13.4813 6.31763 13.5667 6.31763C13.6521 6.31763 13.734 6.35183 13.7942 6.41263L15.2425 7.69738C15.3032 7.75769 15.3373 7.83978 15.3373 7.92542C15.3373 8.01106 15.3032 8.09315 15.2425 8.15346L9.89777 14.2175C9.78213 14.3503 9.61712 14.4296 9.44141 14.4369C9.26569 14.4442 9.0947 14.3788 8.96852 14.256Z" fill="#44423F"/>
                    </svg>
                </div>
          )}
        </span>

        {t('courseSubscription.checkoutSummary.btnSingle')}
      </button>

    </div>
      </div>

    </div>
  );
}
