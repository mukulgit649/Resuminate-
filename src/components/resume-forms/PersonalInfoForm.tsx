import React from 'react';
import { PersonalInfo } from '@/types/resume';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface PersonalInfoFormProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
}

export function PersonalInfoForm({ data, onChange }: PersonalInfoFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith('socialLinks.')) {
      const key = name.split('.')[1];
      onChange({
        ...data,
        socialLinks: {
          ...data.socialLinks,
          [key]: value
        }
      });
    } else {
      onChange({
        ...data,
        [name]: value
      });
    }
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
          placeholder="john@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="(123) 456-7890"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location">Location</Label>
        <Input
          id="location"
          name="location"
          value={data.location}
          onChange={handleChange}
          placeholder="City, State"
        />
      </div>

      {/* Social Links */}
      <div className="space-y-2">
        <Label>Social Links</Label>
        <Input
          id="linkedin"
          name="socialLinks.linkedin"
          value={data.socialLinks?.linkedin || ''}
          onChange={handleChange}
          placeholder="LinkedIn profile (e.g. linkedin.com/in/yourname)"
        />
        <Input
          id="github"
          name="socialLinks.github"
          value={data.socialLinks?.github || ''}
          onChange={handleChange}
          placeholder="GitHub username or URL"
        />
        <Input
          id="website"
          name="socialLinks.website"
          value={data.socialLinks?.website || ''}
          onChange={handleChange}
          placeholder="Personal website (e.g. yoursite.com)"
        />
        <Input
          id="twitter"
          name="socialLinks.twitter"
          value={data.socialLinks?.twitter || ''}
          onChange={handleChange}
          placeholder="Twitter handle or URL"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="summary">Professional Summary</Label>
        <Textarea
          id="summary"
          name="summary"
          value={data.summary}
          onChange={handleChange}
          placeholder="A brief summary of your professional background and career goals..."
          className="min-h-[100px]"
        />
      </div>
    </div>
  );
} 