
import { useApp } from "../contexts/AppContext";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BriefcaseBusiness, Book, Calendar } from "lucide-react";

export const Services = () => {
  const { language } = useApp();
  
  const services = [
    {
      icon: <BriefcaseBusiness className="w-8 h-8 text-cambodia-blue" />,
      titleEn: "Travel Planning",
      titleKh: "ការរៀបចំដំណើរកម្សាន្ត",
      descEn: "Customized itineraries tailored to your preferences and schedule",
      descKh: "កម្មវិធីដំណើរកម្សាន្តដែលត្រូវបានកែសម្រួលទៅតាមចំណង់ចំណូលចិត្ត និងកាលវិភាគរបស់អ្នក"
    },
    {
      icon: <Book className="w-8 h-8 text-cambodia-blue" />,
      titleEn: "Local Guides",
      titleKh: "មគ្គុទេសក៍ក្នុងស្រុក",
      descEn: "Expert local guides with deep knowledge of Cambodian culture and history",
      descKh: "មគ្គុទេសក៍ក្នុងស្រុកដែលមានចំណេះដឹងស៊ីជម្រៅអំពីវប្បធម៌ និងប្រវត្តិសាស្ត្រខ្មែរ"
    },
    {
      icon: <Calendar className="w-8 h-8 text-cambodia-blue" />,
      titleEn: "24/7 Support",
      titleKh: "ការគាំទ្រ ២៤/៧",
      descEn: "Round-the-clock assistance for all your travel needs",
      descKh: "ជំនួយគ្រប់ពេលវេលាសម្រាប់តម្រូវការធ្វើដំណើររបស់អ្នក"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">
          {language === "en" ? "Our Services" : "សេវាកម្មរបស់យើង"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
          {language === "en" 
            ? "Make your journey memorable with our premium services" 
            : "ធ្វើឱ្យដំណើររបស់អ្នកគួរឱ្យចងចាំជាមួយសេវាកម្មល្អៗរបស់យើង"}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-xl">
                  {language === "en" ? service.titleEn : service.titleKh}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600 dark:text-gray-400">
                <p>{language === "en" ? service.descEn : service.descKh}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
