
import { AdminLayout } from "../../layouts/AdminLayout";
import { useApp } from "../../contexts/AppContext";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp, 
  MapPin, 
  Bus,
  Bed
} from "lucide-react";
import { CurrencyDisplay } from "../../components/CurrencyDisplay";

// Mock data for the dashboard
const analyticsMockData = {
  totalBookings: 1287,
  totalUsers: 967,
  totalRevenue: 78450,
  activeListings: 233,
  bookingsToday: 42,
  bookingsWeek: 284,
  topDestinations: [
    { name: "Angkor Wat", bookings: 385 },
    { name: "Siem Reap", bookings: 302 },
    { name: "Phnom Penh", bookings: 245 },
    { name: "Sihanoukville", bookings: 187 },
    { name: "Koh Rong", bookings: 168 },
  ],
  bookingTypes: {
    accommodation: 532,
    transportation: 418,
    activities: 337,
  },
  revenueByMonth: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    values: [4200, 5100, 5800, 8100, 7200, 6300, 6900, 9400, 8700, 7500, 8900, 10400],
  },
};

const AdminDashboard = () => {
  const { language } = useApp();
  
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {language === "en" ? "Admin Dashboard" : "ផ្ទាំងគ្រប់គ្រងអ្នកគ្រប់គ្រង"}
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          {language === "en" 
            ? "Manage your travel services and monitor platform performance." 
            : "គ្រប់គ្រងសេវាកម្មដំណើរកម្សាន្តរបស់អ្នក និងតាមដានដំណើរការវេទិកា។"}
        </p>
      </div>
      
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {language === "en" ? "Total Bookings" : "ការកក់សរុប"}
                </p>
                <h3 className="text-2xl font-bold mt-1">{analyticsMockData.totalBookings}</h3>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <TrendingUp size={12} className="mr-1" />
                  +12.5% {language === "en" ? "from last month" : "ពីខែមុន"}
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-blue-500 dark:text-blue-300" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {language === "en" ? "Total Users" : "អ្នកប្រើប្រាស់សរុប"}
                </p>
                <h3 className="text-2xl font-bold mt-1">{analyticsMockData.totalUsers}</h3>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <TrendingUp size={12} className="mr-1" />
                  +8.2% {language === "en" ? "from last month" : "ពីខែមុន"}
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                <Users className="h-6 w-6 text-purple-500 dark:text-purple-300" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {language === "en" ? "Total Revenue" : "ចំណូលសរុប"}
                </p>
                <h3 className="text-2xl font-bold mt-1">
                  <CurrencyDisplay amount={analyticsMockData.totalRevenue} baseCurrency="USD" showToggle={false} />
                </h3>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <TrendingUp size={12} className="mr-1" />
                  +15.3% {language === "en" ? "from last month" : "ពីខែមុន"}
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-900 p-3 rounded-full">
                <DollarSign className="h-6 w-6 text-green-500 dark:text-green-300" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {language === "en" ? "Active Listings" : "មាតិកាសកម្ម"}
                </p>
                <h3 className="text-2xl font-bold mt-1">{analyticsMockData.activeListings}</h3>
                <p className="text-xs text-green-500 mt-1 flex items-center">
                  <TrendingUp size={12} className="mr-1" />
                  +5.7% {language === "en" ? "from last month" : "ពីខែមុន"}
                </p>
              </div>
              <div className="bg-amber-100 dark:bg-amber-900 p-3 rounded-full">
                <MapPin className="h-6 w-6 text-amber-500 dark:text-amber-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>
              {language === "en" ? "Booking Analytics" : "ការវិភាគការកក់"}
            </CardTitle>
            <CardDescription>
              {language === "en" 
                ? "Bookings and revenue trends over time" 
                : "និន្នាការការកក់និងប្រាក់ចំណូលតាមពេលវេលា"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* In a real app, this would be a chart */}
            <div className="h-[300px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">
                {language === "en" 
                  ? "Revenue chart would be displayed here" 
                  : "តារាងប្រាក់ចំណូលនឹងត្រូវបង្ហាញនៅទីនេះ"}
              </p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {language === "en" ? "Top Destinations" : "គោលដៅពេញនិយម"}
            </CardTitle>
            <CardDescription>
              {language === "en" 
                ? "Most booked destinations" 
                : "គោលដៅដែលបានកក់ច្រើនបំផុត"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {analyticsMockData.topDestinations.map((destination, index) => (
                <li key={index} className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="w-6 h-6 rounded-full bg-cambodia-blue/20 text-cambodia-blue flex items-center justify-center text-xs mr-2">
                      {index + 1}
                    </span>
                    <span className="text-sm font-medium">{destination.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{destination.bookings} {language === "en" ? "bookings" : "ការកក់"}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>
              {language === "en" ? "Booking by Service Type" : "ការកក់តាមប្រភេទសេវាកម្ម"}
            </CardTitle>
            <CardDescription>
              {language === "en" 
                ? "Distribution of bookings across service types" 
                : "ការបែងចែកការកក់តាមប្រភេទសេវាកម្ម"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <div className="mb-2 p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                  <Bed className="h-6 w-6 text-blue-500 dark:text-blue-300" />
                </div>
                <span className="text-xl font-bold">{analyticsMockData.bookingTypes.accommodation}</span>
                <span className="text-sm text-gray-500">{language === "en" ? "Accommodations" : "កន្លែងស្នាក់នៅ"}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2 p-3 bg-green-100 dark:bg-green-900 rounded-full">
                  <Bus className="h-6 w-6 text-green-500 dark:text-green-300" />
                </div>
                <span className="text-xl font-bold">{analyticsMockData.bookingTypes.transportation}</span>
                <span className="text-sm text-gray-500">{language === "en" ? "Transportation" : "ការធ្វើដំណើរ"}</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="mb-2 p-3 bg-amber-100 dark:bg-amber-900 rounded-full">
                  <MapPin className="h-6 w-6 text-amber-500 dark:text-amber-300" />
                </div>
                <span className="text-xl font-bold">{analyticsMockData.bookingTypes.activities}</span>
                <span className="text-sm text-gray-500">{language === "en" ? "Activities" : "សកម្មភាព"}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {language === "en" ? "Recent Activity" : "សកម្មភាពថ្មីៗ"}
            </CardTitle>
            <CardDescription>
              {language === "en" 
                ? "Latest bookings and user activities" 
                : "ការកក់ចុងក្រោយនិងសកម្មភាពអ្នកប្រើប្រាស់"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {/* Activity items would go here - just placeholders for now */}
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700" />
                  <div className="flex-1">
                    <div className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2" />
                    <div className="h-3 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
                  </div>
                  <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
