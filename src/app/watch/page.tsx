'use client';

import { useSearchParams } from 'next/navigation';
import { Layout } from '@/components/youtube/Layout';
import { VideoPlayer } from '@/components/youtube/VideoPlayer';
import { VideoCard } from '@/components/youtube/VideoCard';
import { mockVideos } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, Flag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';

export default function WatchPage() {
  const searchParams = useSearchParams();
  const videoId = searchParams.get('v');
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Find the current video
  const currentVideo = mockVideos.find(video => video.id === videoId) || mockVideos[0];

  // Get related videos (excluding current)
  const relatedVideos = mockVideos.filter(video => video.id !== currentVideo.id).slice(0, 8);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  return (
    <Layout currentPath="/watch">
      <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-7xl mx-auto">
        {/* Main Video Section */}
        <div className="flex-1">
          {/* Video Player */}
          <div className="mb-4">
            <VideoPlayer
              videoUrl={currentVideo.videoUrl}
              title={currentVideo.title}
            />
          </div>

          {/* Video Info */}
          <div className="space-y-4">
            {/* Title */}
            <h1 className="text-xl font-semibold leading-tight">
              {currentVideo.title}
            </h1>

            {/* Channel Info and Actions */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={currentVideo.channelAvatar} alt={currentVideo.channelName} />
                  <AvatarFallback>{currentVideo.channelName[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{currentVideo.channelName}</p>
                  <p className="text-sm text-muted-foreground">{currentVideo.subscribers} subscribers</p>
                </div>
                <Button
                  onClick={() => setIsSubscribed(!isSubscribed)}
                  className={`rounded-full px-6 ${
                    isSubscribed
                      ? 'bg-muted text-muted-foreground hover:bg-muted/80'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {isSubscribed ? 'Subscribed' : 'Subscribe'}
                </Button>
              </div>

              <div className="flex items-center space-x-2">
                {/* Like/Dislike */}
                <div className="flex bg-muted rounded-full">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleLike}
                    className={`rounded-l-full px-4 ${isLiked ? 'bg-blue-100' : ''}`}
                  >
                    <ThumbsUp className={`w-5 h-5 mr-2 ${isLiked ? 'fill-current text-blue-600' : ''}`} />
                    {currentVideo.likes}
                  </Button>
                  <Separator orientation="vertical" className="h-8" />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDislike}
                    className={`rounded-r-full px-4 ${isDisliked ? 'bg-red-100' : ''}`}
                  >
                    <ThumbsDown className={`w-5 h-5 ${isDisliked ? 'fill-current text-red-600' : ''}`} />
                  </Button>
                </div>

                {/* Share */}
                <Button variant="ghost" size="sm" className="bg-muted rounded-full px-4">
                  <Share className="w-5 h-5 mr-2" />
                  Share
                </Button>

                {/* Download */}
                <Button variant="ghost" size="sm" className="bg-muted rounded-full px-4">
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </Button>

                {/* More */}
                <Button variant="ghost" size="sm" className="bg-muted rounded-full p-2">
                  <MoreHorizontal className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* View Count and Upload Date */}
            <div className="flex items-center text-sm text-muted-foreground space-x-2">
              <span>{currentVideo.views}</span>
              <span>•</span>
              <span>{currentVideo.timeAgo}</span>
            </div>

            {/* Description */}
            <div className="bg-muted rounded-lg p-4">
              <p className="text-sm leading-relaxed">
                {currentVideo.description}
              </p>
              <Button variant="ghost" size="sm" className="mt-2 text-sm text-muted-foreground p-0">
                Show more
              </Button>
            </div>

            {/* Comments Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <h3 className="text-lg font-medium">Comments</h3>
                <Button variant="ghost" size="sm" className="text-sm">
                  <Flag className="w-4 h-4 mr-1" />
                  Sort by
                </Button>
              </div>

              {/* Add Comment */}
              <div className="flex space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="border-b border-gray-300 pb-2">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                  <div className="flex justify-end space-x-2 mt-2">
                    <Button size="sm" variant="ghost" className="text-sm">
                      Cancel
                    </Button>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-sm">
                      Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mock Comments */}
              <div className="space-y-4">
                {[1, 2, 3].map((comment) => (
                  <div key={comment} className="flex space-x-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback>C{comment}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center space-x-2 text-sm">
                        <span className="font-medium">@commenter{comment}</span>
                        <span className="text-muted-foreground">2 days ago</span>
                      </div>
                      <p className="text-sm">
                        Great video! Really enjoyed the content and learned a lot from it.
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          12
                        </Button>
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          <ThumbsDown className="w-4 h-4 mr-1" />
                        </Button>
                        <Button variant="ghost" size="sm" className="p-0 h-auto">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Videos Sidebar */}
        <div className="lg:w-80 space-y-4">
          <h3 className="font-medium text-lg">Up next</h3>
          <div className="space-y-3">
            {relatedVideos.map((video) => (
              <div key={video.id} className="flex space-x-2">
                <div className="w-40 flex-shrink-0">
                  <VideoCard video={video} size="small" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}