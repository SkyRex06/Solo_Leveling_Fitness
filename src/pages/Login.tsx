
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  
  useEffect(() => {
    // If already authenticated, redirect to home
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const success = await login(username, password);
      if (success) {
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-anime-darkBg to-black p-4 relative overflow-hidden">
      {/* Solo Leveling background pattern */}
      <div className="absolute inset-0 bg-[url('/solo-leveling-pattern.png')] opacity-5 z-0"></div>
      
      {/* Blue glow effect inspired by Solo Leveling */}
      <div className="absolute inset-0 bg-anime-blue/5 z-0"></div>
      
      {/* Character silhouette */}
      <div className="absolute bottom-0 right-0 w-full h-full opacity-10 z-0">
        <img 
          src="/lovable-uploads/e89196e6-1127-4923-add2-1177aaae7e98.png" 
          alt="" 
          className="absolute bottom-0 right-0 w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-6">
          <div className="mb-4 flex justify-center">
            <img 
              src="/lovable-uploads/783e1e3d-e723-4b3e-a85a-7b5096cebf75.png" 
              alt="Solo Leveling" 
              className="h-24 object-contain opacity-80"
            />
          </div>
          <h1 className="text-4xl font-bold anime-gradient-text">Solo Leveling Fitness</h1>
          <p className="text-muted-foreground mt-2">
            Arise and level up your fitness journey
          </p>
        </div>
        
        <div className="bg-card/80 backdrop-blur-md border border-anime-purple/30 rounded-lg shadow-[0_0_25px_rgba(14,165,233,0.4)] p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Hunter Login</h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username input */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">Hunter Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <User className="h-5 w-5 text-anime-blue" />
                </div>
                <input
                  type="text"
                  id="username"
                  className="bg-background/90 border border-anime-blue/30 pl-10 pr-4 py-2 rounded-md w-full focus:border-anime-blue focus:ring-1 focus:ring-anime-blue outline-none transition"
                  placeholder="Enter your hunter name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            
            {/* Password input */}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-anime-blue" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="bg-background/90 border border-anime-blue/30 pl-10 pr-10 py-2 rounded-md w-full focus:border-anime-blue focus:ring-1 focus:ring-anime-blue outline-none transition"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <Eye className="h-5 w-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Submit button */}
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-anime-blue to-anime-purple hover:opacity-90 transition-opacity py-2 shadow-[0_0_15px_rgba(14,165,233,0.4)]"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  ARISE
                </span>
              )}
            </Button>
            
            <div className="text-center text-sm">
              <a href="#" className="text-anime-blue hover:text-anime-purple transition-colors">
                Forgot password?
              </a>
            </div>
          </form>
          
          <div className="mt-6 pt-6 border-t border-border/50 text-center">
            <p className="text-muted-foreground text-sm">
              Don't have an account?{' '}
              <a href="#" className="text-anime-blue hover:text-anime-purple transition-colors">
                Register as a Hunter
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-muted-foreground text-xs text-center z-10">
        &copy; {new Date().getFullYear()} Solo Leveling Fitness. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
