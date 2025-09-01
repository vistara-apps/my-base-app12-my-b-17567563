'use client';

import { useState } from 'react';

const IconComponent = ({ name, className = "w-5 h-5", filled = false }) => {
  const icons = {
    chat: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    retweet: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    heart: filled ? (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
      </svg>
    ) : (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    share: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
      </svg>
    ),
    dots: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
      </svg>
    )
  };
  
  return icons[name] || icons.chat;
};

export default function TweetCard({ tweet }) {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);
  const [likes, setLikes] = useState(tweet.likes);
  const [retweets, setRetweets] = useState(tweet.retweets);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const handleRetweet = () => {
    setRetweeted(!retweeted);
    setRetweets(retweeted ? retweets - 1 : retweets + 1);
  };

  return (
    <article className="border-b border-gray-200 p-4 hover:bg-gray-50/50 transition-colors duration-200 cursor-pointer">
      <div className="flex space-x-3">
        <img
          src={tweet.user.avatar}
          alt={tweet.user.name}
          className="profile-avatar"
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h3 className="font-semibold text-gray-900 hover:underline cursor-pointer">
              {tweet.user.name}
            </h3>
            <span className="text-gray-500">@{tweet.user.username}</span>
            <span className="text-gray-500">·</span>
            <span className="text-gray-500">{tweet.timestamp}</span>
            <div className="ml-auto">
              <button className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors duration-200">
                <IconComponent name="dots" />
              </button>
            </div>
          </div>
          
          <div className="mt-2">
            <p className="text-gray-900 whitespace-pre-wrap">{tweet.content}</p>
            {tweet.image && (
              <div className="mt-3">
                <img
                  src={tweet.image}
                  alt="Tweet image"
                  className="rounded-2xl max-w-full h-auto border border-gray-200"
                />
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-4 max-w-md">
            <button className="action-button group">
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors duration-200">
                <IconComponent name="chat" />
              </div>
              <span className="text-sm">{tweet.replies}</span>
            </button>
            
            <button 
              onClick={handleRetweet}
              className={`action-button group ${retweeted ? 'text-green-500' : ''}`}
            >
              <div className="p-2 rounded-full group-hover:bg-green-100 transition-colors duration-200">
                <IconComponent name="retweet" />
              </div>
              <span className="text-sm">{retweets}</span>
            </button>
            
            <button 
              onClick={handleLike}
              className={`action-button group ${liked ? 'text-red-500' : ''}`}
            >
              <div className="p-2 rounded-full group-hover:bg-red-100 transition-colors duration-200">
                <IconComponent name="heart" filled={liked} />
              </div>
              <span className="text-sm">{likes}</span>
            </button>
            
            <button className="action-button group">
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors duration-200">
                <IconComponent name="share" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
