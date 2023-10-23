import "./Css/Footer.css";

function Footer() {
    return (<div>

      <div className="myfooter">

    <div className="amazon-footer">
      <div className="amazon-footer-section">
        <h3>Get to Know Us</h3>
        <ul>
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Science</li>
        </ul>
      </div>
      <div className="amazon-footer-section">
        <h3>Connect with Us</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <div className="amazon-footer-section">
        <h3>Make Money with Us</h3>
        <ul>
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Protect and Build Your Brand</li>
          <li>Amazon Global Selling</li>
          <li>Become an Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
        </ul>
      </div>
      <div className="amazon-footer-section">
        <h3>Let Us Help You</h3>
        <ul>
          <li>COVID-19 and Amazon</li>
          <li>Your Account</li>
          <li>Returns Centre</li>
          <li>100% Purchase Protection</li>
        </ul>
      </div>
    </div>
      </div>

      {/*another footer*/}

      <div>
        <footer className="first-footer">
          <ul>
            <li>AbeBooks</li>
            <li>Books, art <br/>& collectibles</li>
          </ul>
          <ul>
            <li>Amazon Web Services</li>
            <li>Scalable Cloud <br/> Computing Services</li>
          </ul>
          <ul>
            <li>Audible</li>
            <li>Download <br/>Audio Books</li>
          </ul>
          <ul>
            <li>IMDb</li>
            <li>Movies, TV <br/> & Celebrities</li>
          </ul>
          <ul>
            <li>Shopbop</li>
            <li>Designer <br/>Fashion Brands</li>
          </ul>
          <ul>
            <li>Amazon Business</li>
            <li>Everything For <br/> Your Business</li>
          </ul>
          <ul>
            <li>Prime Now</li>
            <li>2-Hour Delivery <br/> on Everyday Items</li>
          </ul>
          <ul>
            <li>Amazon Prime Music</li>
            <li>100 million songs, ad-free</li>
            <li>Over 15 million podcast episodes</li>
          </ul>

           <div className="amazon">
                <p className="small">Conditions of Use & Sale &nbsp; Privacy Notice &nbsp; Interest-Based Ads</p>
                  <p className="small">© 1996-2023, Amazon.com, Inc. or its affiliates</p>
           </div>

        </footer>
      </div>
     
    </div>
    );
}

export default Footer;