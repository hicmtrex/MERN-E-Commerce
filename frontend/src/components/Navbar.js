import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth } from "../store/auth-context";
import "./Navbar.css";


const Navbar = ({ click }) => {

  const cart = useSelector((state) => state.cart);
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth();
  const history = useHistory()
   const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
        {error && alert(error)}
      </div>
      <ul className="navbar__links">
      <li>  
         {!currentUser ? <Link to="/login">Login</Link> : 
       <Link to="#">{currentUser.email}</Link>  }
        </li>

        <li>  
          {!currentUser ? <Link to="/register">Singup</Link> :
            <Link to="#" onClick={handleLogout}>Logout</Link>
         }
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>
      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;