import React from 'react';
import {Link} from 'react-router-dom'

const CartHeader  = ({item, total, symbol, removeFromCart}) => {
    return (
        <li >
            <div className="product-item">
                <a className="remove" href={null} onClick={ removeFromCart}>x</a>
                <Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}>
                    <img alt="" className="mr-3" src={`${item.images[0].gallery_thumbnail}`} />
                </Link>
                <div className="caption">
                    <Link to={`${process.env.PUBLIC_URL}/product/${item.id}`}><span className="title">{item.name}</span></Link>
                    <div className="cart-quantity">
                        <span>{item.qty} x {symbol} {item.price}</span>
                    </div>
                </div>
            </div>
            {/*<span>{cart}</span>*/}
        </li>
    )
}



export default CartHeader;
