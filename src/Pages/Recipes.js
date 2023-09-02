import React from 'react';
import {RecipesList} from '../Helpers/RecipesList';
import RecipesItem from '../Components/RecipesItem';
import '../Styles/Recipes.css';

function Recipes() {
  return (
    <div className='menu_recipes'>
      <h1 className='title_menu'>Our Recipes</h1>
      <div className='list_recipes'>
        {RecipesList.map((recipesItems, key)=>{
        return ( 
        <RecipesItem 
        key={key}
        image={recipesItems.image} 
        name={recipesItems.name} 
        price={recipesItems.price}>
        </RecipesItem>
        );
      })}</div>
      
    </div>
  );
}

export default Recipes
