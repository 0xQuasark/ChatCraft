"use client";

import { useCompletion } from "ai/react";
import { FormEvent, useState } from "react";
import { Companion, Message } from "@prisma/client";
import { useRouter } from "next/navigation";
// import { Toggle } from "@radix-ui/react-toggle";

import { ChatForm } from "@/components/chat-form";
import { ChatHeader } from "@/components/chat-header";
import { ChatMessages } from "@/components/chat-messages";
import { ChatMessageProps } from "@/components/chat-message";
import textToSpeech from "@/components/text-to-speech"; // bring in the t2s from the chat file

interface ChatClientProps {
  companion: Companion & {
    messages: Message[];
    _count: {
      messages: number;
    }
  };
};

export const ChatClient = ({
  companion,
}: ChatClientProps) => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageProps[]>(companion.messages);
  const [isAutoPlay, setIsAutoPlay] = useState(false); // determine the state for the toggle functionality

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay)
  }
  
  const {
    input,
    isLoading,
    handleInputChange,
    handleSubmit,
    setInput,
  } = useCompletion({
    api: `/api/chat/${companion.id}`,
    onFinish: async (_prompt, completion) => { // this function is now asynchronous
      if (isAutoPlay) { // IF the autoplay is enabled...
        const audioUrl = await textToSpeech(completion, companion.gender || "male"); // Convert the text to speech
        const audio = new Audio(audioUrl);
        await audio.play(); //play
      }
      const systemMessage: ChatMessageProps = {
        role: "system",
        content: completion
      };

      setMessages((current) => [...current, systemMessage]);
      setInput("");

      router.refresh();
    },
  });

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    const userMessage: ChatMessageProps = {
      role: "user",
      content: input
    };

    setMessages((current) => [...current, userMessage]);

    handleSubmit(e);
  }

  return (
    <div className="flex flex-col h-full p-4 space-y-2">
      <ChatHeader companion={companion} />
      <ChatMessages 
        companion={companion}
        isLoading={isLoading}
        messages={messages}
      />
      {/* <Toggle checked={isAutoPlay} onCheckedChange={toggleAutoPlay}>
        AutoPlay Audio Response
      </Toggle> */}
      <ChatForm 
        isLoading={isLoading} 
        input={input} 
        handleInputChange={handleInputChange} 
        onSubmit={onSubmit} 
      />
    </div>
   );
}