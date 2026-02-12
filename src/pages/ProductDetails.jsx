import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const found = products.find(p => p.id === parseInt(id));
        setProduct(found);
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) return <div className="loading">Loading...</div>;

    const handleEnquiry = () => {
        const text = `Hi, I am interested in the ${product.name}. Please share more details.`;
        window.open(`https://wa.me/919876543210?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="details-page container">
            <Link to="/shop" className="back-link">
                <ArrowLeft size={20} /> Back to Collection
            </Link>

            <div className="details-grid">
                <div className="details-image" style={{ background: product.image }}>
                    {/* Image Placeholder */}
                </div>

                <div className="details-info">
                    <span className="details-category">{product.category}</span>
                    <h1>{product.name}</h1>
                    <p className="details-price">{product.price}</p>

                    <p className="details-desc">{product.description}</p>

                    <div className="details-specs">
                        <h3>Product Details</h3>
                        <ul>
                            {product.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>

                    <button onClick={handleEnquiry} className="enquire-btn">
                        <MessageCircle size={20} /> Enquire on WhatsApp
                    </button>

                    <p className="shipping-note">
                        * Made to order. Delivery in 15-20 days. <br />
                        * Custom fitting available at our Mumbai store.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
