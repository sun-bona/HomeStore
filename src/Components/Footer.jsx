import "./Footer.css";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer_block">
        <div className="footer_box first">
          <img src={footer} alt="" />
        </div>
        <div className="footer_box">
          <h2>Department</h2>
          <ul>
            <li>Kitchen Equipment </li>
            <li>Furniture</li>
            <li>Electronic cooking Machine</li>
            <li>Bathroom Equipment</li>
            <li>Cute PED light night</li>
            <li>Refrigerator </li>
            <li>Clock</li>
            <li>Picture Frame</li>
            <li>Fake Plant </li>
          </ul>
        </div>
        <div className="footer_box ">
          <h2>About Us</h2>
          <ul>
            <li>About Home Decor</li>
            <li>News & blogs</li>
            <li>Help</li>
            <li>Press Center</li>
            <li>Shop Location</li>
            <li>Ideas & Guide </li>
          </ul>
        </div>
        <div className="footer_box">
          <h2>Service</h2>
          <ul>
            <li>Gift Card</li>
            <li>Mobile App</li>
            <li>Shipping & Delivery</li>
            <li>Orders Pickup</li>
            <li>Account Signup</li>
            <li>Account Signup</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
