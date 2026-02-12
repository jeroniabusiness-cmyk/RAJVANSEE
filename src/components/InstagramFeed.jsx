import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import img1 from '../assets/images/sherwani-ivory.jpg';
import img2 from '../assets/images/bandhgala-blue.jpg';
import img3 from '../assets/images/kurta-gold.jpg';
import img4 from '../assets/images/sherwani-red-gold.jpg';
import './InstagramFeed.css';

const feedItems = [
    { id: 1, likes: 1240, comments: 45, image: img1 },
    { id: 2, likes: 890, comments: 23, image: img2 },
    { id: 3, likes: 2100, comments: 112, image: img3 },
    { id: 4, likes: 1500, comments: 67, image: img4 },
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
                        <div key={item.id} className="insta-card">
                            <img src={item.image} alt="Instagram Post" className="insta-image" />
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
