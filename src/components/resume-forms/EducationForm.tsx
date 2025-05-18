import React from 'react';
import { Education } from '@/types/resume';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';

interface EducationFormProps {
  data: Education[];
  onChange: (data: Education[]) => void;
}

const emptyEducation: Education = {
  degree: '',
  institution: '',
  startDate: '',
  endDate: '',
  gpa: ''
};

export function EducationForm({ data, onChange }: EducationFormProps) {
  const handleChange = (
    index: number,
    field: keyof Education,
    value: string
  ) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: value
    };
    onChange(newData);
  };

  const addEducation = () => {
    onChange([...data, { ...emptyEducation }]);
  };

  const removeEducation = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {data.map((edu, index) => (
        <div key={index} className="space-y-4 p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Education {index + 1}</h3>
            {data.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeEducation(index)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor={`degree-${index}`}>Degree</Label>
              <Input
                id={`degree-${index}`}
                value={edu.degree}
                onChange={(e) => handleChange(index, 'degree', e.target.value)}
                placeholder="Bachelor of Science"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`institution-${index}`}>Institution</Label>
              <Input
                id={`institution-${index}`}
                value={edu.institution}
                onChange={(e) => handleChange(index, 'institution', e.target.value)}
                placeholder="University Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`startDate-${index}`}>Start Date</Label>
              <Input
                id={`startDate-${index}`}
                value={edu.startDate}
                onChange={(e) => handleChange(index, 'startDate', e.target.value)}
                placeholder="MM/YYYY"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`endDate-${index}`}>End Date</Label>
              <Input
                id={`endDate-${index}`}
                value={edu.endDate}
                onChange={(e) => handleChange(index, 'endDate', e.target.value)}
                placeholder="MM/YYYY or Present"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`gpa-${index}`}>GPA</Label>
              <Input
                id={`gpa-${index}`}
                value={edu.gpa}
                onChange={(e) => handleChange(index, 'gpa', e.target.value)}
                placeholder="3.8"
              />
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        onClick={addEducation}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Education
      </Button>
    </div>
  );
} 