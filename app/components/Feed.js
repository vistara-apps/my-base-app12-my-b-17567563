'use client';

import { useState } from 'react';
import TweetComposer from './TweetComposer';
import TweetCard from './TweetCard';

const mockTweets = [
  {
    id: 1,
    user: {
      name: 'Alice Johnson',
      username: 'alice_j',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    content: 'Just deployed my first Base Mini App! The developer experience is incredible. Building on-chain social features has never been easier. 🚀 #BaseMiniApps #Web3',
    timestamp: '2h',
    likes: 24,
    retweets: 8,
    replies: 3,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop'
  },
  {
    id: 2,
    user: {
      name: 'Bob Smith',
      username: 'bobsmith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    content: 'The future of social media is decentralized. Love seeing platforms that give users control over their data and interactions. What are your thoughts on Web3 social?',
    timestamp: '4h',
    likes: 156,
    retweets: 42,
    replies: 18
  },
  {
    id: 3,
    user: {
      name: 'Carol Davis',
      username: 'carol_dev',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    content: 'Working on some exciting new features for our dApp. The Base ecosystem keeps getting better! Can\'t wait to share what we\'re building.',
    timestamp: '6h',
    likes: 89,
    retweets: 23,
    replies: 12
  }
];

export default function Feed() {
  const [tweets, setTweets] = useState(mockTweets);

  const handleNewTweet = (content) => {
    const newTweet = {
      id: tweets.length + 1,
      user: {
        name: 'You',
        username: 'you',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop&crop=face'
      },
      content,
      timestamp: 'now',
      likes: 0,
      retweets: 0,
      replies: 0
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div>
      <TweetComposer onTweet={handleNewTweet} />
      <div className="border-t border-gray-200">
        {tweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
