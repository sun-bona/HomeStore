import { isDatas } from "../data/data";
import "./CardShopTwo.css";
import { useRef, useState } from "react";
const CardShopTwo = () => {
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
      className="block"
      ref={itemRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {isDatas.map((ds) => (
        <div key={ds.id} className="box">
          <div className="pic">
            <img src={ds.image} alt={ds.name} />
          </div>
          <div className="text">
            <h3>{ds.name}</h3>
            <p>{ds.detail}</p>
            <h4>
              {ds.price} <sup>99</sup>
              <span>
                List: <s>{ds.list} </s>
              </span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardShopTwo;
