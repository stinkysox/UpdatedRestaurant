import './index.css'
import {FaShoppingCart} from 'react-icons/fa'

const Header = () => (
  <div className="w-header">
    <h1 className="header-heading">UNI Resto Cafe Header</h1>
    <div className="header-cart-container">
      <div className="cart-container">
        <FaShoppingCart fontSize="28px" />
      </div>
      <div className="count-container">
        <p>0</p>
      </div>
    </div>
  </div>
)

export default Header
