
import { MainLayout } from "@/layouts/MainLayout";
import { useApp } from "@/contexts/AppContext";
import { Plane } from "lucide-react";

const Transportation = () => {
  const { translations } = useApp();
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Plane className="w-8 h-8 mr-2 text-cambodia-red" />
          <h1 className="text-3xl font-bold">{translations["transportation.title"] || "Transportation"}</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          {translations["transportation.description"] || "Find the best ways to travel around Cambodia"}
        </p>
      </div>
    </MainLayout>
  );
};

export default Transportation;
