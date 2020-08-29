import React from 'react';
import './Memo.css';
const Memo = (props) => {
    console.log(props.yourRecipes);
    const recipes = props.yourRecipes;
    const afterHandleMemo = props.afterHandleMemo;
    return (
        <div className="memo">
            <h1 className="text text-success text-center">WELCOME TO PAY YOUR BILL</h1>
            <div className="cash-intro">
                <h5>Your Food:</h5>
                <h5>Price:</h5>
            </div>
            {
                recipes.map(recipe => <div key={recipe.idMeal} className="cash">
                    <p>{recipe.strArea} - {recipe.strMeal}</p>
                    <p>${recipe.price.toFixed(2)}</p>
                </div>)
            }
            <hr/><hr/>
            <div className="cash-intro">
                <h3>Total Price:</h3>
                <h3>${recipes.reduce((a,c) => { return a+c.price},0).toFixed(2)}</h3>
            </div>
            <button onClick={() => afterHandleMemo(true)} className="btn btn-warning">OKEY</button>
        </div>
    );
};

export default Memo;