
import { useState } from "react";
import { MainLayout } from "../layouts/MainLayout";
import { useApp } from "../contexts/AppContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Facebook, Phone } from "lucide-react";
import { toast } from "../components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { language, login } = useApp();
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  // This is just a mock login for demonstration purposes
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would validate credentials against an API
    if (phoneNumber.trim() === "+85512345678" && password === "password") {
      login("mock-jwt-token", {
        id: "user123",
        phoneNumber,
        name: "Demo User",
        isAdmin: true,
      });
      
      toast({
        title: language === "en" ? "Login Successful" : "ការចូលបានជោគជ័យ",
        description: language === "en" 
          ? "Welcome back to Khmer Travel Compass!" 
          : "សូមស្វាគមន៍មកកាន់ Khmer Travel Compass!",
      });
      
      navigate("/");
    } else {
      toast({
        title: language === "en" ? "Login Failed" : "ការចូលបានបរាជ័យ",
        description: language === "en" 
          ? "Invalid credentials. For demo, use: +85512345678 / password" 
          : "ព័ត៌មានមិនត្រឹមត្រូវ។ សម្រាប់ការបង្ហាញ សូមប្រើ៖ +85512345678 / password",
        variant: "destructive",
      });
    }
  };

  const handleSendCode = () => {
    // In a real app, this would send a verification code via SMS
    if (!phoneNumber.trim()) {
      toast({
        title: language === "en" ? "Error" : "បញ្ហា",
        description: language === "en" 
          ? "Please enter a valid phone number" 
          : "សូមបញ្ចូលលេខទូរស័ព្ទដែលត្រឹមត្រូវ",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: language === "en" ? "Code Sent" : "កូដត្រូវបានផ្ញើ",
      description: language === "en" 
        ? "A verification code has been sent to your phone." 
        : "កូដផ្ទៀងផ្ទាត់ត្រូវបានផ្ញើទៅកាន់ទូរស័ព្ទរបស់អ្នក។",
    });
    
    setIsCodeSent(true);
  };

  const handleVerifyCode = () => {
    // In a real app, this would verify the code against an API
    if (verificationCode === "123456") {
      login("mock-jwt-token", {
        id: "user123",
        phoneNumber,
        isAdmin: false,
      });
      
      toast({
        title: language === "en" ? "Verification Successful" : "ការផ្ទៀងផ្ទាត់បានជោគជ័យ",
        description: language === "en" 
          ? "You have successfully logged in!" 
          : "អ្នកបានចូលដោយជោគជ័យ!",
      });
      
      navigate("/");
    } else {
      toast({
        title: language === "en" ? "Verification Failed" : "ការផ្ទៀងផ្ទាត់បានបរាជ័យ",
        description: language === "en" 
          ? "Invalid verification code. For demo, use: 123456" 
          : "កូដផ្ទៀងផ្ទាត់មិនត្រឹមត្រូវ។ សម្រាប់ការបង្ហាញ សូមប្រើ៖ 123456",
        variant: "destructive",
      });
    }
  };

  const handleSocialLogin = () => {
    // In a real app, this would integrate with social login providers
    toast({
      title: language === "en" ? "Social Login" : "ការចូលតាមបណ្តាញសង្គម",
      description: language === "en" 
        ? "Social login integration would be implemented here." 
        : "ការភ្ជាប់ការចូលតាមបណ្តាញសង្គមនឹងត្រូវបានអនុវត្តនៅទីនេះ។",
    });
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                {language === "en" ? "Login to Your Account" : "ចូលទៅគណនីរបស់អ្នក"}
              </CardTitle>
              <CardDescription className="text-center">
                {language === "en" 
                  ? "Choose your preferred login method" 
                  : "ជ្រើសរើសវិធីចូលដែលអ្នកចូលចិត្ត"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="phone" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="phone" className="flex items-center gap-2">
                    <Phone size={16} />
                    {language === "en" ? "Phone Number" : "លេខទូរស័ព្ទ"}
                  </TabsTrigger>
                  <TabsTrigger value="password">
                    {language === "en" ? "Password" : "ពាក្យសម្ងាត់"}
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="phone">
                  {!isCodeSent ? (
                    <div className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {language === "en" ? "Phone Number" : "លេខទូរស័ព្ទ"}
                        </label>
                        <Input
                          type="tel"
                          placeholder="+855"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <Button className="w-full" onClick={handleSendCode}>
                        {language === "en" ? "Send Verification Code" : "ផ្ញើកូដផ្ទៀងផ្ទាត់"}
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4 mt-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {language === "en" ? "Verification Code" : "កូដផ្ទៀងផ្ទាត់"}
                        </label>
                        <Input
                          type="text"
                          placeholder="123456"
                          value={verificationCode}
                          onChange={(e) => setVerificationCode(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-between">
                        <Button variant="outline" onClick={() => setIsCodeSent(false)}>
                          {language === "en" ? "Back" : "ត្រឡប់ក្រោយ"}
                        </Button>
                        <Button onClick={handleVerifyCode}>
                          {language === "en" ? "Verify Code" : "ផ្ទៀងផ្ទាត់កូដ"}
                        </Button>
                      </div>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="password">
                  <form onSubmit={handleLogin} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        {language === "en" ? "Phone Number" : "លេខទូរស័ព្ទ"}
                      </label>
                      <Input
                        type="tel"
                        placeholder="+855"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          {language === "en" ? "Password" : "ពាក្យសម្ងាត់"}
                        </label>
                        <a href="/forgot-password" className="text-sm text-cambodia-blue hover:underline">
                          {language === "en" ? "Forgot password?" : "ភ្លេចពាក្យសម្ងាត់?"}
                        </a>
                      </div>
                      <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      {language === "en" ? "Login" : "ចូល"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
              
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-gray-300 dark:border-gray-600" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white dark:bg-gray-800 px-2 text-gray-500 dark:text-gray-400">
                    {language === "en" ? "Or continue with" : "ឬបន្តជាមួយ"}
                  </span>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <Button variant="outline" onClick={handleSocialLogin} className="flex items-center gap-2">
                  <Facebook size={16} />
                  {language === "en" ? "Login with Facebook" : "ចូលជាមួយ Facebook"}
                </Button>
                <Button variant="outline" onClick={handleSocialLogin} className="flex items-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  {language === "en" ? "Login with Google" : "ចូលជាមួយ Google"}
                </Button>
              </div>
              
              <div className="mt-6 text-center text-sm">
                {language === "en" ? "Don't have an account? " : "មិនមានគណនីមែនទេ? "}
                <a href="/register" className="text-cambodia-blue hover:underline">
                  {language === "en" ? "Sign up" : "ចុះឈ្មោះ"}
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
