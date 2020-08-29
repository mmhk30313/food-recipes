import React, { useState } from 'react';
import './Details.css';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMoneyCheck, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import MyCard from '../CARD/MyCard';
import Cart from '../Cart/Cart';
let prices = [];
const Details = (props) => {
    // console.log(props.data.meals);
    const recipes = props.data.meals.slice(0,20);
    const finalCartDetails = props.finalCartDetails;
    const [cartRecipes, setCartRecipes] = useState([]);
    const handleCard = (recipe,price) => {
        // recipe.push(price);
        // console.log((recipe));
        recipe["price"] = price;
        // console.log(recipe);
        const newCartRecipes = [...cartRecipes,recipe];
        let uniq = [];
        let uniqRecipes = [];
        
        for (let i = 0; i < newCartRecipes.length; i++) {
            if(uniq.indexOf(newCartRecipes[i].idMeal) === -1){
                uniq.push(newCartRecipes[i].idMeal);
                uniqRecipes.push(newCartRecipes[i]);
            }
        }
        //একবারের বেশি Food Order করলে...
        // setCartRecipes(newCartRecipes);
        //একবারের বেশি Food Order না করলে...
        setCartRecipes(uniqRecipes);
    }
    const handleRemoveCart = (recipe) => {
        console.log(recipe)
        console.log(cartRecipes);
        const newCartRecipes = cartRecipes.filter(r => (r.idMeal !== recipe.idMeal));
        console.log(newCartRecipes);
        setCartRecipes(newCartRecipes);
    }
    return (
        <div className="row justify-content-center">
            <div className="row col-md-10 recipes">
                {
                    recipes.map((recipe, idx) => { 
                            let price = idx*10;
                            price = price < 1 ? 2.55 : price*1.33;
                            prices.push(price);
                            return <MyCard handleCard={handleCard} key={idx} price={price} day={idx} data={recipe}></MyCard>
                        }
                    )
                }
            </div>
            <div className="col-md-2 my-cart">
                <h1 className="text text-light"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> <span  className="text text-warning">{cartRecipes.length} </span></h1>
                {
                    cartRecipes.map((recipe,idx) => {
                        return <Cart handleRemoveCart={handleRemoveCart} key={idx} recipe={recipe}></Cart>
                    })
                }
                {/* onno page details price dekhate ekhane onClick er connection Main er shathe dite hobe... */}
                <button onClick={() => finalCartDetails(cartRecipes)} className="btn btn-info"><FontAwesomeIcon icon={faMoneyBill}></FontAwesomeIcon> Pay Your Bill</button>
            </div>
        </div>
    );
};

export default Details;