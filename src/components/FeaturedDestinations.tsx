
import { Link } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { CurrencyDisplay } from "./CurrencyDisplay";

interface Destination {
  id: string;
  name: string;
  nameKh: string;
  image: string;
  description: string;
  descriptionKh: string;
  priceUSD: number;
}

const destinations: Destination[] = [
  {
    id: "angkor-wat",
    name: "Angkor Wat",
    nameKh: "អង្គរវត្ត",
    image: "https://images.unsplash.com/photo-1564655683517-6a73523724a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "The iconic temple complex and UNESCO World Heritage site in Siem Reap.",
    descriptionKh: "ប្រាសាទដ៏ល្បីល្បាញនិងជាបេតិកភណ្ឌពិភពលោកនៅខេត្តសៀមរាប។",
    priceUSD: 37,
  },
  {
    id: "phnom-penh",
    name: "Phnom Penh",
    nameKh: "ភ្នំពេញ",
    image: "https://images.unsplash.com/photo-1584646098378-0874589d76b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Cambodia's vibrant capital with royal palaces, museums, and riverfront dining.",
    descriptionKh: "រាជធានីរស់រវើករបស់កម្ពុជាជាមួយព្រះបរមរាជវាំង សារមន្ទីរ និងអាហារដ្ឋានតាមមាត់ទន្លេ។",
    priceUSD: 25,
  },
  {
    id: "koh-rong",
    name: "Koh Rong",
    nameKh: "កោះរ៉ុង",
    image: "https://images.unsplash.com/photo-1597243214905-dea1f451f423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "A tropical paradise with white sandy beaches and bioluminescent waters.",
    descriptionKh: "ឋានសួគ៌ត្រូពិចជាមួយឆ្នេរខ្សាច់សនិងទឹកសមុទ្ររលោង។",
    priceUSD: 45,
  },
  {
    id: "battambang",
    name: "Battambang",
    nameKh: "បាត់ដំបង",
    image: "https://images.unsplash.com/photo-1615608178738-017759d1e7b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    description: "Charming colonial architecture and the famous bamboo train.",
    descriptionKh: "ស្ថាបត្យកម្មអាណានិគមដ៏ទាក់ទាញ និងរថភ្លើងឫស្សីដ៏ល្បី។",
    priceUSD: 20,
  },
];

export const FeaturedDestinations = () => {
  const { language } = useApp();
  
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">
          {language === "en" ? "Featured Destinations" : "គោលដៅដែលពេញនិយម"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
          {language === "en" 
            ? "Explore Cambodia's most iconic places" 
            : "រុករកទីកន្លែងដែលល្បីជាងគេបំផុតនៅកម្ពុជា"}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination) => (
            <Link 
              to={`/destinations/${destination.id}`} 
              key={destination.id} 
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={language === "en" ? destination.name : destination.nameKh}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">
                    {language === "en" ? destination.name : destination.nameKh}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                    {language === "en" ? destination.description : destination.descriptionKh}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {language === "en" ? "Starting from" : "ចាប់ពី"}
                    </span>
                    <CurrencyDisplay 
                      amount={destination.priceUSD} 
                      baseCurrency="USD"
                      className="text-lg font-bold text-cambodia-blue" 
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
