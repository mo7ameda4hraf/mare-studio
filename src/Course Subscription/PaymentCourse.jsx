import "./style.css"


export default function PaymentCourse() {

  return (
    <div className="flex course-subscription">
        <div className="part-white bg-white w-[30%] h-auto"></div>
        <div className="w-full bg-linear-to-r from-blue-600 to-blue-500 p-6 text-white">

        {/* Title */}
        <div className="title flex gap-6 justify-center mb-10 mt-20">
            <img src="public/images/Arrow 8.svg" alt="" />
            <h2 className="text-center text-[39.846px] font-bold">
                كورس الذكاء الاصطناعي
            </h2>
        </div>
        </div>
    </div>
  );
}