'use client';

import { Search, Bell, Video, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-14">
      <div className="flex items-center justify-between h-full px-4">
        {/* Left section - Menu and Logo */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            className="p-2"
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <Link href="/" className="flex items-center space-x-1">
            <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
              📺
            </div>
            <span className="text-xl font-bold text-gray-900">STREAMIFY</span>
          </Link>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-4 pr-12 border border-gray-300 rounded-l-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <Button
              variant="outline"
              className="h-10 px-6 border-l-0 rounded-r-full border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right section - Actions and Profile */}
        <div className="flex items-center space-x-2">
          <Link href="/upload">
            <Button variant="ghost" size="sm" className="p-2">
              <Video className="w-5 h-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="p-2">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="p-2">
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}