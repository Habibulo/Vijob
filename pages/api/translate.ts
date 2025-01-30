// utils/translate.ts
import axios from 'axios';

const translateText = async (text: string, targetLang: string) => {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_TRANSLATE_API_KEY;
  const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

  const response = await axios.post(url, {
    q: text,
    target: targetLang,
  });

  return response.data.data.translations[0].translatedText;
};

export default translateText;