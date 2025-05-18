import React from 'react';
import { Project } from '@/types/resume';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Plus, Trash2 } from 'lucide-react';

interface ProjectsFormProps {
  data: Project[];
  onChange: (data: Project[]) => void;
}

const emptyProject: Project = {
  name: '',
  description: '',
  technologies: ['']
};

export function ProjectsForm({ data, onChange }: ProjectsFormProps) {
  const handleChange = (
    index: number,
    field: keyof Project,
    value: string | string[]
  ) => {
    const newData = [...data];
    newData[index] = {
      ...newData[index],
      [field]: value
    };
    onChange(newData);
  };

  const handleTechnologyChange = (
    projectIndex: number,
    technologyIndex: number,
    value: string
  ) => {
    const newData = [...data];
    newData[projectIndex].technologies[technologyIndex] = value;
    onChange(newData);
  };

  const addTechnology = (projectIndex: number) => {
    const newData = [...data];
    newData[projectIndex].technologies.push('');
    onChange(newData);
  };

  const removeTechnology = (projectIndex: number, technologyIndex: number) => {
    const newData = [...data];
    newData[projectIndex].technologies = newData[projectIndex].technologies.filter(
      (_, i) => i !== technologyIndex
    );
    onChange(newData);
  };

  const addProject = () => {
    onChange([...data, { ...emptyProject }]);
  };

  const removeProject = (index: number) => {
    onChange(data.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {data.map((project, projectIndex) => (
        <div key={projectIndex} className="space-y-4 p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Project {projectIndex + 1}</h3>
            {data.length > 1 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => removeProject(projectIndex)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor={`name-${projectIndex}`}>Project Name</Label>
              <Input
                id={`name-${projectIndex}`}
                value={project.name}
                onChange={(e) => handleChange(projectIndex, 'name', e.target.value)}
                placeholder="Project Name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor={`description-${projectIndex}`}>Description</Label>
              <Textarea
                id={`description-${projectIndex}`}
                value={project.description}
                onChange={(e) => handleChange(projectIndex, 'description', e.target.value)}
                placeholder="Describe your project, its purpose, and your role..."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label>Technologies Used</Label>
              {project.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="flex gap-2">
                  <Input
                    value={tech}
                    onChange={(e) =>
                      handleTechnologyChange(projectIndex, techIndex, e.target.value)
                    }
                    placeholder="e.g., React, Node.js, etc."
                  />
                  {project.technologies.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeTechnology(projectIndex, techIndex)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button
                variant="outline"
                size="sm"
                onClick={() => addTechnology(projectIndex)}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Technology
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        onClick={addProject}
        className="w-full"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add Project
      </Button>
    </div>
  );
} 