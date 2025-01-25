// pages/api/translate.ts
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { text, targetLang } = req.body;

  // Call the translation service (e.g., Google Translate API)
  const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer YOUR_GOOGLE_API_KEY`,
    },
    body: JSON.stringify({
      q: text,
      target: targetLang,
    }),
  });

  const data = await response.json();
  res.status(200).json({ translatedText: data.data.translations[0].translatedText });
}

