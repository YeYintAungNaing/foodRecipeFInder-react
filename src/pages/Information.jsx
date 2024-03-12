import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/global-state'
import { NavItem } from 'react-bootstrap'


function Information() {
  const {id} = useParams()
  const {recipeDetails, setRecipeDetails, favList, setFavList} = useContext(GlobalContext)

  function addToFav(){
      const fav = {title : recipeDetails.title, 
                  id : recipeDetails.id}

      const isDuplicate = favList.some((item) => (     //some() method iterates through the array and returns true if any element matches the condition
            item.title === fav.title && item.id === fav.id
            ));
      
      if (!isDuplicate){
        setFavList([...favList, fav])
      }
  }

  useEffect(()=> {
    
    async function  getRecipeDetails(){
      const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`)
      const fetchedData = await response.json();
      //console.log(fetchedData.data.recipe.ingredients)
      //console.log(fetchedData.data)

      if (fetchedData?.data){
        setRecipeDetails(fetchedData.data.recipe);
      }
    }
    getRecipeDetails();
  }, [])

  //console.log(recipeDetails)
  //console.log(recipeDetails.ingredients)    a list of objects


  return (
    <>
      {recipeDetails && (
        <div>
          <h1>{recipeDetails.title}</h1>
          <img src={recipeDetails.image_url} alt='haha'></img>
          <br></br>
          <button onClick={addToFav}> add to favourites</button>
          <p>{`cooking time: ${recipeDetails.cooking_time} minutes`}</p>

          {recipeDetails.ingredients.map((ingredient, index)=>(
            <ul key={index}>
              <li>{`${ingredient.quantity} ${ingredient.unit} of ${ingredient.description}`}</li>
            </ul>
          ))}
        </div>
      )}
    </>
  )
}

export default Information