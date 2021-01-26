import React from 'react';
import homeImage from "./images/homeImage.png";
import becauseOfYou from "./images/becauseOfYou.png"
import Product from "./Product";
import "./css/Home.css";

function Home() {
    return (
        <div className="home">
            <img 
            className="home__image" 
            src={homeImage} 
            alt="background"
            />

            <div className="home__row">
                <Product 
                    id="1234"
                    title="
                    Ninja Foodi Mini Multi-Cooker [OP100UK], 4.7 L, Air Fryer, Grey and Black"
                    price={149}
                    rating={5}
                    image= "https://images-na.ssl-images-amazon.com/images/I/61lo18ubACL._AC_SL1400_.jpg"
                />
                <Product 
                    id="1235"
                    title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
                    price={19.99}
                    rating={5}
                    image= "https://images-na.ssl-images-amazon.com/images/I/616NfcPi-zL._AC_SL1000_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12346"
                    title='
                    Fire HD 8 Kids Edition tablet | 8" HD display, 32 GB, Blue Kid-Proof Case'
                    price={99.99}
                    rating={4}
                    image= "https://images-na.ssl-images-amazon.com/images/I/615IrXeajOL._AC_SL1000_.jpg"
                />
                <Product 
                    id="12347"
                    title="
                    Hiking Jacket,Women's Waterproof and Breathable Insulated Hooded Jacket,Outdoor Water Resistant Rain Jacket,Autumn(M-XXL)"
                    price={19.99}
                    rating={3}
                    image= "https://m.media-amazon.com/images/I/81YT3r4JcqL._AC_UL320_.jpg"
                />
                  <Product 
                    id="12348"
                    title="Because of You: The instant Sunday Times bestseller 2020, by Dawn French "
                    price={25}
                    rating={5}
                    image= {becauseOfYou}
                />
            </div>
            <div className="home__row">
                <Product 
                    id="12349"
                    title="JVC Fire TV Edition 40'' Smart 4K Ultra HD HDR LED TV"
                    price={315}
                    rating={5}
                    image= "https://images-na.ssl-images-amazon.com/images/I/61E-2UoIAJL._AC_SL1000_.jpg"
                />
            </div>
        </div>
    );
}

export default Home
