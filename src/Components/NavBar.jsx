import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./NavBar.css";
import { Search, ShoppingBasket, User, X } from "lucide-react";
import { allData } from "../data/data";
import { useState } from "react";
const NavBar = () => {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filterSearch = allData.filter((f) => {
    return search.toLowerCase() === ""
      ? ""
      : f.name.toLowerCase().includes(search);
  });

  const links = [
    {
      path: "categories",
      label: "Categories",
    },
    {
      path: "deals",
      label: "Deals",
    },
    {
      path: "what",
      label: "What's",
    },
  ];

  console.log(open);
  return (
    <>
      <nav className="nav-bar" data-aos="fade-down" data-aos-duration="1000">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>

        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.path} className="nav-link">
              <Link to={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <form className="nav-search">
          <input
            type="text"
            placeholder="Search Products"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setOpen(true);
            }}
          />
          {open ? (
            <X
              strokeWidth={1.25}
              onClick={() => {
                setSearch("");
                setOpen(false);
              }}
              className="search-icon x"
            />
          ) : (
            <Search strokeWidth={1.25} className="search-icon x1" />
          )}
        </form>

        <div className="account">
          <User strokeWidth={1.25} />
          <p id="acc">
            <Link to="/login">Account</Link>
          </p>
          <ShoppingBasket strokeWidth={1.25} />
          <p>Cart</p>
        </div>
        {/* for search result  */}
        <div className="result_search ">
          <table>
            <tbody>
              {filterSearch.map(({ id, name }) => (
                <tr
                  key={id}
                  onClick={() => {
                    setSearch("");
                    setOpen(false);
                    alert("You click on : " + name);
                  }}
                >
                  <td>{id}</td>
                  <td>{name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
