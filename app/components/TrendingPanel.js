'use client';

const trendingTopics = [
  { topic: '#BaseMiniApps', tweets: '12.5K' },
  { topic: '#Web3Social', tweets: '8.2K' },
  { topic: '#DeFi', tweets: '45.1K' },
  { topic: '#Blockchain', tweets: '23.7K' },
  { topic: '#Crypto', tweets: '156K' },
];

const suggestedUsers = [
  {
    name: 'Base Protocol',
    username: 'base',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face',
    verified: true
  },
  {
    name: 'Coinbase',
    username: 'coinbase',
    avatar: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=150&fit=crop&crop=face',
    verified: true
  },
  {
    name: 'Vitalik Buterin',
    username: 'vitalikbuterin',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    verified: true
  },
];

export default function TrendingPanel() {
  return (
    <div className="space-y-4">
      {/* Search */}
      <div className="bg-gray-100 rounded-full p-3">
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full focus:outline-none placeholder-gray-500"
        />
      </div>

      {/* Trending */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">What's happening</h2>
        <div className="space-y-3">
          {trendingTopics.map((item, index) => (
            <div key={index} className="hover:bg-gray-100 p-2 rounded-lg cursor-pointer transition-colors duration-200">
              <div className="text-gray-500 text-sm">Trending in Technology</div>
              <div className="font-semibold">{item.topic}</div>
              <div className="text-gray-500 text-sm">{item.tweets} Tweets</div>
            </div>
          ))}
        </div>
        <button className="text-primary hover:underline mt-3">Show more</button>
      </div>

      {/* Who to follow */}
      <div className="bg-gray-50 rounded-2xl p-4">
        <h2 className="text-xl font-bold mb-4">Who to follow</h2>
        <div className="space-y-3">
          {suggestedUsers.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold flex items-center space-x-1">
                    <span>{user.name}</span>
                    {user.verified && (
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="text-gray-500 text-sm">@{user.username}</div>
                </div>
              </div>
              <button className="bg-black text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors duration-200">
                Follow
              </button>
            </div>
          ))}
        </div>
        <button className="text-primary hover:underline mt-3">Show more</button>
      </div>
    </div>
  );
}
