
import { ReactNode, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../contexts/AppContext";
import { 
  BarChart3, 
  Users, 
  Calendar, 
  PackageOpen, 
  Settings, 
  LogOut, 
  Menu,
  X,
  ChevronRight,
  Sun,
  Moon,
  Globe
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";

interface AdminLayoutProps {
  children: ReactNode;
}

interface SidebarItem {
  label: string;
  labelKh: string;
  icon: React.ReactNode;
  path: string;
}

export const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { user, logout, language, setLanguage, theme, setTheme } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  
  const sidebarItems: SidebarItem[] = [
    {
      label: "Dashboard",
      labelKh: "ផ្ទាំងគ្រប់គ្រង",
      icon: <BarChart3 size={20} />,
      path: "/admin",
    },
    {
      label: "Bookings",
      labelKh: "ការកក់",
      icon: <Calendar size={20} />,
      path: "/admin/bookings",
    },
    {
      label: "Users",
      labelKh: "អ្នកប្រើប្រាស់",
      icon: <Users size={20} />,
      path: "/admin/users",
    },
    {
      label: "Content",
      labelKh: "មាតិកា",
      icon: <PackageOpen size={20} />,
      path: "/admin/content",
    },
    {
      label: "Settings",
      labelKh: "ការកំណត់",
      icon: <Settings size={20} />,
      path: "/admin/settings",
    },
  ];
  
  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "km" : "en");
  };
  
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside 
        className={`bg-white dark:bg-gray-800 shadow-lg ${
          sidebarOpen ? "w-64" : "w-20"
        } transition-all duration-300 ease-in-out flex flex-col fixed h-screen z-30`}
      >
        <div className="flex justify-between items-center py-4 px-6">
          {sidebarOpen && (
            <Link to="/" className="text-xl font-bold bg-gradient-to-r from-cambodia-red to-cambodia-blue bg-clip-text text-transparent">
              KTC Admin
            </Link>
          )}
          <Button variant="ghost" size="sm" onClick={toggleSidebar}>
            {sidebarOpen ? <ChevronRight size={18} /> : <Menu size={18} />}
          </Button>
        </div>
        
        <Separator />
        
        <nav className="flex-1 py-4 overflow-y-auto">
          <ul className="space-y-1">
            {sidebarItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center py-3 px-6 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    location.pathname === item.path
                      ? "bg-cambodia-blue/10 text-cambodia-blue dark:bg-cambodia-blue/20 dark:text-cambodia-blue"
                      : ""
                  } ${!sidebarOpen ? "justify-center" : ""}`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {sidebarOpen && <span>{language === "en" ? item.label : item.labelKh}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="p-4">
          {sidebarOpen && (
            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-sm">
                <div className="w-8 h-8 bg-cambodia-blue text-white rounded-full flex items-center justify-center font-medium mr-2">
                  {user?.name?.charAt(0) || "U"}
                </div>
                <div>
                  <p className="font-medium">{user?.name || "Admin User"}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {user?.email || user?.phoneNumber}
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" onClick={toggleTheme} title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}>
                  {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
                </Button>
                
                <Button variant="ghost" size="icon" onClick={toggleLanguage} title={language === "en" ? "Switch to Khmer" : "Switch to English"}>
                  <Globe size={18} />
                </Button>
                
                <Button variant="ghost" size="icon" onClick={handleLogout} className="text-red-500" title="Logout">
                  <LogOut size={18} />
                </Button>
              </div>
            </div>
          )}
          
          {!sidebarOpen && (
            <div className="flex flex-col items-center space-y-4">
              <div className="w-8 h-8 bg-cambodia-blue text-white rounded-full flex items-center justify-center font-medium">
                {user?.name?.charAt(0) || "U"}
              </div>
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleLanguage}>
                <Globe size={18} />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleLogout} className="text-red-500">
                <LogOut size={18} />
              </Button>
            </div>
          )}
        </div>
      </aside>
      
      {/* Main Content */}
      <main className={`flex-1 ${sidebarOpen ? "ml-64" : "ml-20"} transition-all duration-300 overflow-y-auto`}>
        <div className="py-6 px-8">
          {children}
        </div>
      </main>
    </div>
  );
};
