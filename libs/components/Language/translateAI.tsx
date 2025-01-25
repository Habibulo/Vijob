const handleTranslate = async (text: string, targetLang: string) => {
  const res = await fetch('/api/translate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text, targetLang }),
  });

  const data = await res.json();
  return data.translatedText;
};
