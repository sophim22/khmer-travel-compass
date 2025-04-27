
import { MainLayout } from "../layouts/MainLayout";
import { HomeHero } from "../components/HomeHero";
import { FeaturedDestinations } from "../components/FeaturedDestinations";
import { useApp } from "../contexts/AppContext";

const Index = () => {
  const { language } = useApp();
  
  return (
    <MainLayout>
      <HomeHero />
      <FeaturedDestinations />
      
      {/* Popular Experiences Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            {language === "en" ? "Popular Experiences" : "បទពិសោធន៍ដែលពេញនិយម"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
            {language === "en" 
              ? "Discover unique activities and tours" 
              : "រកឃើញសកម្មភាព និងដំណើរកម្សាន្តពិសេសៗ"}
          </p>
          
          {/* Experiences Grid - Placeholder for now */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-md">
                <div className="h-48 bg-gray-200 dark:bg-gray-600 animate-pulse" />
                <div className="p-5">
                  <div className="h-6 bg-gray-200 dark:bg-gray-600 rounded mb-2 animate-pulse" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-4 animate-pulse" />
                  <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded mb-2 w-3/4 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Travel Tips Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-2 text-center">
            {language === "en" ? "Cambodia Travel Tips" : "គន្លឹះធ្វើដំណើរកម្ពុជា"}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-10 text-center">
            {language === "en" 
              ? "Essential information for your journey" 
              : "ព័ត៌មានសំខាន់ៗសម្រាប់ការធ្វើដំណើររបស់អ្នក"}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                {language === "en" ? "Best Time to Visit" : "ពេលវេលាល្អបំផុតដើម្បីទស្សនា"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === "en" 
                  ? "November to April is the dry season with comfortable temperatures." 
                  : "ខែវិច្ឆិកាដល់ខែមេសា គឺជារដូវប្រាំង ដែលមានសីតុណ្ហភាពស្រួល។"}
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                {language === "en" ? "Currency" : "រូបិយប័ណ្ណ"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === "en" 
                  ? "Both USD and Cambodian Riel (KHR) are widely accepted." 
                  : "ទាំងដុល្លារអាមេរិក និងប្រាក់រៀលខ្មែរ (KHR) ត្រូវបានទទួលយកយ៉ាងទូលំទូលាយ។"}
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                {language === "en" ? "Transportation" : "ការធ្វើដំណើរ"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === "en" 
                  ? "Tuk-tuks, buses, and boat services connect major destinations." 
                  : "ទូកតុក តុកម៉ុក រថយន្តក្រុង និងសេវាទូក ភ្ជាប់គោលដៅសំខាន់ៗ។"}
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                {language === "en" ? "Local Customs" : "ទំនៀមទម្លាប់ក្នុងស្រុក"}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {language === "en" 
                  ? "Remove shoes before entering temples and dress modestly." 
                  : "ដោះស្បែកជើងមុនពេលចូលវត្ត និងស្លៀកពាក់សមរម្យ។"}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cambodia-blue to-cambodia-red text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            {language === "en" ? "Ready to Explore Cambodia?" : "រួចរាល់ដើម្បីរុករកកម្ពុជា?"}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {language === "en" 
              ? "Create your perfect itinerary with Khmer Travel Compass." 
              : "បង្កើតគម្រោងដំណើរកម្សាន្តឥតខ្ចោះរបស់អ្នកជាមួយ Khmer Travel Compass។"}
          </p>
          <button className="bg-white text-cambodia-blue hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors">
            {language === "en" ? "Start Planning" : "ចាប់ផ្តើមរៀបចំផែនការ"}
          </button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
