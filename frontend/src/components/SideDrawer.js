import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './SideDrawer.css'

const SideDrawer = ({ show,click }) => {
    const sideFrawerClass = ['sidedrawer'];
    if (show) {
        sideFrawerClass.push('show');
    }
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
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
                    </li>
                    <li>
                        <Link to="/">Shop</Link>
                    </li>
              

            </ul>
        </div>
    );
}

export default SideDrawer;
