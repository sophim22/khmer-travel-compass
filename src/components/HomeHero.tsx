
import { useState } from "react";
import { Search, Bed, Bus, MapPin } from "lucide-react";
import { useApp } from "../contexts/AppContext";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";

export const HomeHero = () => {
  const { translations, language } = useApp();
  const [searchTab, setSearchTab] = useState("accommodation");
  
  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-khmer">
          {translations["home.welcome"]}
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          {translations["home.tagline"]}
        </p>
        
        {/* Search Box */}
        <div className="w-full max-w-3xl bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <Tabs defaultValue="accommodation" value={searchTab} onValueChange={setSearchTab} className="w-full">
            <TabsList className="grid grid-cols-3 mb-6">
              <TabsTrigger value="accommodation" className="flex items-center gap-2">
                <Bed size={18} />
                <span>{language === "en" ? "Accommodations" : "កន្លែងស្នាក់នៅ"}</span>
              </TabsTrigger>
              <TabsTrigger value="transportation" className="flex items-center gap-2">
                <Bus size={18} />
                <span>{language === "en" ? "Transportation" : "ការធ្វើដំណើរ"}</span>
              </TabsTrigger>
              <TabsTrigger value="activities" className="flex items-center gap-2">
                <MapPin size={18} />
                <span>{language === "en" ? "Activities" : "សកម្មភាព"}</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="accommodation">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    type="text" 
                    placeholder={language === "en" ? "Where are you going?" : "តើអ្នកធ្វើដំណើរទៅកាន់ទីណា?"} 
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <Input 
                    type="date" 
                    placeholder={language === "en" ? "Check-in" : "ចូល"}
                    className="w-full"
                  />
                  <Input 
                    type="date" 
                    placeholder={language === "en" ? "Check-out" : "ចេញ"}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="md:w-auto w-full bg-cambodia-blue hover:bg-cambodia-blue/80">
                  <Search size={18} className="mr-2" />
                  {language === "en" ? "Search" : "ស្វែងរក"}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="transportation">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    type="text" 
                    placeholder={language === "en" ? "Departure" : "ចាកចេញ"} 
                    className="w-full"
                  />
                </div>
                <div className="flex-1">
                  <Input 
                    type="text" 
                    placeholder={language === "en" ? "Destination" : "គោលដៅ"} 
                    className="w-full"
                  />
                </div>
                <div className="flex-1">
                  <Input 
                    type="date" 
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="md:w-auto w-full bg-cambodia-blue hover:bg-cambodia-blue/80">
                  <Search size={18} className="mr-2" />
                  {language === "en" ? "Search" : "ស្វែងរក"}
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="activities">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input 
                    type="text" 
                    placeholder={language === "en" ? "Activity type or location" : "ប្រភេទសកម្មភាព ឬទីតាំង"} 
                    className="w-full"
                  />
                </div>
                <div className="flex-1">
                  <Input 
                    type="date" 
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="md:w-auto w-full bg-cambodia-blue hover:bg-cambodia-blue/80">
                  <Search size={18} className="mr-2" />
                  {language === "en" ? "Search" : "ស្វែងរក"}
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
