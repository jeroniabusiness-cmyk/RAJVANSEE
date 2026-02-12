import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import './InstagramFeed.css';

const feedItems = [
    { id: 1, likes: 1240, comments: 45, color: '#d4af37' },
    { id: 2, likes: 890, comments: 23, color: '#c5a059' },
    { id: 3, likes: 2100, comments: 112, color: '#a08d45' },
    { id: 4, likes: 1500, comments: 67, color: '#8d7d35' },
];

const InstagramFeed = () => {
    return (
        <section className="insta-section">
            <div className="container">
                <div className="insta-header">
                    <h2 className="insta-title">As Seen On You</h2>
                    <p className="insta-handle">@RajvanseeOfficial</p>
                </div>

                <div className="insta-grid">
                    {feedItems.map((item) => (
                        <div key={item.id} className="insta-card" style={{ backgroundColor: item.color }}>
                            <div className="insta-overlay">
                                <div className="insta-stat">
                                    <Heart size={20} /> <span>{item.likes}</span>
                                </div>
                                <div className="insta-stat">
                                    <MessageCircle size={20} /> <span>{item.comments}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
