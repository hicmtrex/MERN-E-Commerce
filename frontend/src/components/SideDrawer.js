import { useSelector } from 'react-redux';
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import './SideDrawer.css'

const SideDrawer = ({ show,click }) => {
    const sideFrawerClass = ['sidedrawer'];
    if (show) {
        sideFrawerClass.push('show');
    }
    const [error, setError] = useState("")
    const { currentUser, logout } = useAuth();
    const history = useHistory()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  }
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
        <div className={sideFrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={click}>
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart <span className="sidedrawer__cart">
                                {getCartCount()}</span>
                        </span>
            </Link>
            {error && alert(error)}
                    </li>
                    <li>
                        <a href="/">Shop</a>
                </li>
                <li>  
         {!currentUser ? <Link to="/login">Login</Link> : 
       <Link to="#">{currentUser.email}</Link>  }
        </li>

        <li>  
          {!currentUser ? <Link to="/register">Singup</Link> :
            <Link to="#" onClick={handleLogout}>Logout</Link>
         }
        </li>
              

            </ul>
        </div>
    );
}

export default SideDrawer;
