
import { useApp } from "../contexts/AppContext";
import { Card, CardContent, CardHeader } from "./ui/card";

export const TravelerHistories = () => {
  const { language } = useApp();
  
  const histories = [
    {
      imageUrl: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      nameEn: "Sarah Johnson",
      nameKh: "សារ៉ា ចនសុន",
      textEn: "The temples of Angkor left me speechless. Our guide's knowledge made the experience unforgettable.",
      textKh: "ប្រាសាទអង្គរបានធ្វើឱ្យខ្ញុំអស់សំដី។ ចំណេះដឹងរបស់មគ្គុទេសក៍របស់យើងបានធ្វើឱ្យបទពិសោធន៍នេះមិនអាចបំភ្លេចបាន។"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
      nameEn: "David Chen",
      nameKh: "ដេវីដ ចិន",
      textEn: "Exploring the local markets and trying street food was a highlight of my trip.",
      textKh: "ការស្វែងរកផ្សារក្នុងស្រុក និងការភ្លក់ម្ហូបតាមចិញ្ចើមផ្លូវគឺជាចំណុចពិសេសនៃដំណើររបស់ខ្ញុំ។"
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      nameEn: "Emma Wilson",
      nameKh: "អេម៉ា វីលសុន",
      textEn: "The warmth of the Cambodian people made me feel at home. Will definitely return!",
      textKh: "ភាពកក់ក្តៅរបស់ប្រជាជនកម្ពុជាធ្វើឱ្យខ្ញុំមានអារម្មណ៍ថាដូចនៅផ្ទះ។ នឹងត្រឡប់មកវិញជាក់ជាមិនខាន!"
    }
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">
          {language === "en" ? "Traveler Stories" : "រឿងរ៉ាវរបស់អ្នកដំណើរ"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
          {language === "en" 
            ? "Hear from our satisfied travelers" 
            : "ស្តាប់ពីអ្នកដំណើររបស់យើងដែលពេញចិត្ត"}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {histories.map((history, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={history.imageUrl} 
                    alt={language === "en" ? history.nameEn : history.nameKh}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2 text-cambodia-blue">
                  {language === "en" ? history.nameEn : history.nameKh}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {language === "en" ? history.textEn : history.textKh}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
