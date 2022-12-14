import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
import {useStateValue} from "./Stateprovider";







function Header() {
  const [{basket},dispatch] = useStateValue();
  return (
    <div className='header'>
    <Link to ="/">
    <img
    className="header__logo"
    src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"       
    alt="amazon logo"

    />

    </Link>

    <div className="header__search">
        <input
            className='header__searchInput'
            type = 'text'
            
        />
        <SearchIcon className='header__searchIcon'/>
        {/* logo */}
    </div>

    <div className="header__nav">

    <div className='header__option'>
    <Link to ="/login">
    <span className='header__optionLineOne'>Hello</span>

    <span className='header__optionLineTwo'>Sign In</span> 
    </Link>
    </div>

    <div className='header__option'>

    

    <span className='header__optionLineOneDisable'>Returns</span>

    <span className='header__optionLineTwoDisable'>& Orders</span> 

    </div>

    <div className='header__option'>
    
    <span className='header__optionLineOneDisable'>Your</span>

    <span className='header__optionLineTwoDisable'>Prime</span> 

    </div>
    <Link to ="/checkout">
    <div className='header__optionBasket'>

    <ShoppingBasketIcon />  

    <span className = "header__optionLineTwo   header__BasketCount">{basket.length}</span>
    </div>

    </Link>

    </div>
    
    </div>
    

  )
}

export default Header
