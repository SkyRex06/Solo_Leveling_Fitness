
import React from 'react';
import { CheckCircle, Dumbbell, Clock, Award, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

type QuestType = {
  id: number;
  title: string;
  description: string;
  xp: number;
  energy: number;
  status: 'completed' | 'active' | 'locked';
  difficulty: 'easy' | 'medium' | 'hard';
};

const quests: QuestType[] = [
  {
    id: 1,
    title: "Morning Challenge",
    description: "Complete 20 push-ups",
    xp: 100,
    energy: 15,
    status: 'completed',
    difficulty: 'easy'
  },
  {
    id: 2,
    title: "Cardio Burst",
    description: "Run or walk for 20 minutes",
    xp: 150,
    energy: 20,
    status: 'active',
    difficulty: 'medium'
  },
  {
    id: 3,
    title: "Strength Builder",
    description: "Complete 3 sets of squats",
    xp: 200,
    energy: 25,
    status: 'active',
    difficulty: 'medium'
  },
  {
    id: 4,
    title: "Ultimate Challenge",
    description: "Complete a full 45-min HIIT workout",
    xp: 300,
    energy: 40,
    status: 'locked',
    difficulty: 'hard'
  }
];

const DifficultyBadge = ({ difficulty }: { difficulty: QuestType['difficulty'] }) => {
  const colors = {
    easy: 'bg-green-500/20 text-green-500',
    medium: 'bg-yellow-500/20 text-yellow-500',
    hard: 'bg-red-500/20 text-red-500',
  };
  
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
};

const DailyQuests = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Daily Quests</h2>
        <span className="text-sm text-muted-foreground"><Clock className="w-4 h-4 inline mr-1" /> Resets in 8h 32m</span>
      </div>
      
      <div className="space-y-4">
        {quests.map(quest => (
          <div key={quest.id} className={`quest-card ${quest.status === 'locked' ? 'opacity-60' : ''}`}>
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-2">
                {quest.status === 'completed' ? (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                ) : (
                  <Dumbbell className="w-5 h-5 text-anime-purple" />
                )}
                <h3 className="font-bold">{quest.title}</h3>
              </div>
              <DifficultyBadge difficulty={quest.difficulty} />
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">{quest.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-xs flex items-center text-anime-pink">
                  <Award className="w-4 h-4 mr-1" /> {quest.xp} XP
                </span>
                <span className="text-xs flex items-center text-anime-blue">
                  <Zap className="w-4 h-4 mr-1" /> {quest.energy} Energy
                </span>
              </div>
              
              {quest.status === 'completed' && (
                <span className="text-xs text-green-500">Completed</span>
              )}
              
              {quest.status === 'active' && (
                <Button variant="outline" size="sm" className="border-anime-purple text-anime-purple hover:bg-anime-purple/10">
                  Start Quest
                </Button>
              )}
              
              {quest.status === 'locked' && (
                <Button variant="outline" size="sm" className="border-muted text-muted-foreground" disabled>
                  Locked
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyQuests;
