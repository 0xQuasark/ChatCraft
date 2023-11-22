import { OpenAI } from 'openai';

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
// console.log('api key', apiKey)
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

async function textToSpeech(content: string, gender: string) {
  let voiceGender;
  gender === "male" ? voiceGender = "onyx" as const : voiceGender = "shimmer" as const;

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: voiceGender,
    input: content,
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());
  const blob = new Blob([buffer], { type: 'audio/mpeg' });
  const url = URL.createObjectURL(blob);

  return url;
}

export default textToSpeech;