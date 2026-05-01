import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './ProductList.css';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Data structure with 3 categories and 6 plants each (Task 6 requirement)
    const plantsArray = [
        {
            category: "Air Purifying",
            plants: [
                { name: "Snake Plant", image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg", cost: "$15", description: "Produces oxygen at night." },
                { name: "Spider Plant", image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg", cost: "$12", description: "Filters formaldehyde." },
                { name: "Peace Lily", image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lily-4269365_1280.jpg", cost: "$18", description: "Removes mold spores." },
                { name: "Boston Fern", image: "https://cdn.pixabay.com/photo/2020/04/30/19/52/fern-5114414_1280.jpg", cost: "$20", description: "Adds humidity indoors." },
                { name: "Rubber Plant", image: "https://cdn.pixabay.com/photo/2020/02/15/11/49/ficus-4850669_1280.jpg", cost: "$22", description: "Large, glossy leaves." },
                { name: "Aloe Vera", image: "https://cdn.pixabay.com/photo/2018/04/02/07/42/aloe-3283100_1280.jpg", cost: "$10", description: "Medicinal and air-purifying." }
            ]
        },
        {
            category: "Aromatic",
            plants: [
                { name: "Lavender", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb", cost: "$15", description: "Calming scent." },
                { name: "Rosemary", image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae", cost: "$12", description: "Great for cooking." },
                { name: "Mint", image: "https://images.unsplash.com/photo-1596719030075-4ae3f26dfee3", cost: "$10", description: "Fresh fragrance." },
                { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1603720228919-913a44f24254", cost: "$14", description: "Citrusy aroma." },
                { name: "Hyacinth", image: "https://images.unsplash.com/photo-1512187849-530338901031", cost: "$16", description: "Intense floral scent." },
                { name: "Jasmine", image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b", cost: "$25", description: "Sweet night-blooming." }
            ]
        },
        {
            category: "Low Maintenance",
            plants: [
                { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361", cost: "$25", description: "Thrives on neglect." },
                { name: "Pothos", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d", cost: "$10", description: "Very hard to kill." },
                { name: "Succulent Mix", image: "https://images.unsplash.com/photo-1520302630591-fd1c66ed11a9", cost: "$15", description: "Needs very little water." },
                { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b", cost: "$28", description: "Extremely durable." },
                { name: "Jade Plant", image: "https://images.unsplash.com/photo-1510212330253-e448c31686df", cost: "$18", description: "Symbol of good luck." },
                { name: "Ponytail Palm", image: "https://images.unsplash.com/photo-1601610427306-03c734005126", cost: "$30", description: "Stores water in trunk." }
            ]
        }
    ];

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleAddToCart = (plant) => {
        dispatch(addItem(plant));
    };

    return (
        <div>
            {/* Navbar (Task 6 requirement) */}
            <nav className="navbar">
                <div className="nav-logo" onClick={() => setShowCart(false)}>
                   <h3>Paradise Nursery</h3>
                </div>
                <div className="nav-links">
                    <span onClick={() => setShowCart(false)}>Plants</span>
                    <span className="cart-icon" onClick={() => setShowCart(true)}>
                        🛒 <span className="cart-count">{totalQuantity}</span>
                    </span>
                </div>
            </nav>

            {!showCart ? (
                <div className="product-listing">
                    {plantsArray.map((category) => (
                        <div key={category.category}>
                            <h2 className="category-title">{category.category}</h2>
                            <div className="product-grid">
                                {category.plants.map((plant) => (
                                    <div className="product-card" key={plant.name}>
                                        <img className="product-image" src={plant.image} alt={plant.name} />
                                        <h3 className="product-name">{plant.name}</h3>
                                        <p className="product-cost">{plant.cost}</p>
                                        <button 
                                            className="add-to-cart-btn"
                                            disabled={cartItems.some(item => item.name === plant.name)}
                                            onClick={() => handleAddToCart(plant)}>
                                            {cartItems.some(item => item.name === plant.name) ? 'In Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={() => setShowCart(false)} />
            )}
        </div>
    );
}

export default ProductList;
