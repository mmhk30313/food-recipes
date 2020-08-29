import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    // console.log(props.recipe);
    const recipe = props.recipe;
    const price = recipe.price;
    const img = recipe.strMealThumb;
    const name = recipe.strArea+' - '+recipe.strMeal;
    const handleRemoveCart = props.handleRemoveCart;
    return (
        <div>
            <div className="product">
                <p className="text text-warning">{name}</p>
                <img src={img} alt=""/>
                <p>price: ${price.toFixed(2)}</p>
                <button onClick={() => handleRemoveCart(recipe)} className="btn btn-danger"><FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;