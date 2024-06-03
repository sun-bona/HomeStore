
import { Link } from "react-router-dom";
import ErrorPgae from "../assets/error.png";

const Error = () => {
  return (
    <div className="error-page">
      <h2><Link to="/">Back</Link> </h2>
      <img src={ErrorPgae} alt="not fount" />
    </div>
  );
};

export default Error;
