import React from 'react'
import { useStateValue } from './StateProvider';
import './css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    
    return (
        <div className="checkout">
            <img 
            className="checkout__ad" 
            src="https://images-eu.ssl-images-amazon.com/images/G/02/Events/2020/EOY_Deals/XCM_Manual_1297729_1520127_UK_Stripe_3599979_1500x80_en_GB.jpg" 
            alt="ad"/>
            {basket?.length===0 ? (
                <div>
                <h2>Your Shopping Basket is empty</h2>
                <p>
                    You have no items in your basket. To buy one or more items, 
                    click "add to basket" next to the item.
                </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item =>(
                    <CheckoutProduct 
                        item= {item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                    ))}
                    console.log(price);
                </div>
            )}
        </div>
    );
}

export default Checkout
