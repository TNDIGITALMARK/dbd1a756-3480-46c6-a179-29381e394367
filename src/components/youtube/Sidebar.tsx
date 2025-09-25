'use client';

import { Home, Compass, Clock, ThumbsUp, PlaySquare, Settings, HelpCircle, MessageSquare, Film, Music, Gamepad2, Trophy, Lightbulb, Shirt } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  currentPath?: string;
}

export function Sidebar({ isOpen, currentPath = '/' }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Home', href: '/', active: currentPath === '/' },
    { icon: Compass, label: 'Trending', href: '/trending' },
    { icon: PlaySquare, label: 'Subscriptions', href: '/subscriptions' },
  ];

  const libraryItems = [
    { icon: Clock, label: 'History', href: '/history' },
    { icon: ThumbsUp, label: 'Liked videos', href: '/liked' },
    { icon: PlaySquare, label: 'Watch later', href: '/watch-later' },
  ];

  const exploreItems = [
    { icon: Film, label: 'Movies', href: '/movies' },
    { icon: Music, label: 'Music', href: '/music' },
    { icon: Gamepad2, label: 'Gaming', href: '/gaming' },
    { icon: Trophy, label: 'Sports', href: '/sports' },
    { icon: Lightbulb, label: 'Learning', href: '/learning' },
    { icon: Shirt, label: 'Fashion', href: '/fashion' },
  ];

  const moreItems = [
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: HelpCircle, label: 'Help', href: '/help' },
    { icon: MessageSquare, label: 'Send feedback', href: '/feedback' },
  ];

  const MenuItem = ({ icon: Icon, label, href, active = false }: any) => (
    <Link href={href}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start h-10 px-3 text-sm font-normal text-foreground hover:bg-muted/50",
          active && "bg-muted hover:bg-muted text-foreground"
        )}
      >
        <Icon className="w-5 h-5 mr-6 text-current" />
        {label}
      </Button>
    </Link>
  );

  if (!isOpen) {
    return (
      <aside className="fixed left-0 top-14 w-18 h-[calc(100vh-56px)] bg-background border-r border-border z-40">
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="flex-col h-16 w-16 text-foreground hover:bg-muted/50">
              <Home className="w-5 h-5 mb-1 text-current" />
              <span className="text-xs">Home</span>
            </Button>
          </Link>
          <Link href="/trending">
            <Button variant="ghost" size="sm" className="flex-col h-16 w-16 text-foreground hover:bg-muted/50">
              <Compass className="w-5 h-5 mb-1 text-current" />
              <span className="text-xs">Trending</span>
            </Button>
          </Link>
          <Link href="/subscriptions">
            <Button variant="ghost" size="sm" className="flex-col h-16 w-16 text-foreground hover:bg-muted/50">
              <PlaySquare className="w-5 h-5 mb-1 text-current" />
              <span className="text-xs">Subscriptions</span>
            </Button>
          </Link>
        </div>
      </aside>
    );
  }

  return (
    <aside className="fixed left-0 top-14 w-60 h-[calc(100vh-56px)] bg-background border-r border-border z-40">
      <ScrollArea className="h-full">
        <div className="p-3">
          {/* Main Menu */}
          <div className="space-y-1">
            {menuItems.map((item) => (
              <MenuItem key={item.label} {...item} />
            ))}
          </div>

          <Separator className="my-4" />

          {/* Library */}
          <div className="space-y-1">
            <h3 className="px-3 text-sm font-medium text-muted-foreground mb-2">Library</h3>
            {libraryItems.map((item) => (
              <MenuItem key={item.label} {...item} />
            ))}
          </div>

          <Separator className="my-4" />

          {/* Explore */}
          <div className="space-y-1">
            <h3 className="px-3 text-sm font-medium text-muted-foreground mb-2">Explore</h3>
            {exploreItems.map((item) => (
              <MenuItem key={item.label} {...item} />
            ))}
          </div>

          <Separator className="my-4" />

          {/* More */}
          <div className="space-y-1">
            {moreItems.map((item) => (
              <MenuItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
}