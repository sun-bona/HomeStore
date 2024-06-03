import { ChevronLeft } from "lucide-react";
import "./Deal.css";
import { Link } from "react-router-dom";

import Home from "../assets/deals/Home.jpg";
import Bath from "../assets/deals/Bath.jpg";
import Chnang from "../assets/deals/Chnang.webp";
import Flower from "../assets/deals/flower.jpg";
import DyCard from "../Cards/DyCard";

// for deals page images
import Light from "../assets/deals/Light.jpg";
import LunaLED from "../assets/deals/LunaLED.webp";
import SmallClock from "../assets/deals/SmallClock.jpg";
import CutieCup from "../assets/deals/CutieCup.webp";
import SoupPot from "../assets/deals/SoupPot.webp";
import GlassJar from "../assets/deals/GlassJar.jpg";
import KitchenGlove from "../assets/deals/KitchenGlove.jpg";
import FoamMaker from "../assets/deals/FoamMaker.jpg";
import BestGlass from "../assets/deals/BestGlass.jpg";
import ScrubbingBrush from "../assets/deals/ScrubbingBrush.jpg";
import CuteVase from "../assets/deals/CuteVase.jpg";
import MattBlack from "../assets/deals/MattBlack.jpg";
const Deal = () => {
  return (
    <article>
      <h2 className="back_icon">
        <Link to="/">
          <ChevronLeft strokeWidth={2.25} size={40} />
        </Link>
      </h2>
      <div className="under_block">
        <div className="under_block_left">
          <h2>
            Find deals <br /> Under 20$
          </h2>
        </div>
        <div className="under_block_right">
          <div className="under_block_right_box">
            <div className="under_block_right_box_item">
              <img src={Home} alt="" />
              <h3>Home</h3>
            </div>
            <div className="under_block_right_box_item">
              <img src={Bath} alt="" />
              <h3>Bathroom</h3>
            </div>
            <div className="under_block_right_box_item">
              <img src={Chnang} alt="" />
              <h3>Kitchen</h3>
            </div>
            <div className="under_block_right_box_item">
              <img src={Flower} alt="" />
              <h3>Bedroom</h3>
            </div>
          </div>
        </div>
      </div>

      {/* for all deals */}
      <h2 className="deal_text">All Deals</h2>
      <div className="deal_block">
        <DyCard img={Light} name="Tulip Battery light night" price="" />
        <DyCard img={LunaLED} name="Luna LED lightnight" price="$19.89" />
        <DyCard img={SmallClock} name="Small Alarm Clock" price="$10.99" />
        <DyCard img={CutieCup} name="Cutie Coffee Cup" price="$7.99" />
        <DyCard img={SoupPot} name="Ceramic Soup pot" price="$18.89" />
        <DyCard img={GlassJar} name="Glass Jar" price="$10.89" />
        <DyCard img={KitchenGlove} name="Kitchen Glove" price="" />
        <DyCard img={FoamMaker} name="Foam Maker Rapid Foaming" price="$5.89" />
        <DyCard img={BestGlass} name="Best wine glass" price="$5.89" />
        <DyCard img={ScrubbingBrush} name="Scrubbing brush" price="$5.89" />
        <DyCard img={CuteVase} name="Mini Cute Vase" price="$12.89" />
        <DyCard img={MattBlack} name="Matt Black" price="$15.89" />
      </div>
    </article>
  );
};

export default Deal;
