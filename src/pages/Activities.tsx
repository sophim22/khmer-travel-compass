
import { MainLayout } from "@/layouts/MainLayout";
import { useApp } from "@/contexts/AppContext";
import { Activity } from "lucide-react";

const Activities = () => {
  const { translations } = useApp();
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Activity className="w-8 h-8 mr-2 text-cambodia-red" />
          <h1 className="text-3xl font-bold">{translations["activities.title"] || "Activities & Tours"}</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          {translations["activities.description"] || "Explore exciting activities and tours in Cambodia"}
        </p>
      </div>
    </MainLayout>
  );
};

export default Activities;
