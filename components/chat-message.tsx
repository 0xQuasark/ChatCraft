"use client"
import dotenv from "dotenv";
dotenv.config({ path: `.env` });

import { useTheme } from "next-themes";
import { BeatLoader } from "react-spinners"
import { Copy, Play } from "lucide-react";

import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast"
import { BotAvatar } from "@/components/bot-avatar";
import { UserAvatar } from "@/components/user-avatar";
import { Button } from "@/components/ui/button";

// import  textToSpeech from '@/components/text-to-speech';
import OpenAI from "openai";
const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
// console.log('api key', apiKey)
const openai = new OpenAI({ apiKey, dangerouslyAllowBrowser: true });

export async function textToSpeech(content: string, gender: string) {

  let voiceGender;
  // Keeping the below to remind me:
  // voice is expecting only the supported voices from openai (not sure how)
  // so on the commented out line, it doesn't work because it's thinking it'll be ANY string
  // the included line commits me to only using those two supported voices
  // gender === "male" ? voiceGender = "onyx" : voiceGender = "shimmer";
  gender === "male" ? voiceGender = "onyx" as const : voiceGender = "shimmer" as const;

  const mp3 = await openai.audio.speech.create({
    model: "tts-1",
    voice: voiceGender,
    input: content,
  });

  console.log('used voice: ', voiceGender)

  const buffer = Buffer.from(await mp3.arrayBuffer());
  const blob = new Blob([buffer], { type: 'audio/mpeg' });
  const url = URL.createObjectURL(blob);

  return url;
}

export interface ChatMessageProps {
  role: "system" | "user",
  gender?: string,
  content?: string,
  isLoading?: boolean,
  src?: string
}

export const ChatMessage = ({
  role,
  content,
  isLoading,
  gender,
  src
}: ChatMessageProps) => {
  const { toast } = useToast();
  const { theme } = useTheme();

  const onCopy = () => {
    if (!content) {
      // it's ok if the message has no content
      return;
    }

    navigator.clipboard.writeText(content);
    toast({
      description: "Message copied to clipboard",
    });
  }

  const onPlay = async () => {
    if (!content) {
      // it's ok if the message has no content
      return;
    }
    toast({
      description: "Message queued to play audio",
    });

    // textToSpeech function expects a string as its second argument, but gender can be undefined as per ChatMessageProps interface. hence the backup in case it's undefined
    const audioUrl = await textToSpeech(content, gender || "male");
    // console.log('I did this instead')
    const audio = new Audio(audioUrl);
    audio.play();
  }

  return (
    <>
      <div className={cn(
        "group flex items-start gap-x-3 py-4 w-full",
        role === "user" && "justify-end"    // if the user is talking, we want the message on the right
      )}>
        {role !== "user" && src && <BotAvatar src={src} />}
        <div className="rounded-md px-4 py-2 max-w-sm text-sm bg-primary/10">
          {isLoading
            ? <BeatLoader 
                size={5}
                color={theme === "light" ? "black" : "white"}
              />
            : content
          }
        </div>
        {role === "user" && <UserAvatar />}
        {role !== "user" && !isLoading && (
          <>
            <Button
              onClick={onCopy}
              className="opacity-0 group-hover:opacity-100 transition" // opacity-0 hides it, until the hover
              size="icon"
              variant="ghost"
            >
              <Copy className="w-4 h-4" />
            </Button>
            <Button
              onClick={onPlay}
              className="opacity-0 group-hover:opacity-100 transition" // opacity-0 hides it, until the hover
              size="icon"
              variant="ghost"
            >
              <Play className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>
    </>
  )
}