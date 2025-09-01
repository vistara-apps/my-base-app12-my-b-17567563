'use client';

import { useState } from 'react';

const IconComponent = ({ name, className = "w-5 h-5" }) => {
  const icons = {
    photo: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    smile: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    calendar: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    location: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  };
  
  return icons[name] || icons.photo;
};

export default function TweetComposer({ onTweet }) {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onTweet(content);
      setContent('');
    }
  };

  return (
    <div className="border-b border-gray-200 p-4">
      <div className="flex space-x-3">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
        <div className="flex-1">
          <form onSubmit={handleSubmit}>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className="w-full text-xl placeholder-gray-500 border-none resize-none focus:outline-none"
              rows="3"
            />
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <button type="button" className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors duration-200">
                  <IconComponent name="photo" />
                </button>
                <button type="button" className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors duration-200">
                  <IconComponent name="smile" />
                </button>
                <button type="button" className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors duration-200">
                  <IconComponent name="calendar" />
                </button>
                <button type="button" className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors duration-200">
                  <IconComponent name="location" />
                </button>
              </div>
              
              <button
                type="submit"
                disabled={!content.trim()}
                className="bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Tweet
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
