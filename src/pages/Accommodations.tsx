
import { MainLayout } from "@/layouts/MainLayout";
import { useApp } from "@/contexts/AppContext";
import { Hotel } from "lucide-react";

const Accommodations = () => {
  const { translations } = useApp();
  
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Hotel className="w-8 h-8 mr-2 text-cambodia-red" />
          <h1 className="text-3xl font-bold">{translations["accommodations.title"] || "Accommodations"}</h1>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          {translations["accommodations.description"] || "Discover comfortable stays across Cambodia"}
        </p>
      </div>
    </MainLayout>
  );
};

export default Accommodations;
