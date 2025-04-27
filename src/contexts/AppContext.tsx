
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "km";
type Currency = "USD" | "KHR";
type Theme = "light" | "dark";

interface AuthUser {
  id: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  isAdmin: boolean;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  currency: Currency;
  setCurrency: (curr: Currency) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (token: string, user: AuthUser) => void;
  logout: () => void;
  translations: Record<string, string>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const englishTranslations = {
  "nav.home": "Home",
  "nav.accommodations": "Accommodations",
  "nav.transportation": "Transportation",
  "nav.activities": "Activities & Tours",
  "nav.login": "Login",
  "nav.register": "Register",
  "nav.admin": "Admin Dashboard",
  "home.welcome": "Discover Cambodia",
  "home.tagline": "Experience the beauty and culture of the Kingdom of Wonder",
  "accommodations.title": "Find Your Perfect Stay",
  "transportation.title": "Book Your Transportation",
  "activities.title": "Explore Activities & Tours",
  "admin.dashboard": "Dashboard",
  "admin.bookings": "Bookings",
  "admin.users": "Users",
  "admin.content": "Content",
  "auth.login": "Login",
  "auth.register": "Register",
  "auth.phone": "Phone Number",
  "auth.password": "Password",
  "auth.submit": "Submit",
};

const khmerTranslations = {
  "nav.home": "ទំព័រដើម",
  "nav.accommodations": "កន្លែងស្នាក់នៅ",
  "nav.transportation": "ការធ្វើដំណើរ",
  "nav.activities": "សកម្មភាព និងដំណើរកម្សាន្ត",
  "nav.login": "ចូល",
  "nav.register": "ចុះឈ្មោះ",
  "nav.admin": "ផ្ទាំងគ្រប់គ្រង",
  "home.welcome": "រកឃើញកម្ពុជា",
  "home.tagline": "បទពិសោធន៍នៃសម្រស់និងវប្បធម៌របស់ប្រទេសនៃការអស្ចារ្យ",
  "accommodations.title": "ស្វែងរកកន្លែងស្នាក់នៅល្អឥតខ្ចោះរបស់អ្នក",
  "transportation.title": "កក់ការធ្វើដំណើររបស់អ្នក",
  "activities.title": "រុករកសកម្មភាព និងដំណើរកម្សាន្ត",
  "admin.dashboard": "ផ្ទាំងគ្រប់គ្រង",
  "admin.bookings": "ការកក់",
  "admin.users": "អ្នកប្រើប្រាស់",
  "admin.content": "មាតិកា",
  "auth.login": "ចូល",
  "auth.register": "ចុះឈ្មោះ",
  "auth.phone": "លេខទូរស័ព្ទ",
  "auth.password": "ពាក្យសម្ងាត់",
  "auth.submit": "បញ្ជូន",
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    return (saved as Language) || "en";
  });
  
  const [currency, setCurrency] = useState<Currency>(() => {
    const saved = localStorage.getItem("currency");
    return (saved as Currency) || "USD";
  });
  
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("theme");
    return (saved as Theme) || "light";
  });
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  
  // Load auth state from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");
    
    if (token && savedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(savedUser));
    }
  }, []);
  
  // Save preferences to localStorage when they change
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  
  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  
  const login = (token: string, userData: AuthUser) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
    setIsAuthenticated(true);
    setUser(userData);
  };
  
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setUser(null);
  };
  
  const translations = language === "en" ? englishTranslations : khmerTranslations;
  
  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        currency,
        setCurrency,
        theme,
        setTheme,
        isAuthenticated,
        user,
        login,
        logout,
        translations,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
