import React, { useState } from 'react'
import { Heart, MessageCircle, Share, MoreHorizontal } from 'lucide-react'
import './PostCard.css'

const PostCard = ({ post }) => {
  const [isLiked, setIsLiked] = useState(post.isLiked)
  const [likes, setLikes] = useState(post.likes)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  return (
    <article className="post-card">
      <div className="post-header">
        <div className="post-user-info">
          <div className="user-avatar">
            <img src={post.avatar} alt={post.username} />
          </div>
          <div className="user-details">
            <span className="username">{post.username}</span>
            <span className="post-time">{post.time}</span>
          </div>
        </div>
        <button className="post-menu">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="post-content">
        <p>{post.content}</p>
      </div>

      <div className="post-actions">
        <button 
          className={`action-button like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLike}
        >
          <Heart size={18} fill={isLiked ? '#ff4757' : 'none'} />
          <span>{likes}</span>
        </button>

        <button className="action-button">
          <MessageCircle size={18} />
          <span>{post.comments}</span>
        </button>

        <button className="action-button">
          <Share size={18} />
          <span>{post.shares}</span>
        </button>
      </div>
    </article>
  )
}

export default PostCard
