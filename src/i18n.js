
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Courses Page
        coursesPage:{
            header:{
                titleHeader: "Build yourself up starting today and see the difference tomorrow.",
                description: "Through courses in programming, languages, design, and artificial intelligence, in an easy and practical style that helps you develop yourself with confidence.",
                btnMore:"Learn more"
            },
            courses:{
                optionCourses:{
                    title:"Our courses are designed to prepare for the future",
                    option1Course:" Graphic Design",
                    option2Course:"Languages and Foundation",
                    option3Course:"Technology and Programming",
                    option4Course:"Skills Courses",
                },
                courseCard:{
                    description:"Turn your ideas into unique designs and learn tools and techniques that will let you create with confidence.",
                    enroll:"Discover more",
                    TitleCard:" Card",
                    descriptionCard:"Description of card number",
                }
            }
        },
        // Active Course
        courseActive:{
          titleCourse:{
            headTitle:"Graphic Design Course",
            pragraph1:" 18 recorded lessons",
            pragraph2:" Teacher Hassan Al-Ahmadi",
            subscription:"  Subscribe now"
          },
          videoBox:{
            share:"Share",
            watch:"watch next ",
          },
          accordion:{
            title:"Full course contents",
            titleAccordion:"  Comprehensive introduction to the Arabic language",
            unitAccordion:" Unit one",

          }
        },
        // Course Subscription
        courseSubscription:{
          title:" Artificial Intelligence Course",
          subscription:{
            titleCardSingle:"Individual",
            titleCardGroup:"Group",
            priceCard:"50 KD",
            priceBefore:"120 KD",
            note:"It ends on 9-5-2026",
            btnSubscription:"subscription",
            feature1:"1:1 Lessons with the Teacher",
            feature2:"Automatic recording of all lessons",
            feature3:"Limited number of students",
            feature4:"Continuous interaction with the teacher",
          },
          payment:{
            titleCourse:"Design and graphic",
            selectTime:"One month",
            priceFinish:"Total:",
            addCode:"Add Discount Code",
            btnPaymint:"Pay"

          },
          checkoutSummary:{
            titleH3:"Start your educational journey now",
            titleP:" And book your place at a special price",
            titleSpan:"Today",
            timesCourse:{
              time1:" Today",
              time2:" Within 24 hours",
              time3:"Before the start of the course",
            },
            notes:{
              note1:" Confirm the reservation immediately",
              note2:" And receive course details and class schedule",
              note3:" Contact you to confirm the level",
              note4:" And select the group or instructor",
              note5:" Receive the final schedule + class links",
              note6:" Ensure student readiness to start",
            },
            noteEnd:"You can cancel or modify your reservation before the course begins with ease",
            btnGroup:"  Group subscription",
            btnSingle:"  Individual subscription",
            greenNote:"  Most Popular",
          }
        }
      },
    },
    ar: {
      translation: {
        // Courses Page
        coursesPage:{
            header:{
                titleHeader: "ابني نفسك من انهارده وشوف فرق بكرة",
                description: "من خلال كورسات في البرمجة، اللغات، التصميم، والذكاء الاصطناعي، بأسلوب سهل وتطبيقي يساعدك تطور نفسك بثقة.",
                btnMore:"اعرف المزيد"
            },
            courses:{
                optionCourses:{
                    title:"كورساتنا مصممه لإعداد المستقبل",
                    option1Course:"جرافيك ديزاين",
                    option2Course:"لغات وتأسيس",
                    option3Course:"تكنولوجيا وبرمجة",
                    option4Course:"كورسات القدرات",
                },
                courseCard:{
                    description:"حوّل أفكارك لتصميمات مميزه وتعلم أدوات وتقنيات تخليك تبدع بثقة.",
                    enroll:"اكتشف المزيد",
                    TitleCard:"كارت",
                    descriptionCard:"وصف الكارت رقم",
                }
            }
        },
        // Active Course
        courseActive:{
          titleCourse:{
            headTitle:"كورس تصميم الجرافيك",
            pragraph1:"18 درس مسجل",
            pragraph2:"المعلم حسن الأحمدي",
            subscription:"اشترك الحين"
          },
          videoBox:{
            share:"مشاركة",
            watch:"تشغيل التالي",
          },
          accordion:{
            title:"محتويات الكورس كامل",
            titleAccordion:"مدخل شامل إلى اللغة العربية",
            unitAccordion:"الوحدة الاولي",

          }
        },
        // Course Subscription
        courseSubscription:{
          title:" كورس الذكاء الاصطناعي",
          subscription:{
            titleCardSingle:"فردي",
            titleCardGroup:"جروب",
            priceCard:"50 د.ك",
            priceBefore:"120 د.ك",
            note:"ينتهي بنهاية 9-5-2026",
            btnSubscription:"اشتراك",
            feature1:"حصــــــــص 1:1 مع المــــــــدرس",
            feature2:"تسجيل تلقائي لكل الحصـــص",
            feature3:"عـــــــــدد طـــــــــلاب محــــــــــــــــــدود",
            feature4:"تفاعـــــــــل مستمر مع المــــــــدرس",
          },
          payment:{
            titleCourse:"التصميم والجرافيك",
            selectTime:"شهر واحد",
            priceFinish:"الإجمالي:",
            addCode:"اضف كود الخصم",
            btnPaymint:"الدفع"
          },
          checkoutSummary:{
            titleH3:"ابدأ رحلتك التعليمية الآن",
            titleP:"واحجز مكانك بسعر مميز",
            titleSpan:"اليوم",
            timesCourse:{
              time1:"اليوم",
              time2:"خلال 24 ساعة",
              time3:"قبل بداية الكورس",
            },
            notes:{
              note1:"تأكيد الحجز فورًا",
              note2:"واستلام تفاصيل الكورس وجدول الحصص",
              note3:"التواصل معكم لتأكيد المستوى",
              note4:"وتحديد المجموعة أو المعلم المناسب",
              note5:"إرسال الجدول النهائي + رابط الحصص",
              note6:"وضمان جاهزية الطالب للبدء",
            },
            noteEnd:"يمكنكم إلغاء الحجز أو تعديل الموعد قبل بداية الكورس بكل سهولة",
            btnGroup:"اشتراك جماعي",
            btnSingle:"اشتراك فردي",
            greenNote:"الاكثر شهرة",
          }
        }
      },
    },
  },
  lng: "ar", // اللغة الافتراضية
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  detection: {
      order: ["localStorage", "navigator"], // يدور الأول في localStorage
      caches: ["localStorage"], // يخزن اللغة
    },
});

export default i18n;