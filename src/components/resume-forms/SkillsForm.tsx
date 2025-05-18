import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';

interface SkillsFormProps {
  data: string[];
  onChange: (data: string[]) => void;
}

export function SkillsForm({ data, onChange }: SkillsFormProps) {
  const handleChange = (index: number, value: string) => {
    const newData = [...data];
    newData[index] = value;
    onChange(newData);
  };

  const addSkill = () => {
    onChange([...data, '']);
  };

  const removeSkill = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label>Skills</Label>
        <Button
          variant="outline"
          size="sm"
          onClick={addSkill}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Skill
        </Button>
      </div>

      <div className="space-y-2">
        {data.map((skill, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={skill}
              onChange={(e) => handleChange(index, e.target.value)}
              placeholder="e.g., JavaScript, Project Management, etc."
            />
            {data.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeSkill(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        Add your key skills and competencies. Separate multiple skills with commas.
      </p>
    </div>
  );
} 