
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import { ArrowLeft, Award, ChevronRight, Settings, Target, Trophy, TrendingUp, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Profile = () => {
  const stats = [
    { label: "Total Workouts", value: "87" },
    { label: "Total XP", value: "6,543" },
    { label: "Days Active", value: "32" },
    { label: "Badges", value: "12" }
  ];
  
  const achievements = [
    { icon: "🔥", name: "Firestarter", description: "Complete 7-day streak", earned: "2 weeks ago" },
    { icon: "💪", name: "Iron Arms", description: "Complete 50 push-ups in a day", earned: "3 weeks ago" },
    { icon: "🏃", name: "Sprinter", description: "Run 5km under 30 minutes", earned: "1 month ago" },
    { icon: "📊", name: "Data Lover", description: "Log workouts for 14 consecutive days", earned: "1 month ago" },
    { icon: "🥇", name: "Champion", description: "Reach level 5", earned: "2 months ago" },
  ];
  
  return (
    <div className="min-h-screen bg-background pb-8">
      <Navbar />
      
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mt-6 mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-1">
              <ArrowLeft className="w-4 h-4" /> Back
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="gap-1">
            <Settings className="w-4 h-4" /> Settings
          </Button>
        </div>
        
        <div className="bg-card rounded-lg p-6 border border-anime-purple/20 mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-anime-purple/20 border-2 border-anime-purple flex items-center justify-center text-4xl">
              😎
            </div>
            
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold">Hunter</h1>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-1 mb-3">
                <span className="bg-anime-purple/20 text-anime-purple text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Trophy className="w-3 h-3" /> Level 7
                </span>
                <span className="bg-anime-blue/20 text-anime-blue text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Target className="w-3 h-3" /> Intermediate
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground max-w-md">
                On a mission to become stronger and healthier. Anime fan and fitness enthusiast.
              </p>
              
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mt-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Award className="w-5 h-5 text-anime-purple" /> 
              Achievements
            </h2>
          </div>
          
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-card rounded-lg p-4 border border-anime-purple/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-anime-darkBg border-2 border-anime-purple/50 flex items-center justify-center text-2xl">
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">{achievement.name}</h3>
                      <span className="text-xs text-muted-foreground">{achievement.earned}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <h3 className="text-lg font-bold mb-2">Keep up the good work!</h3>
          <p className="text-sm text-muted-foreground mb-4">
            You're making great progress on your fitness journey. 
            Stay consistent to unlock more achievements and level up!
          </p>
          <Button className="w-full bg-anime-purple hover:bg-anime-purple/90">
            View All Achievements
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
