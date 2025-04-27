
import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useApp } from "../contexts/AppContext";

export const LanguageSelector = () => {
  const { language, setLanguage, translations } = useApp();

  return (
    <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "km")}>
      <SelectTrigger className="w-[130px] bg-transparent border-none hover:bg-accent hover:text-accent-foreground">
        <Languages className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="km">ខ្មែរ</SelectItem>
      </SelectContent>
    </Select>
  );
};
