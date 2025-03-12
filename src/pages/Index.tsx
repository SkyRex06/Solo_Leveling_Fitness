
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import UserStats from '@/components/dashboard/UserStats';
import DailyQuests from '@/components/dashboard/DailyQuests';
import Achievements from '@/components/dashboard/Achievements';
import Leaderboard from '@/components/dashboard/Leaderboard';
import { Bot, Dumbbell, History } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-8">
      <Navbar />
      
      <div className="container px-4 mx-auto mt-6">
        <div className="flex items-center mb-6">
          <div className="mr-3">
            <div className="w-16 h-16 rounded-full bg-anime-purple/20 border-2 border-anime-purple flex items-center justify-center text-2xl">
              😎
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Hunter!</h1>
            <p className="text-muted-foreground">Ready to level up today?</p>
          </div>
        </div>
        
        <UserStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <DailyQuests />
            <Achievements />
          </div>
          
          <div className="space-y-6">
            <Leaderboard />
            
            <div className="bg-card rounded-lg p-4 border border-anime-purple/20">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Bot className="w-5 h-5 text-anime-blue" />
                Workout Recommendation
              </h2>
              <div className="bg-anime-darkBg p-3 rounded-md mb-4">
                <p className="text-sm text-muted-foreground mb-2">Based on your recent activity:</p>
                <h3 className="font-bold text-anime-pink">Full Body HIIT</h3>
                <p className="text-xs text-muted-foreground mt-1">30 min • 280 XP • Medium difficulty</p>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-1">
                  <History className="w-4 h-4" /> History
                </Button>
                <Button className="gap-1 bg-anime-purple hover:bg-anime-purple/90">
                  <Dumbbell className="w-4 h-4" /> Workouts
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
