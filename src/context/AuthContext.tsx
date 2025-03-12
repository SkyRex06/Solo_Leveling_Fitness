
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  username: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (using localStorage in this example)
    const storedUser = localStorage.getItem('soloLevelingFitnessUser');
    if (storedUser) {
      setIsAuthenticated(true);
      setUsername(JSON.parse(storedUser).username);
    } else {
      // Redirect to login if not authenticated
      navigate('/login');
    }
  }, [navigate]);

  const login = async (username: string, password: string): Promise<boolean> => {
    // For demo purposes, just check if username and password are not empty
    if (username && password) {
      setIsAuthenticated(true);
      setUsername(username);
      
      // Store in localStorage
      localStorage.setItem('soloLevelingFitnessUser', JSON.stringify({ username }));
      
      // Solo Leveling style notification
      toast.success(
        <div className="flex flex-col gap-1 solo-leveling-toast">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/f4c90faa-0297-4a15-ba82-453dafadbfae.png" alt="" className="w-6 h-6 object-cover" />
            <span className="font-bold text-anime-blue">SYSTEM NOTIFICATION</span>
          </div>
          <span>Hunter {username} has arisen successfully.</span>
          <span className="text-xs text-anime-blue/80">Hunter Level: 1</span>
        </div>
      );
      
      return true;
    }
    
    toast.error(
      <div className="flex flex-col gap-1 solo-leveling-toast">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/98dba28a-21ef-46ae-b6d0-061162f883f9.png" alt="" className="w-6 h-6 object-cover" />
          <span className="font-bold text-destructive">SYSTEM ERROR</span>
        </div>
        <span>Authentication failed. Check credentials.</span>
      </div>
    );
    
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUsername(null);
    localStorage.removeItem('soloLevelingFitnessUser');
    
    // Solo Leveling style notification
    toast.info(
      <div className="flex flex-col gap-1 solo-leveling-toast">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/a40281c5-70fa-4016-8d96-bf7907612cbb.png" alt="" className="w-6 h-6 object-cover" />
          <span className="font-bold text-anime-blue">SYSTEM NOTIFICATION</span>
        </div>
        <span>Hunter has logged out.</span>
      </div>
    );
    
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
