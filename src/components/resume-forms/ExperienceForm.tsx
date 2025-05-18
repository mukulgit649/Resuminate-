import React from 'react';
import { Experience } from '@/types/resume';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';

interface ExperienceFormProps {
  data: Experience[];
  onChange: (data: Experience[]) => void;
}

const emptyExperience: Experience = {
  title: '',
  company: '',
  startDate: '',
  endDate: '',
  achievements: ['']
};

export function ExperienceForm({ data, onChange }: ExperienceFormProps) {
  const handleChange = (
    index: number,
    field: keyof Experience,
    value: string | string[]
  ) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: value
    };
    onChange(newData);
  };

  const handleAchievementChange = (
    expIndex: number,
    achievementIndex: number,
    value: string
  ) => {
    const newData = [...data];
    newData[expIndex].achievements[achievementIndex] = value;
    onChange(newData);
  };

  const addAchievement = (expIndex: number) => {
    const newData = [...data];
    newData[expIndex].achievements.push('');
    onChange(newData);
  };

  const removeAchievement = (expIndex: number, achievementIndex: number) => {
    const newData = [...data];
    newData[expIndex].achievements = newData[expIndex].achievements.filter(
      (_, i) => i !== achievementIndex
    );
    onChange(newData);
  };

  const addExperience = () => {
    onChange([...data, { ...emptyExperience }]);
  };

  const removeExperience = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {data.map((exp, expIndex) => (
        <div key={expIndex} className="space-y-4 p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Experience {expIndex + 1}</h3>
            {data.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeExperience(expIndex)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`title-${expIndex}`}>Job Title</Label>
              <Input
                id={`title-${expIndex}`}
                value={exp.title}
                onChange={(e) => handleChange(expIndex, 'title', e.target.value)}
                placeholder="Software Engineer"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`company-${expIndex}`}>Company</Label>
              <Input
                id={`company-${expIndex}`}
                value={exp.company}
                onChange={(e) => handleChange(expIndex, 'company', e.target.value)}
                placeholder="Company Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${expIndex}`}>Start Date</Label>
              <Input
                id={`startDate-${expIndex}`}
                value={exp.startDate}
                onChange={(e) => handleChange(expIndex, 'startDate', e.target.value)}
                placeholder="MM/YYYY"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${expIndex}`}>End Date</Label>
              <Input
                id={`endDate-${expIndex}`}
                value={exp.endDate}
                onChange={(e) => handleChange(expIndex, 'endDate', e.target.value)}
                placeholder="MM/YYYY or Present"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Achievements</Label>
            {exp.achievements.map((achievement, achievementIndex) => (
              <div key={achievementIndex} className="flex gap-2">
                <Textarea
                  value={achievement}
                  onChange={(e) =>
                    handleAchievementChange(expIndex, achievementIndex, e.target.value)
                  }
                  placeholder="Describe your key achievements and responsibilities..."
                  className="flex-1"
                />
                {exp.achievements.length > 1 && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeAchievement(expIndex, achievementIndex)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={() => addAchievement(expIndex)}
              className="w-full"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Achievement
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        onClick={addExperience}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Experience
      </Button>
    </div>
  );
} 