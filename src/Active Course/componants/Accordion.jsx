import { useState } from "react";

export default function CoursesAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selected, setSelected] = useState("course1");

  const data = [
    {
      title: "مدخل شامل إلى اللغة العربية",
      children: [
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
      ],
    },
    {
      title: "مدخل شامل إلى اللغة العربية",
      children: [
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
      ],
    },
    {
      title: "مدخل شامل إلى اللغة العربية",
      children: [
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
      ],
    },
    {
      title: "مدخل شامل إلى اللغة العربية",
      children: [
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
      ],
    },
    {
      title: "مدخل شامل إلى اللغة العربية",
      children: [
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
        "مدخل شامل إلى اللغة العربية",
      ],
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-[80%] mx-auto mt-5 space-y-3 courses-accordion">
      <h2 className="text-[#101340] text-[48px] font-bold text-center mb-15">محتويات الكورس كامل</h2>

      {data.map((item, i) => (
        <div key={i} className="bg-[#F9F4F1] rounded-xl px-10 pt-6 pb-10 content">

          {/* Header */}
          <div
            onClick={() => toggle(i)}
            className="flex items-center justify-between cursor-pointer header"
          >
            <div className="flex items-center gap-4">

              <img src="public/images/Group 38331.svg" alt="" />

              <div className="flex flex-col">
                <span className="unit text-[27.237px] font-normal">الوحدة الاولي </span>
                <span className="title text-[36.316px] font-bold text-[#42403D]">
                  {item.title}
                </span>
              </div>

            </div>

            {/* Arrow */}
            <img className={`arrow transition-transform ${
                  openIndex === i ? "rotate-180" : ""
                }`} src="public/images/Group 38305.svg" alt="" />
          </div>

          {/* Body */}
          {item.children.length > 0 && (
            <div
              className={`overflow-hidden body transition-all duration-300 ${
                openIndex === i ? " mt-3" : "max-h-0"
              }`}
            >
              <div className="space-y-2">
                {item.children.map((child, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between bg-white p-4 rounded-lg"
                  >
                    
                    <div className="flex gap-2.5 items-center">
                      {/* Radio */}
                      <div

                        onClick={() => setSelected(`child-${i}-${idx}`)}
                        className={`w-8 radio-mark h-8 rounded-full border-2 flex items-center justify-center cursor-pointer ${
                          selected === `child-${i}-${idx}`
                            ? "border-blue-500"
                            : "border-[#2B2E51]"
                        }`}
                      >
                        {selected === `child-${i}-${idx}` && (
                          <img className="w-full h-full" src="public/images/survey-onboarding-checkmark 1.svg" alt="" />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[18.158px;] font-normal">الوحدة الاولي </span>
                        <span className="title-body text-[27.237px] font-bold text-[#42403D]">
                          {child}
                        </span>
                      </div>
                    </div>
                    <div className="luck w-15.75 h-15.75 rounded-[100%] flex items-center justify-center bg-[#F9F4F1]">
                      <img src="public/images/3 1.svg" alt="" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      ))}

      {/* btn subscribe */}
      <button className=" btn-subscribe my-30  mx-auto">
        اشترك الحين 
      </button>
    </div>
  );
}