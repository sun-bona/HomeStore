
import "./DyCard.css";

const DyCard = (prop) => {
  const { img, name, price } = prop;
  return (
    <div className="Dy_box">
      <img src={img} alt="" />
      <div className="Dy_box_text">
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    </div>
  );
};

export default DyCard;
