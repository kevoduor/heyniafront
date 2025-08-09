import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { updateMetaTags } from "@/utils/seo";
import loginBg from "@/assets/footer-background.jpg";

const Login = () => {
  useEffect(() => {
    updateMetaTags(
      "Login to HeyNia - Dental Practice Management Software",
      "Access your HeyNia dental clinic dashboard to manage appointments, patient communications, and marketing automation.",
      "https://dental-clinic-management-software.com/login"
    );
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4" style={{
      backgroundImage: `url(${loginBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Login Card */}
      <div className="relative w-full max-w-md">
        {/* Glassmorphism Container */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Link to="/" className="text-3xl font-bold text-white mb-2 block">
              HeyNia
            </Link>
            <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-white/80">Sign in to access your dental practice dashboard</p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-white/90 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all duration-200"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 bg-white/10 border border-white/20 rounded focus:ring-brand-pink"
                />
                <span className="ml-2 text-white/80 text-sm">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-brand-pink hover:text-brand-pink/80 text-sm transition-colors duration-200">
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <Button type="submit" variant="pink" className="w-full py-3 text-lg">
              Sign In
            </Button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-transparent text-white/60">Or continue with</span>
              </div>
            </div>

            {/* Social Login */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button 
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-white text-gray-900 border border-white/20 rounded-lg hover:bg-white/90 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.915 31.91 29.383 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.156 7.957 3.043l5.657-5.657C34.842 6.053 29.7 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.651-.389-3.917z"/>
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 16.045 18.961 12 24 12c3.059 0 5.842 1.156 7.957 3.043l5.657-5.657C34.842 6.053 29.7 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 44c5.311 0 10.206-2.042 13.86-5.373l-6.396-5.402C29.383 36 24 36 24 36c-5.345 0-9.86-3.445-11.494-8.241l-6.59 5.077C8.24 39.556 15.56 44 24 44z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.02 2.91-3.085 5.335-5.699 6.944.002-.001.003-.001.005-.002l6.396 5.402C35.206 41.958 40.111 44 44 44c8.836 0 16-7.163 16-16 0-1.341-.138-2.651-.389-3.917z"/>
                </svg>
                Continue with Google
              </button>
              <button 
                type="button"
                className="flex items-center justify-center px-4 py-3 bg-black text-white border border-white/20 rounded-lg hover:bg-black/90 transition-all duration-200"
              >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-1.15 0-2.08-.93-2.08-2.07C12.215.28 13.145 0 14.295 0c1.14 0 2.07.93 2.07 2.07zM21.56 16.75c-.05-3.26 2.66-4.8 2.78-4.87-1.52-2.21-3.88-2.51-4.71-2.55-2.01-.2-3.93 1.17-4.95 1.17-1.04 0-2.51-1.14-4.13-1.11-2.13.03-4.08 1.24-5.17 3.16-2.23 3.85-.57 9.54 1.6 12.66 1.06 1.53 2.32 3.25 3.98 3.19 1.6-.06 2.2-1.02 4.13-1.02 1.91 0 2.47 1.02 4.15.98 1.72-.03 2.81-1.55 3.86-3.1 1.24-1.82 1.75-3.58 1.78-3.67-.04-.02-3.41-1.3-3.46-5.04z"/>
                </svg>
                Continue with Apple
              </button>
            </div>
          </form>

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-white/80">
              Don't have an account?{" "}
              <Link to="/signup" className="text-brand-pink hover:text-brand-pink/80 font-semibold transition-colors duration-200">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link to="/" className="text-white/80 hover:text-white transition-colors duration-200">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;