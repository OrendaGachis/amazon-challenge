import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        //BEM
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""
                />

                <div className="home__row">
                    <Product 
                    id="12321341"
                    title="The Lean Start Up"
                    price={29.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                    rating={5}
                    />
                    <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for 
                    Baking, Stylish Kitchen Mixer with 
                    K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://donaghybros.co.uk/media/catalog/product/cache/1/thumbnail/476x/9df78eab33525d08d6e5fb8d27136e95/w/o/wood_1_3.jpg"
                     />
                    </div>

                    <div className="home__row">
                      <Product 
                      id="4903850"
                      title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                      price={199.99}
                      rating={3}
                      image="https://img.ebyrcdn.net/841120-809821-800.jpg"
                      />
                      <Product 
                      id="3254354345"
                      title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB) - Silver (4th Generation)"
                      price={598.99}
                      rating={4}
                      image="https://cdn.tecobuy.co.uk/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/a/p/apple-ipad-pro-12-9--2020-wifi-128gb-6g3bbe.jpg"
                      />
                      <Product 
                      id="23445930"
                      title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                      price={98.99}
                      rating={5}
                      image="https://i.ebayimg.com/images/g/oK0AAOSwH4td4AOR/s-l1600.jpg"
                      />
                    </div>

                    <div className="home__row">
                    <Product 
                    id="87098762"
                    title="UK Calming Autism Sensory LED Light Projector Relax Ocean Night Music Projection"
                    price={19.99}
                    rating={4}
                    image="https://i.ebayimg.com/images/g/GpAAAOSwn9VfOkFZ/s-l500.webp"
                    />
                    </div>
            </div>
        </div>
    )
}

export default Home