import React from 'react'
import Header from './components/Header'
import PostCard from './components/PostCard'
import './App.css'

function App() {
  const posts = [
    {
      id: 1,
      username: 'johndoe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      time: '2h',
      content: 'Just finished an amazing workout session! 💪 Feeling stronger every day. The key is consistency and never giving up on your goals.',
      likes: 42,
      comments: 8,
      shares: 3,
      isLiked: false
    },
    {
      id: 2,
      username: 'sarahwilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      time: '4h',
      content: 'Beautiful sunset from my balcony tonight 🌅 Sometimes the simple moments are the most precious ones.',
      likes: 89,
      comments: 15,
      shares: 7,
      isLiked: true
    },
    {
      id: 3,
      username: 'mikejohnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      time: '6h',
      content: 'Working on a new project that I\'m really excited about! Can\'t wait to share more details soon. Stay tuned! 🚀',
      likes: 156,
      comments: 23,
      shares: 12,
      isLiked: false
    }
  ]

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </main>
    </div>
  )
}

export default App
