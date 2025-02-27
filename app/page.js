"use client"
import Image from "next/image";
import Link from 'next/link';
import { Standard } from '@agent-embed/nextjs';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Image
        className="dark:invert"
        src="/logo.svg"
        alt="Predictable Dialogs logo"
        width={180}
        height={38}
        priority
      />
        <div className="animate-fadeIn bg-[#333] shadow-[ -4px_8px_20px_rgba(0,0,0,0.5)] relative mt-[20px] border border-[#222]">
            <Standard
              id="Demo"
              apiHost={"https://app.predictabledialogs.com/web/incoming"}
              agentName={"Assistant OpenAI-18452"}
              initialPrompt={null}
              style={{ width: '700px', height: '300px' }}
              filterResponse={function (response) {
                const annotationRegex = /【\d+:\d+†[^\s】]+】/g;
                return response.replace(annotationRegex, "");
              }}
            />
          <div className="w-72 h-10 absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.5)_0%,_transparent_80%)] blur-[10px] -z-10"></div>
        </div>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by creating an{" "}
            <a
              className="bg-black/[.05] px-1 py-0.5 rounded font-semibold"
              href="https://predictabledialogs.com/agents/create?utm_source=create-next-pd"
              target="_blank"
              rel="noopener noreferrer"
            >
              agent chatbot
            </a>
            .
          </li>
          <li className="mb-2">Replace the agent name with your agent name and see your chatbot instantly.</li>
          <li> Get Inspired → <Link className="bg-black/[.05] px-1 py-0.5 rounded font-semibold" href="/whatsapp-inspired"> WhatsApp Design</Link></li>
        </ol>


        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://predictabledialogs.com/docs?utm_source=create-next-pd"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://predictabledialogs.com/learn?utm_source=create-next-pd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://predictabledialogs.com?utm_source=create-next-pd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to predictabledialogs.com →
        </a>
      </footer>
    </div>
  );
}
