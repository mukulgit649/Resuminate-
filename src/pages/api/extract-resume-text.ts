import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import pdf from 'pdf-parse';
import mammoth from 'mammoth';
import { promisify } from 'util';

export const config = {
  api: {
    bodyParser: false,
  },
};

const readFileAsync = promisify(fs.readFile);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const form = formidable({});
    const [fields, files] = await form.parse(req);
    const file = files.resume?.[0];

    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileBuffer = await readFileAsync(file.filepath);
    let text = '';

    // Extract text based on file type
    if (file.mimetype === 'application/pdf') {
      const pdfData = await pdf(fileBuffer);
      text = pdfData.text;
    } else if (
      file.mimetype === 'application/msword' ||
      file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      const result = await mammoth.extractRawText({ buffer: fileBuffer });
      text = result.value;
    } else {
      return res.status(400).json({ error: 'Unsupported file type' });
    }

    // Clean up the extracted text
    text = text
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/[^\S\r\n]+/g, ' ');

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Error processing resume:', error);
    return res.status(500).json({ error: 'Failed to process resume' });
  }
} 