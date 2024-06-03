import CardShops from "../Cards/CardShops";
import home_appliances from "../assets/images/homeappliances.jpg";
import "./Home.css";

import Kitchen from "../assets/images/kitchen.jpg";
import Sofa from "../assets/images/Sofa.jpg";
import flowerBedroom from "../assets/images/flowerBedroom.jpg";
import BathroomAccessories from "../assets/images/BathroomAccessories.webp";
import HouseMid from "../assets/images/houseMid.png";
import CardShopTwo from "../Cards/CardShopTwo";
import DyCard from "../Cards/DyCard";

// for Deals image
import Modern from "../assets/picture/Modern.jpg";
import Frame from "../assets/picture/Frame.jpg";
import CookingSet from "../assets/picture/CookingSet.webp";
import SmallCabinet from "../assets/picture/SmallCabinet.jpg";
import Utilitykitchen from "../assets/picture/Utilitykitchen.jpg";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// for Services to Help your shop
import AskQuestion from "../assets/picture/AskQuestion.jpg";
import Visa from "../assets/picture/Visa.png";
import Delivery from "../assets/picture/Delivery.jpg";
const Home = () => {
  return (
    <section>
      <h2 className="start">Welcome to our Shop</h2>
      <div className="house_top">
        <div className="house_top_text">
          <h3>
            Make Your House
            <br />
            Better
          </h3>
        </div>
        <div className="house_top_img">
          <img src={home_appliances} alt="Home appliances image" />
        </div>
      </div>

      <h2 className="shop_text">Shop our top products</h2>
      <CardShops />

      <h2 className="discount">
        Get up to <span>70%</span> off
      </h2>
      <div className="discount_block">
        <div className="discount_box one">
          <h3>Save</h3>
          <h2>100$</h2>
          <p>Explore Our Furniture and Home Furnishing Rage</p>
          <img src={Kitchen} alt="" />
        </div>
        <div className="discount_box two">
          <h3>Save</h3>
          <h2>100$</h2>
          <p>Explore Our Furniture and Home Furnishing Rage</p>
          <img src={Sofa} alt="" />
        </div>
        <div className="discount_box tree">
          <h3>Save</h3>
          <h2>50$</h2>
          <p>You’ll get 50$ 0ff for all item for decore your bedroom</p>
          <img src={flowerBedroom} alt="" />
        </div>
        <div className="discount_box for">
          <h3>Save</h3>
          <h2>10$</h2>
          <p>Let get a discount and buy what you want to</p>
          <img src={BathroomAccessories} alt="" />
        </div>
      </div>

      <div className="house_mid">
        <div className="house_mid_text">
          <h3>Get more Discount</h3>
        </div>
        <div className="house_mid_img">
          <img src={HouseMid} alt="kitchent accessories image" />
        </div>
      </div>

      {/* for card on mid page */}
      <CardShopTwo />

      <div className="deals">
        <h2>
          Deals under 20${" "}
          <span>
            <Link to="deals">
              See more <ChevronRight className="deals_icon" size={18} />
            </Link>
          </span>
        </h2>
        <div className="deals_box">
          <DyCard img={Modern} name="Modern table lamb" price="$19.00" />
          <DyCard img={Frame} name="Wood picture frame" price="$10.00" />
          <DyCard img={CookingSet} name="Minimal cooking set" price="$10.99" />
          <DyCard img={SmallCabinet} name="The home depot" price="$18.99" />
          <DyCard
            img={Utilitykitchen}
            name="Utility kitchen canister"
            price="$15.00"
          />
        </div>
      </div>

      {/* for Services to Help your shop */}
      <h2 className="service">Services to Help your shop</h2>
      <div className="service_block">
        <div className="service_block_box">
          <div className="service_block_box_text">
            <h3>Frequently Asked question</h3>
            <p>Update on Safe shopping in our store</p>
          </div>
          <div className="service_block_box_pic">
            <img src={AskQuestion} alt="" />
          </div>
        </div>

        <div className="service_block_box">
          <div className="service_block_box_text">
            <h3>Online Payment Process</h3>
            <p>Update on Safe shopping in our store</p>
          </div>
          <div className="service_block_box_pic">
            <img src={Visa} alt="" />
          </div>
        </div>
        <div className="service_block_box">
          <div className="service_block_box_text">
            <h3>Home Delivery Option </h3>
            <p>Update on Safe shopping in our store</p>
          </div>
          <div className="service_block_box_pic">
            <img src={Delivery} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
