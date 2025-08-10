import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, ShieldCheck, Bot, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { updateMetaTags } from "@/utils/seo";

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
    <div className="min-h-screen bg-muted flex items-center justify-center p-4">
      {/* Card Container */}
      <div className="w-full max-w-5xl bg-card rounded-2xl shadow-elegant border overflow-hidden animate-enter">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left - Form */}
          <div className="p-8 md:p-10">
            {/* Logo + Back Home */}
            <div className="flex items-center justify-between mb-8">
              <Link to="/" className="text-lg font-semibold tracking-tight text-foreground hover:opacity-80 transition">HeyNia</Link>
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition">← Home</Link>
            </div>

            <h1 className="text-2xl font-bold text-foreground mb-2">Welcome back!</h1>
            <p className="text-sm text-muted-foreground mb-8">Sign in to access your dental practice dashboard</p>

            <form className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-foreground">Password</label>
                  <Link to="/forgot-password" className="text-xs text-brand-pink hover:opacity-80">Reset password</Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 bg-background border border-input rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-transparent transition-all"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                    aria-label="Toggle password"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Submit */}
              <Button type="submit" variant="pink" className="w-full py-3 text-base">Log in</Button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center"><div className="w-full border-t" /></div>
                <div className="relative flex justify-center text-xs"><span className="px-2 bg-card text-muted-foreground">OR</span></div>
              </div>

              {/* Social */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button type="button" className="flex items-center justify-center px-4 py-2 text-sm bg-card text-foreground border rounded-full hover-scale transition">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 48 48" aria-hidden="true">
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.915 31.91 29.383 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.156 7.957 3.043l5.657-5.657C34.842 6.053 29.7 4 24 4 12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20c0-1.341-.138-2.651-.389-3.917z"/>
                    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 16.045 18.961 12 24 12c3.059 0 5.842 1.156 7.957 3.043l5.657-5.657C34.842 6.053 29.7 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                    <path fill="#4CAF50" d="M24 44c5.311 0 10.206-2.042 13.86-5.373l-6.396-5.402C29.383 36 24 36 24 36c-5.345 0-9.86-3.445-11.494-8.241l-6.59 5.077C8.24 39.556 15.56 44 24 44z"/>
                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-1.02 2.91-3.085 5.335-5.699 6.944.002-.001.003-.001.005-.002l6.396 5.402C35.206 41.958 40.111 44 44 44c8.836 0 16-7.163 16-16 0-1.341-.138-2.651-.389-3.917z"/>
                  </svg>
                  Continue with Google
                </button>
                <button type="button" className="flex items-center justify-center px-4 py-2 text-sm bg-foreground text-background border rounded-full hover:opacity-90 transition">
                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M16.365 1.43c0 1.14-.93 2.07-2.07 2.07-1.15 0-2.08-.93-2.08-2.07C12.215.28 13.145 0 14.295 0c1.14 0 2.07.93 2.07 2.07zM21.56 16.75c-.05-3.26 2.66-4.8 2.78-4.87-1.52-2.21-3.88-2.51-4.71-2.55-2.01-.2-3.93 1.17-4.95 1.17-1.04 0-2.51-1.14-4.13-1.11-2.13.03-4.08 1.24-5.17 3.16-2.23 3.85-.57 9.54 1.6 12.66 1.06 1.53 2.32 3.25 3.98 3.19 1.6-.06 2.2-1.02 4.13-1.02 1.91 0 2.47 1.02 4.15.98 1.72-.03 2.81-1.55 3.86-3.1 1.24-1.82 1.75-3.58 1.78-3.67-.04-.02-3.41-1.3-3.46-5.04z"/>
                  </svg>
                  Continue with Apple
                </button>
              </div>

              {/* Sign up link */}
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account? <Link to="/signup" className="text-brand-pink font-semibold hover:opacity-80">Create an account</Link>
                </p>
              </div>
            </form>
          </div>

          {/* Right - Image */}
          <div className="relative min-h-[300px] md:min-h-full">
            <img
              src="/lovable-uploads/23cca6e8-8da2-4663-bcf3-5ff457c6fdae.png"
              alt="Login visual for dental software"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 text-white">
                <ShieldCheck className="w-4 h-4 text-brand-pink" />
                <span className="text-xs">HIPAA-ready</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 text-white">
                <Bot className="w-4 h-4 text-brand-pink" />
                <span className="text-xs">AI Assistant</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3 py-2 text-white">
                <BarChart3 className="w-4 h-4 text-brand-pink" />
                <span className="text-xs">Insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
