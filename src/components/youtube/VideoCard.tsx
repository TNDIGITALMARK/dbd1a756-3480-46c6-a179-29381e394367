'use client';

import { Play, MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Video } from '@/data/mockData';
import Link from 'next/link';
import { useState } from 'react';

interface VideoCardProps {
  video: Video;
  size?: 'small' | 'medium' | 'large';
}

export function VideoCard({ video, size = 'medium' }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: 'w-full max-w-xs',
    medium: 'w-full max-w-sm',
    large: 'w-full max-w-md'
  };

  return (
    <div
      className={`${sizeClasses[size]} group cursor-pointer`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/watch?v=${video.id}`}>
        {/* Thumbnail */}
        <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden mb-3">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover"
          />

          {/* Duration badge */}
          <Badge
            variant="secondary"
            className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1"
          >
            {video.duration}
          </Badge>

          {/* Play overlay on hover */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="bg-black/60 rounded-full p-3">
                <Play className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
          )}
        </div>

        {/* Video Info */}
        <div className="flex space-x-3">
          {/* Channel Avatar */}
          <Avatar className="w-9 h-9 mt-0.5">
            <AvatarImage src={video.channelAvatar} alt={video.channelName} />
            <AvatarFallback>{video.channelName[0]}</AvatarFallback>
          </Avatar>

          {/* Video Details */}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm leading-tight mb-1 line-clamp-2 group-hover:text-blue-600">
              {video.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1 hover:text-gray-800">
              {video.channelName}
            </p>
            <div className="flex items-center text-sm text-gray-500 space-x-1">
              <span>{video.views}</span>
              <span>•</span>
              <span>{video.timeAgo}</span>
            </div>
          </div>

          {/* More options */}
          <Button
            variant="ghost"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-8 w-8"
          >
            <MoreVertical className="w-4 h-4" />
          </Button>
        </div>
      </Link>
    </div>
  );
}