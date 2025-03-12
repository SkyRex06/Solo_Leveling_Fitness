
import React from 'react';
import { Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const badges = [
  { id: 1, icon: '🔥', name: 'Firestarter', unlocked: true },
  { id: 2, icon: '💪', name: 'Iron Arms', unlocked: true },
  { id: 3, icon: '🏃', name: 'Sprinter', unlocked: false },
  { id: 4, icon: '🥇', name: 'Champion', unlocked: false },
];

const Achievements = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Recent Achievements</h2>
        <Button variant="ghost" size="sm" className="text-anime-purple">
          View All <ChevronRight className="ml-1 w-4 h-4" />
        </Button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          {badges.map(badge => (
            <div 
              key={badge.id} 
              className={`badge-item ${!badge.unlocked ? 'opacity-40 grayscale animate-none border-gray-700' : ''}`}
              title={badge.unlocked ? `${badge.name} - Unlocked` : `${badge.name} - Locked`}
            >
              <span className="text-2xl">{badge.icon}</span>
              <span className="text-[10px] mt-1 text-center">{badge.name}</span>
            </div>
          ))}
        </div>
        
        <div className="stat-card min-w-[160px]">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-anime-purple" />
            <span className="text-sm text-muted-foreground">Badges</span>
          </div>
          <p className="text-2xl font-bold">12/30</p>
          <p className="text-xs text-muted-foreground mt-2">2 new this week</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
