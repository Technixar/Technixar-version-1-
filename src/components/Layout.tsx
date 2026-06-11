import { Outlet, ScrollRestoration } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MessageSquare } from "lucide-react";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollRestoration />
      <Navbar />
      <main className="flex-grow pt-[72px]">
        <Outlet />
      </main>
      <Footer />
      
      {/* Live Chat Sticky Action Button */}
      <button 
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary-yellow text-black rounded-full shadow-xl shadow-primary-yellow/20 flex items-center justify-center hover:scale-105 hover:bg-bright-yellow transition-all duration-300 z-50"
        aria-label="Open Live Chat"
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
}
