
import { ReactNode } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useApp } from "../contexts/AppContext";
import { toast } from "../components/ui/use-toast";
import { isOffline } from "../utils/helpers";
import { useEffect } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const { language } = useApp();
  
  // Check for offline status
  useEffect(() => {
    const handleOnlineStatusChange = () => {
      if (isOffline()) {
        toast({
          title: language === "en" ? "You are offline" : "អ្នកស្ថិតនៅក្រៅបណ្តាញ",
          description: language === "en" 
            ? "Some features may be limited until connectivity is restored." 
            : "មុខងារមួយចំនួនអាចនឹងមានកម្រិតរហូតដល់ការភ្ជាប់អ៊ីនធឺណិតត្រូវបានស្តារឡើងវិញ។",
          variant: "destructive",
        });
      } else {
        toast({
          title: language === "en" ? "You are back online" : "អ្នកបានភ្ជាប់បណ្តាញឡើងវិញ",
          description: language === "en" 
            ? "All features are now available." 
            : "មុខងារទាំងអស់ឥឡូវនេះអាចប្រើបាន។",
        });
      }
    };
    
    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);
    
    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, [language]);
  
  return (
    <div className={`min-h-screen flex flex-col ${language === "km" ? 'font-khmer' : ''}`}>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};
