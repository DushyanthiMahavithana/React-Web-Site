import React from 'react'

function RecipesItem({image,name,price}) {
  return (
    <div className='recipesItem'>
        <div style={{backgroundImage: `url(${image})`}}>

        </div>
        <h1 className='name'>
            {name}
        </h1>
        <p className='price'>
            {price}
        </p>
      
    </div>
  );
}

export default RecipesItem;
