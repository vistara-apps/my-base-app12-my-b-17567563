import React from 'react'
import { Search, MessageCircle, Bell, Menu } from 'lucide-react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <Menu className="menu-icon" size={24} />
          <h1 className="logo">Social</h1>
        </div>
        
        <div className="header-center">
          <div className="search-container">
            <Search className="search-icon" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="search-input"
            />
          </div>
        </div>
        
        <div className="header-right">
          <MessageCircle className="header-icon" size={22} />
          <div className="notification-container">
            <Bell className="header-icon" size={22} />
            <span className="notification-badge">3</span>
          </div>
          <div className="profile-avatar">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face" 
              alt="Profile" 
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
