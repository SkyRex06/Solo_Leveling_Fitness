
import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, LogOut, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';

const Navbar = () => {
  const { logout, username } = useAuth();
  
  return (
    <nav className="flex items-center justify-between p-4 bg-card/80 backdrop-blur-md border-b border-anime-blue/30 sticky top-0 z-50 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
      <div className="flex items-center gap-2">
        <Menu className="w-6 h-6 text-anime-blue" />
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/783e1e3d-e723-4b3e-a85a-7b5096cebf75.png" 
            alt="Solo Leveling" 
            className="h-8 mr-2"
          />
          <h1 className="text-xl font-bold anime-gradient-text">Solo Leveling Fitness</h1>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center text-sm text-muted-foreground">
          <span>Welcome, </span>
          <span className="font-bold ml-1 text-anime-blue">{username || 'Hunter'}</span>
        </div>
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5 text-anime-blue" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-anime-pink rounded-full text-[10px] flex items-center justify-center">3</span>
        </Button>
        
        <Link to="/profile">
          <Button variant="ghost" size="icon" className="rounded-full bg-anime-blue/10 border border-anime-blue/30">
            <User className="w-5 h-5 text-anime-blue" />
          </Button>
        </Link>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={logout}
          title="Logout"
          className="hover:bg-anime-blue/10"
        >
          <LogOut className="w-5 h-5 text-muted-foreground hover:text-anime-blue" />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
