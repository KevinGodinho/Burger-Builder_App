import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.css';

const burger = props => {
    // keys transforms an object to an array
    let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredients key={igKey + i} type={igKey} />
        });
    })
        // reduce is attached to the parenthesis above. it has arr as the previous value and el as the current value
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.Burger}>
          <BurgerIngredients type="bread-top" />
          {transformedIngredients}
          <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default burger;