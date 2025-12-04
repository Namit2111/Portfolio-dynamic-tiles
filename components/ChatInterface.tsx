import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { streamChatResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I\'m Lumina\'s AI assistant. Ask me anything about this portfolio, the tech stack, or Alex\'s experience.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasSelectedKey = useRef(false);

  useEffect(() => {
     if (process.env.API_KEY) {
        hasSelectedKey.current = true;
     }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (!hasSelectedKey.current && !process.env.API_KEY) {
         setMessages(prev => [...prev, { role: 'model', text: "Please ensure the API_KEY environment variable is set to use the chat feature.", isError: true }]);
         return;
    }

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    let fullResponse = '';
    
    // Optimistic update
    setMessages(prev => [...prev, { role: 'model', text: '' }]);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      await streamChatResponse(history, userMsg, (chunk) => {
        fullResponse += chunk;
        setMessages(prev => {
          const newArr = [...prev];
          newArr[newArr.length - 1].text = fullResponse;
          return newArr;
        });
      });
    } catch (error) {
      setMessages(prev => {
          const newArr = [...prev];
          newArr.pop();
          return [...newArr, { role: 'model', text: "Sorry, I'm having trouble connecting to the AI brain right now.", isError: true }];
        });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-black/20 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-inner">
      <div className="bg-black/10 p-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-white" />
        <h3 className="font-semibold text-white">AI Assistant</h3>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div 
              className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-white text-black rounded-br-none font-medium' 
                  : msg.isError 
                    ? 'bg-red-500/80 text-white rounded-bl-none'
                    : 'bg-black/40 text-white rounded-bl-none backdrop-blur-md'
              }`}
            >
              {msg.isError && <AlertCircle className="w-4 h-4 inline mr-2 mb-0.5" />}
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && messages[messages.length-1]?.text === '' && (
           <div className="flex justify-start">
             <div className="bg-black/40 p-3 rounded-2xl rounded-bl-none">
               <Loader2 className="w-4 h-4 animate-spin text-white/70" />
             </div>
           </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-4 bg-black/10 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-sm text-white placeholder-white/50 focus:outline-none focus:bg-white/20 transition-colors"
        />
        <button 
          type="submit" 
          disabled={isLoading || !input.trim()}
          className="bg-white text-black hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed p-3 rounded-lg transition-colors font-medium"
        >
          <Send className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
};