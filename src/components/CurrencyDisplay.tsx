
import { useApp } from "../contexts/AppContext";
import { convertCurrency, formatCurrency } from "../utils/helpers";
import { useState } from "react";

interface CurrencyDisplayProps {
  amount: number;
  baseCurrency: "USD" | "KHR";
  showToggle?: boolean;
  className?: string;
}

export const CurrencyDisplay = ({ amount, baseCurrency, showToggle = true, className = "" }: CurrencyDisplayProps) => {
  const { currency, setCurrency } = useApp();
  const [showBothCurrencies, setShowBothCurrencies] = useState(false);
  
  const displayedCurrency = showBothCurrencies ? (baseCurrency === "USD" ? "KHR" : "USD") : currency;
  const convertedAmount = baseCurrency !== displayedCurrency 
    ? convertCurrency(amount, baseCurrency, displayedCurrency)
    : amount;
  
  const formattedAmount = formatCurrency(convertedAmount, displayedCurrency);
  const originalAmount = baseCurrency === currency 
    ? "" 
    : ` (${formatCurrency(amount, baseCurrency)})`;
  
  const toggleCurrency = () => {
    if (showToggle) {
      if (showBothCurrencies) {
        setShowBothCurrencies(false);
      } else {
        setCurrency(currency === "USD" ? "KHR" : "USD");
      }
    }
  };
  
  const displayBothCurrencies = () => {
    setShowBothCurrencies(!showBothCurrencies);
  };
  
  return (
    <div className={`currency-wrapper ${className}`}>
      <span onClick={toggleCurrency} className="cursor-pointer">
        {formattedAmount}
        {showBothCurrencies && originalAmount}
      </span>
      {showToggle && (
        <span className="currency-toggle" onClick={displayBothCurrencies}>
          {showBothCurrencies ? "−" : "+"}
        </span>
      )}
    </div>
  );
};
