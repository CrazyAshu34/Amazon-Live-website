import "./Css/MyBody.css";

export default function Mybody() {
    const fashion = "https://source.unsplash.com/featured/?fashion";
    const shoes = "https://source.unsplash.com/featured/?shoes";
    const kitchen = "https://source.unsplash.com/featured/?kitchen";
    const nature = "https://source.unsplash.com/featured/?nature";
    const architech = "https://source.unsplash.com/featured/?architecture";
    const tech = "https://source.unsplash.com/featured/?technology";
    const business = "https://source.unsplash.com/featured/?business";
    const music = "https://source.unsplash.com/featured/?music";
    const sports = "https://source.unsplash.com/featured/?sports";
    const travel = "https://source.unsplash.com/featured/?travel";

    return (<div>
        <div className="container">
            <div className="my-body">
                <div className="parent-div">
                    <div className="my-title">
                        <p>Greate offer on wide range of Tvs for every room</p>
                    </div>
                    <div className="child-div c1">
                        <img src={fashion} alt="Fashion" />
                        <div className="caption">Fashion</div>
                    </div>
                    <div className="child-div c2">
                        <img src={shoes} alt="Shoes" />
                        <div className="caption">Shoes</div>
                    </div>
                    <div className="child-div c3">
                        <img src={kitchen} alt="Kitchen" />
                        <div className="caption">Kitchen</div>
                    </div>
                    <div className="child-div c4">
                        <img src={nature} alt="Nature" />
                        <div className="caption">Nature</div>
                    </div>
                </div>

                <div className="parent-div">
                    <div className="my-title">
                        <p>Greate offer on wide range of Tvs for every room</p>
                    </div>
                    <div className="child-div c5">
                        <img className="c5_11-img" src={architech} alt="Architecture" />
                        <div className="caption">Architecture</div>
                    </div>
                </div>

                <div className="parent-div">
                    <div className="my-title">
                        <p>Greate offer on wide range of Tvs for every room</p>
                    </div>
                    <div className="child-div c7">
                        <img src={tech} alt="technology" />
                        <div className="caption">Technology</div>
                    </div>
                    <div className="child-div c8">
                        <img src={business} alt="business" />
                        <div className="caption">Business</div>
                    </div>
                    <div className="child-div c9">
                        <img src={music} alt="music" />
                        <div className="caption">music</div>
                    </div>
                    <div className="child-div c10">
                        <img src={sports} alt="sports" />
                        <div className="caption">sports</div>
                    </div>
                </div>

                <div className="parent-div">
                    <div className="my-title">
                        <p>Greate offer on wide range of Tvs for every room</p>
                    </div>
                    <div className="child-div c11">
                        <img className="c5_11-img" src={travel} alt="travel" />
                        <div className="caption">Travel</div>
                    </div>
                </div>

            </div>
            <div className="cart-container">
                <div className="cart">
                    <h2>Laptops & accessories</h2>
                    <img src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg" alt="product1" />
                    <p>Price: $49.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="cart">
                    <h2>Hardware & stuff</h2>
                    <img src="https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg" alt="product2" />
                    <p>Price: $79.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="cart">
                    <h2>Food Essentials Set</h2>
                    <img src="https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg" alt="product3" />
                    <p>Price: $129.99</p>
                    <button>Add to Cart</button>
                </div>
                <div className="cart">
                    <h2>Dimend watches</h2>
                    <img src="https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg" alt="product4" />
                    <p>Price: $19.99</p>
                    <button>Add to Cart</button>
                </div>
            </div>



        </div>
    </div>);
};