
import { Link } from "react-router-dom";
import { Menu, X, Globe, Sun, Moon, User } from "lucide-react";
import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

export const Header = () => {
  const { translations, language, setLanguage, theme, setTheme, isAuthenticated, user, logout } = useApp();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "km" : "en");
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-cambodia-red to-cambodia-blue bg-clip-text text-transparent">
              Khmer Travel Compass
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-cambodia-red">
              {translations["nav.home"]}
            </Link>
            <Link to="/accommodations" className="text-gray-700 dark:text-gray-200 hover:text-cambodia-red">
              {translations["nav.accommodations"]}
            </Link>
            <Link to="/transportation" className="text-gray-700 dark:text-gray-200 hover:text-cambodia-red">
              {translations["nav.transportation"]}
            </Link>
            <Link to="/activities" className="text-gray-700 dark:text-gray-200 hover:text-cambodia-red">
              {translations["nav.activities"]}
            </Link>
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleLanguage} title={language === "en" ? "Switch to Khmer" : "Switch to English"}>
              <Globe size={20} />
            </Button>
            
            <Button variant="ghost" size="icon" onClick={toggleTheme} title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}>
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <User size={16} />
                    <span>{user?.name || "User"}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  {user?.isAdmin && (
                    <DropdownMenuItem>
                      <Link to="/admin" className="w-full">{translations["nav.admin"]}</Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button variant="outline">{translations["nav.login"]}</Button>
                </Link>
                <Link to="/register">
                  <Button>{translations["nav.register"]}</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 dark:text-gray-200" onClick={closeMenu}>
                {translations["nav.home"]}
              </Link>
              <Link to="/accommodations" className="text-gray-700 dark:text-gray-200" onClick={closeMenu}>
                {translations["nav.accommodations"]}
              </Link>
              <Link to="/transportation" className="text-gray-700 dark:text-gray-200" onClick={closeMenu}>
                {translations["nav.transportation"]}
              </Link>
              <Link to="/activities" className="text-gray-700 dark:text-gray-200" onClick={closeMenu}>
                {translations["nav.activities"]}
              </Link>
              
              <div className="flex items-center space-x-4 pt-2">
                <Button variant="ghost" size="icon" onClick={toggleLanguage}>
                  <Globe size={20} />
                  <span className="ml-2">{language === "en" ? "Khmer" : "English"}</span>
                </Button>
                
                <Button variant="ghost" size="icon" onClick={toggleTheme}>
                  {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                  <span className="ml-2">{theme === "light" ? "Dark" : "Light"}</span>
                </Button>
              </div>
              
              {isAuthenticated ? (
                <div className="space-y-2 pt-2">
                  <Link to="/profile" className="block" onClick={closeMenu}>
                    <Button variant="outline" className="w-full">Profile</Button>
                  </Link>
                  {user?.isAdmin && (
                    <Link to="/admin" className="block" onClick={closeMenu}>
                      <Button variant="outline" className="w-full">{translations["nav.admin"]}</Button>
                    </Link>
                  )}
                  <Button variant="destructive" className="w-full" onClick={() => { logout(); closeMenu(); }}>
                    Logout
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-2">
                  <Link to="/login" onClick={closeMenu}>
                    <Button variant="outline" className="w-full">{translations["nav.login"]}</Button>
                  </Link>
                  <Link to="/register" onClick={closeMenu}>
                    <Button className="w-full">{translations["nav.register"]}</Button>
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
