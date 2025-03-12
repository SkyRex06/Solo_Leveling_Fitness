
import React from 'react';
import { Users, Medal, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

type LeaderboardUser = {
  id: number;
  name: string;
  level: number;
  xp: number;
  avatar: string;
};

const leaderboardUsers: LeaderboardUser[] = [
  { id: 1, name: "ShadowFist", level: 21, xp: 21430, avatar: "👑" },
  { id: 2, name: "DragonPunch", level: 19, xp: 19850, avatar: "🐉" },
  { id: 3, name: "MuscleWizard", level: 17, xp: 17620, avatar: "💪" },
  { id: 4, name: "NinjaTrainer", level: 16, xp: 16340, avatar: "🥷" },
  { id: 5, name: "You", level: 7, xp: 6500, avatar: "😎" },
];

const getMedalColor = (position: number) => {
  switch (position) {
    case 0: return "text-yellow-400";
    case 1: return "text-gray-400";
    case 2: return "text-amber-600";
    default: return "text-muted-foreground";
  }
};

const Leaderboard = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Leaderboard</h2>
          <Users className="w-5 h-5 text-anime-blue" />
        </div>
        <Button variant="ghost" size="sm" className="text-anime-purple">
          Global <ChevronRight className="ml-1 w-4 h-4" />
        </Button>
      </div>
      
      <div className="bg-card rounded-lg overflow-hidden">
        {leaderboardUsers.map((user, index) => (
          <div 
            key={user.id} 
            className={`flex items-center justify-between p-3 border-b border-border last:border-0 ${user.name === "You" ? "bg-anime-purple/10" : ""}`}
          >
            <div className="flex items-center gap-3">
              <span className={`font-bold ${getMedalColor(index)}`}>{index + 1}</span>
              <div className="w-8 h-8 rounded-full bg-anime-darkBg flex items-center justify-center">
                {user.avatar}
              </div>
              <div>
                <p className={`font-medium ${user.name === "You" ? "text-anime-purple" : ""}`}>{user.name}</p>
                <p className="text-xs text-muted-foreground">Level {user.level}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-bold">{user.xp.toLocaleString()} XP</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
