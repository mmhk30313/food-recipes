import React from 'react';
import './First.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faNewspaper, faFolderOpen, faSearchLocation } from '@fortawesome/free-solid-svg-icons';
const First = (props) => {
    const data = props.data.meals;
    if(data === undefined){
        return "";
    }
    let recipes = data.filter(recipe => recipe.strCategory !== 'Pork').slice(0, 20);
    
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    // console.log(recipes);
    shuffle(recipes);
    return (
        <div className="row d-flex justify-content-center  meal-component">
            {
                recipes.map((recipe,idx) => {
                        const price = Math.random()*(idx+1)*7;
                        recipe["price"] = price;
                        return <div key={idx} className="meal bg-light">
                            <img src={recipe.strMealThumb}  alt=""/>
                            <h6 className="text text-danger">{recipe.strArea} - {recipe.strMeal}</h6>
                            <p><small>{recipe.strInstructions.substr(0,100)+"..."+recipe.strInstructions.substr((recipe.strInstructions.length -95), recipe.strInstructions.length)}</small></p>
                            <div className="bg-secondary price">
                            <h4><span className="span">${(recipe.price).toFixed(2)}</span></h4>
                            </div>
                            <a href={recipe.strSource} target={`${"_blank"}`} className="detail-link"><FontAwesomeIcon icon={faSearchLocation}></FontAwesomeIcon> TO KNOW DETAILS</a>
                        </div>
                    }
                )
            }
        </div>
    );
};

export default First;