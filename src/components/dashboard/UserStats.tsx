
import React from 'react';
import { Trophy, Flame, Zap, TrendingUp } from 'lucide-react';

const UserStats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div className="stat-card">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-5 h-5 text-anime-purple" />
          <span className="text-sm text-muted-foreground">Level</span>
        </div>
        <p className="text-2xl font-bold">7</p>
        <div className="mt-2">
          <p className="text-xs text-muted-foreground mb-1">Next Level:</p>
          <div className="xp-bar">
            <div className="xp-fill" style={{ width: '65%' }}></div>
          </div>
          <p className="text-[10px] text-right mt-1 text-muted-foreground">650/1000 XP</p>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="flex items-center gap-2 mb-2">
          <Flame className="w-5 h-5 text-anime-pink" />
          <span className="text-sm text-muted-foreground">Streak</span>
        </div>
        <p className="text-2xl font-bold">12 days</p>
        <p className="text-xs text-muted-foreground mt-2">Personal Best: 21 days</p>
      </div>
      
      <div className="stat-card">
        <div className="flex items-center gap-2 mb-2">
          <Zap className="w-5 h-5 text-anime-blue" />
          <span className="text-sm text-muted-foreground">Energy</span>
        </div>
        <p className="text-2xl font-bold">70/100</p>
        <div className="mt-2">
          <div className="energy-bar">
            <div className="energy-fill" style={{ width: '70%' }}></div>
          </div>
          <p className="text-[10px] text-right mt-1 text-muted-foreground">Refills in 2h 30m</p>
        </div>
      </div>
      
      <div className="stat-card">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-green-500" />
          <span className="text-sm text-muted-foreground">Rank</span>
        </div>
        <p className="text-2xl font-bold">#243</p>
        <p className="text-xs text-muted-foreground mt-2">Top 15% globally</p>
      </div>
    </div>
  );
};

export default UserStats;
