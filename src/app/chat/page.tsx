'use client';

import { useState } from 'react';
import NavBar from '@/components/NavBar';
import { SendHorizonal } from 'lucide-react';

type Message = { from: 'user' | 'bot'; text: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userText = input.trim();
    const userMessage: Message = { from: 'user', text: userText };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userText }),
      });

      const data = await res.json();
      const translated = data.translated;

      const botResponse: Message = {
        from: 'bot',
        text: `🔁 영어 번역: ${translated}`,
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: 'bot', text: '⚠️ 번역 중 오류가 발생했습니다.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-[#fefae0]">
      {/* 채팅 헤더 */}
      <header className="text-center py-4 font-bold text-xl text-black">
        AI 다국어 챗봇
      </header>

      {/* 채팅창 영역 */}
      <section className="flex-grow px-4 overflow-y-auto pb-4">
        {messages.length === 0 ? (
          <p className="text-center text-gray-400 mt-10">메시지를 입력해 대화를 시작하세요.</p>
        ) : (
          <div className="flex flex-col space-y-2">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`max-w-[75%] px-4 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                  msg.from === 'user'
                    ? 'bg-blue-100 self-end text-right'
                    : 'bg-green-100 self-end text-right'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-sm text-gray-500 self-end">번역 중...</div>
            )}
          </div>
        )}
      </section>

      {/* 입력창 */}
      <div className="mb-[60px] border-t px-4 py-3 flex items-center bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className="flex-grow px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="text-blue-600 hover:text-blue-800 ml-2"
        >
          <SendHorizonal size={24} />
        </button>
      </div>

      <NavBar />
    </main>
  );
}
