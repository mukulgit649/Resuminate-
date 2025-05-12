import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API
const genAI = new GoogleGenerativeAI('AIzaSyA-rsWQeFZUCqv_d3z1Jors9P4d67gJQ8Q');

// Helper function to get the model
export const getGeminiModel = (modelName: 'gemini-pro' | 'gemini-pro-vision' = 'gemini-pro') => {
  return genAI.getGenerativeModel({ model: modelName });
};

// ATS Score Analysis Prompt
export const getATSAnalysisPrompt = (resumeText: string) => `
Analyze this resume for ATS compatibility and provide a detailed score breakdown in JSON format:
${resumeText}

Provide analysis in the following categories:
1. Keywords (industry-specific terms and skills)
2. Formatting (structure and readability)
3. Content (achievements and metrics)
4. Skills (technical and soft skills)

Return the response in this JSON format:
{
  "overallScore": number,
  "breakdown": [
    {
      "category": string,
      "score": number,
      "feedback": string
    }
  ]
}
`;

// Interview Coach Prompt
export const getInterviewCoachPrompt = (question: string, userResponse: string) => `
You are an AI interview coach. The candidate was asked: "${question}"
Their response was: "${userResponse}"

Provide feedback in this JSON format:
{
  "score": number,
  "strengths": string[],
  "improvements": string[],
  "suggestedResponse": string
}
`;

// Job Matching Prompt
export const getJobMatchingPrompt = (resumeText: string, jobDescription: string) => `
Compare this resume with the job description and provide a match analysis:

Resume:
${resumeText}

Job Description:
${jobDescription}

Provide analysis in this JSON format:
{
  "matchScore": number,
  "matchingSkills": string[],
  "missingSkills": string[],
  "recommendations": string[]
}
`;

// Resume Analysis Prompt
export const getResumeAnalysisPrompt = (resumeText: string) => `
Analyze this resume and provide comprehensive feedback:

${resumeText}

Provide analysis in this JSON format:
{
  "strengths": string[],
  "weaknesses": string[],
  "suggestions": string[],
  "keywordOptimization": {
    "missingKeywords": string[],
    "suggestedKeywords": string[]
  }
}
`;

// Cover Letter Generator Prompt
export const getCoverLetterPrompt = (resumeText: string, jobDescription: string) => `
Generate a professional cover letter based on this resume and job description:

Resume:
${resumeText}

Job Description:
${jobDescription}

Provide the cover letter in this JSON format:
{
  "coverLetter": string,
  "keyHighlights": string[],
  "customizationTips": string[]
}
`;

// Career Path Planning Prompt
export const getCareerPathPrompt = (resumeText: string, targetRole: string) => `
Analyze this resume and suggest a career path to the target role:

Resume:
${resumeText}

Target Role:
${targetRole}

Provide analysis in this JSON format:
{
  "currentLevel": string,
  "targetLevel": string,
  "timeline": {
    "shortTerm": string[],
    "mediumTerm": string[],
    "longTerm": string[]
  },
  "requiredSkills": string[],
  "learningResources": string[]
}
`;

// Skill Gap Analysis Prompt
export const getSkillGapPrompt = (resumeText: string, targetRole: string) => `
Analyze the skill gaps between this resume and the target role:

Resume:
${resumeText}

Target Role:
${targetRole}

Provide analysis in this JSON format:
{
  "currentSkills": string[],
  "requiredSkills": string[],
  "missingSkills": string[],
  "skillLevels": {
    "beginner": string[],
    "intermediate": string[],
    "advanced": string[]
  },
  "learningPath": string[]
}
`;

// Industry-Specific Optimization Prompt
export const getIndustryOptimizationPrompt = (resumeText: string, industry: string) => `
Optimize this resume for the specific industry:

Resume:
${resumeText}

Industry:
${industry}

Provide optimization in this JSON format:
{
  "industryKeywords": string[],
  "formattingSuggestions": string[],
  "contentOptimizations": string[],
  "industryBestPractices": string[]
}
`;

// Real-time Interview Practice Prompt
export const getRealTimeInterviewPrompt = (question: string, userResponse: string, role: string) => `
Provide real-time feedback for this interview response:

Role: ${role}
Question: ${question}
Response: ${userResponse}

Provide feedback in this JSON format:
{
  "immediateFeedback": string,
  "improvementAreas": string[],
  "followUpQuestions": string[],
  "responseScore": number
}
`;

// Personalized Learning Path Prompt
export const getLearningPathPrompt = (resumeText: string, targetSkills: string[]) => `
Create a personalized learning path based on this resume and target skills:

Resume:
${resumeText}

Target Skills:
${targetSkills.join(', ')}

Provide learning path in this JSON format:
{
  "currentLevel": string,
  "targetLevel": string,
  "learningPath": {
    "courses": string[],
    "resources": string[],
    "projects": string[],
    "timeline": string
  },
  "milestones": string[]
}
`; 