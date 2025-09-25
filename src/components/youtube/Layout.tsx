'use client';

import { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export function Layout({ children, currentPath }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} currentPath={currentPath} />

      <main
        className={cn(
          "pt-14 transition-all duration-200 ease-in-out",
          isSidebarOpen ? "ml-60" : "ml-18"
        )}
      >
        <div className="min-h-[calc(100vh-56px)]">
          {children}
        </div>
      </main>
    </div>
  );
}