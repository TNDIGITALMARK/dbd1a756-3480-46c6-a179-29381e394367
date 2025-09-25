export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  timeAgo: string;
  duration: string;
  description: string;
  likes: string;
  dislikes: string;
  subscribers: string;
  videoUrl: string;
}

export const mockVideos: Video[] = [
  {
    id: "1",
    title: "Experience the Ultimate Freedom: Skydiving Adventure",
    thumbnail: "/generated/thumbnail-skydiving.png",
    channelName: "Adventure Seekers",
    channelAvatar: "/api/placeholder/36/36",
    views: "1.2M views",
    timeAgo: "2 days ago",
    duration: "10:24",
    description: "Join us for an incredible skydiving experience that will change your perspective on life forever. This adventure takes you through the complete journey from training to the actual jump.",
    likes: "45K",
    dislikes: "1.2K",
    subscribers: "2.3M",
    videoUrl: "/api/placeholder/video"
  },
  {
    id: "2",
    title: "Exploring Ancient Ruins",
    thumbnail: "/generated/thumbnail-ancient-ruins.png",
    channelName: "History Channel",
    channelAvatar: "/api/placeholder/36/36",
    views: "856K views",
    timeAgo: "1 week ago",
    duration: "15:42",
    description: "Discover the mysteries of ancient civilizations as we explore ruins that have stood the test of time.",
    likes: "32K",
    dislikes: "800",
    subscribers: "5.7M",
    videoUrl: "/api/placeholder/video"
  },
  {
    id: "3",
    title: "Cooking Masterclass: Italian Pasta",
    thumbnail: "/generated/thumbnail-pasta-cooking.png",
    channelName: "Chef's Table",
    channelAvatar: "/api/placeholder/36/36",
    views: "2.1M views",
    timeAgo: "3 days ago",
    duration: "25:18",
    description: "Learn how to make authentic Italian pasta from scratch with traditional techniques passed down through generations.",
    likes: "89K",
    dislikes: "2.1K",
    subscribers: "8.9M",
    videoUrl: "/api/placeholder/video"
  },
  {
    id: "4",
    title: "Top 10 Guitar Riffs",
    thumbnail: "/generated/thumbnail-guitar-riffs.png",
    channelName: "Music Masters",
    channelAvatar: "/api/placeholder/36/36",
    views: "500K views",
    timeAgo: "5 days ago",
    duration: "12:55",
    description: "Explore the most iconic guitar riffs that shaped rock and roll history.",
    likes: "25K",
    dislikes: "500",
    subscribers: "1.8M",
    videoUrl: "/api/placeholder/video"
  },
  {
    id: "5",
    title: "Coffee Brewing Techniques",
    thumbnail: "/generated/thumbnail-coffee-brewing.png",
    channelName: "Caffeine Culture",
    channelAvatar: "/api/placeholder/36/36",
    views: "750K views",
    timeAgo: "1 day ago",
    duration: "8:33",
    description: "Master the art of coffee brewing with these professional techniques for the perfect cup.",
    likes: "38K",
    dislikes: "900",
    subscribers: "3.2M",
    videoUrl: "/api/placeholder/video"
  },
  {
    id: "6",
    title: "Wildlife Photography Tips",
    thumbnail: "/generated/thumbnail-wildlife-photography.png",
    channelName: "Nature's Lens",
    channelAvatar: "/api/placeholder/36/36",
    views: "1.8M views",
    timeAgo: "4 days ago",
    duration: "18:27",
    description: "Professional wildlife photographer shares essential tips for capturing stunning nature shots.",
    likes: "76K",
    dislikes: "1.8K",
    subscribers: "4.5M",
    videoUrl: "/api/placeholder/video"
  },
  {
    id: "7",
    title: "Space Exploration Documentary",
    thumbnail: "/generated/thumbnail-space-exploration.png",
    channelName: "Cosmos Today",
    channelAvatar: "/api/placeholder/36/36",
    views: "3.2M views",
    timeAgo: "1 week ago",
    duration: "42:15",
    description: "Journey through the cosmos and discover the latest developments in space exploration and astronomy.",
    likes: "125K",
    dislikes: "3.2K",
    subscribers: "7.1M",
    videoUrl: "/api/placeholder/video"
  },
  {
    id: "8",
    title: "Tech Review: Latest Smartphones",
    thumbnail: "/generated/thumbnail-tech-review.png",
    channelName: "Tech Central",
    channelAvatar: "/api/placeholder/36/36",
    views: "925K views",
    timeAgo: "2 days ago",
    duration: "14:08",
    description: "Comprehensive review of the latest smartphone releases with detailed performance analysis.",
    likes: "42K",
    dislikes: "1.5K",
    subscribers: "6.3M",
    videoUrl: "/api/placeholder/video"
  }
];

export const categories = [
  { name: "Gaming", icon: "🎮" },
  { name: "Music", icon: "🎵" },
  { name: "Sports", icon: "⚽" },
  { name: "Education", icon: "📚" },
  { name: "Comedy", icon: "😄" },
  { name: "Tech", icon: "💻" },
  { name: "Food", icon: "🍳" },
  { name: "Travel", icon: "✈️" }
];