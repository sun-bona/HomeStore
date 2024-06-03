import "./CardShops.css";
import { isData } from "../data/data";
import { useRef, useState } from "react";

const CardShops = () => {
  const itemRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - -itemRef.current.offsetLeft);
    setScrollLeft(itemRef.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };
  const handleMouseUp = () => {
    setIsMouseDown(false);
  };
  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - itemRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; //adjust the speed
    itemRef.current.scrollLeft = scrollLeft - walk;
  };
  return (
    <div
      className="block_card"
      ref={itemRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {isData.map(({ id, img, title, detial, price }) => (
        <div key={id} className="card_box">
          <div className="card_imag">
            <img src={img} alt="product picture" />
          </div>
          <div className="card_text">
            <h4>{title}</h4>
            <p>{detial}</p>
            <span>{price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardShops;
