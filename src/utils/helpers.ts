
// Exchange rate (as of April 2025) - in a real app, this would be fetched from an API
const KHR_TO_USD = 0.00024;
const USD_TO_KHR = 4100;

/**
 * Convert amount between KHR and USD
 */
export const convertCurrency = (
  amount: number, 
  from: "KHR" | "USD", 
  to: "KHR" | "USD"
): number => {
  if (from === to) return amount;
  
  if (from === "KHR" && to === "USD") {
    return Math.round((amount * KHR_TO_USD) * 100) / 100; // Round to 2 decimal places
  } else {
    return Math.round(amount * USD_TO_KHR);
  }
};

/**
 * Format currency for display
 */
export const formatCurrency = (
  amount: number, 
  currency: "KHR" | "USD"
): string => {
  if (currency === "USD") {
    return `$${amount.toFixed(2)}`;
  } else {
    return `៛${amount.toLocaleString()}`;
  }
};

/**
 * Check if the device is offline
 */
export const isOffline = (): boolean => {
  return !navigator.onLine;
};

/**
 * Format phone number for Cambodia
 */
export const formatPhoneNumber = (phone: string): string => {
  // Strip non-numeric characters
  const cleaned = phone.replace(/\D/g, '');
  
  // Check if it's a Cambodian number
  if (cleaned.startsWith('855')) {
    // Format: +855 XX XXX XXXX
    return `+${cleaned.substring(0, 3)} ${cleaned.substring(3, 5)} ${cleaned.substring(5, 8)} ${cleaned.substring(8)}`;
  }
  
  // If it doesn't start with country code, assume it's a local number
  if (cleaned.startsWith('0')) {
    // Format: 0XX XXX XXXX
    return `${cleaned.substring(0, 3)} ${cleaned.substring(3, 6)} ${cleaned.substring(6)}`;
  }
  
  return phone; // Return as-is if we can't determine the format
};

/**
 * Get the base API URL
 */
export const getApiBaseUrl = (): string => {
  return process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api';
};

/**
 * Cache data in localStorage with expiration
 */
export const cacheData = (key: string, data: any, expirationMinutes = 60): void => {
  const item = {
    data,
    expiry: new Date().getTime() + (expirationMinutes * 60 * 1000)
  };
  localStorage.setItem(key, JSON.stringify(item));
};

/**
 * Get cached data if it's not expired
 */
export const getCachedData = (key: string): any | null => {
  const itemStr = localStorage.getItem(key);
  if (!itemStr) return null;
  
  const item = JSON.parse(itemStr);
  const now = new Date().getTime();
  
  // Check if the item is expired
  if (now > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  
  return item.data;
};
