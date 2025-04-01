'use client';
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import CreatePostForm from '@/components/post/CreatePostForm';
import PostItem, { PostProps } from '@/components/post/PostItem';

const Home = () => {
  const [posts, setPosts] = useState<PostProps[]>([
    {
      id: '1',
      username: 'Elon Musk',
      handle: '@elonmusk',
      content: "Exciting news! We're expanding our X vision to create a truly all-in-one platform. Stay tuned for groundbreaking changes.",
      timestamp: '2h',
      likes: 3482,
      replies: 421,
      reposts: 827,
      verified: true
    },
    {
      id: '2',
      username: 'Tech News',
      handle: '@technews',
      content: "Apple announces new MacBook Pro with M3 chip. Initial benchmarks show it's 40% faster than previous generation with even better battery life.",
      timestamp: '4h',
      likes: 752,
      replies: 84,
      reposts: 126,
      verified: true,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b'
    },
    {
      id: '3',
      username: 'Product Hunt',
      handle: '@ProductHunt',
      content: '💡 Startup tip of the day: Focus on solving one problem extremely well before expanding your product.',
      timestamp: '7h',
      likes: 489,
      replies: 37,
      reposts: 112,
      verified: true
    },
    {
      id: '4',
      username: 'NASA',
      handle: '@NASA',
      content: "Stunning new images from the James Webb Space Telescope reveal details of distant galaxies never seen before. Our universe is even more beautiful than we imagined.",
      timestamp: '10h',
      likes: 2751,
      replies: 230,
      reposts: 1034,
      verified: true,
      image: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564'
    },
    {
      id: '5',
      username: 'React',
      handle: '@reactjs',
      content: 'React 19 is coming soon with groundbreaking new features to improve developer experience and performance!',
      timestamp: '12h',
      likes: 1245,
      replies: 187,
      reposts: 421,
      verified: true
    }
  ]);
  
  const handlePostSubmit = (content: string) => {
    const newPost: PostProps = {
      id: Date.now().toString(),
      username: 'You',
      handle: '@username',
      content,
      timestamp: 'now',
      likes: 0,
      replies: 0,
      reposts: 0,
      isLiked: false,
      isReposted: false
    };
    
    setPosts([newPost, ...posts]);
  };

  return (
    <MainLayout>
      <div className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-10">
        <h1 className="text-xl font-bold p-4">Home</h1>
        
        <div className="flex border-b">
          <button className="flex-1 py-4 font-bold relative hover:bg-accent/10 transition-colors">
            For you
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-primary rounded-full"></div>
          </button>
          <button className="flex-1 py-4 text-muted-foreground hover:bg-accent/10 transition-colors">
            Following
          </button>
        </div>
      </div>
      
      <div className="animate-fade-in">
        <CreatePostForm onPostSubmit={handlePostSubmit} />
        
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} {...post} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;