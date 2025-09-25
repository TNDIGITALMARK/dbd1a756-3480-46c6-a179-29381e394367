'use client';

import { Layout } from '@/components/youtube/Layout';
import { VideoCard } from '@/components/youtube/VideoCard';
import { mockVideos, categories } from '@/data/mockData';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

export default function Home() {
  return (
    <Layout currentPath="/">
      <div className="p-6">
        {/* Categories Filter */}
        <div className="mb-6">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="flex space-x-3 pb-4">
              <Button
                variant="default"
                size="sm"
                className="bg-black text-white hover:bg-gray-800 rounded-lg px-4 py-2 whitespace-nowrap"
              >
                All
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.name}
                  variant="outline"
                  size="sm"
                  className="bg-muted hover:bg-muted/80 rounded-lg px-4 py-2 whitespace-nowrap"
                >
                  {category.icon} {category.name}
                </Button>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

        {/* Trending Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Trending</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockVideos.slice(0, 5).map((video) => (
              <VideoCard key={video.id} video={video} size="small" />
            ))}
          </div>
        </div>

        {/* Recommended Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Recommended for you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockVideos.slice(2, 8).map((video) => (
              <VideoCard key={video.id} video={video} size="small" />
            ))}
          </div>
        </div>

        {/* All Videos Grid */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Latest Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {mockVideos.map((video) => (
              <VideoCard key={video.id} video={video} size="small" />
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="px-8">
            Load More Videos
          </Button>
        </div>
      </div>
    </Layout>
  );
}