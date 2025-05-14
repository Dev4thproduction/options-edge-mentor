
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/message/EXAMPLE"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center gap-2"
    >
      <MessageSquare className="h-5 w-5" />
      <span className="hidden sm:inline">Chat with Team</span>
    </a>
  );
};

export default WhatsAppButton;
