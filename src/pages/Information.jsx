import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../context/global-state'

function Information() {
  const {id} = useParams()
  const {recipeDetails, setRecipeDetails} = useContext(GlobalContext)

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
  //console.log(recipeDetails.ingredients)   this is a list of objects


  return (
    <>
      {recipeDetails && (
        <div>
          <h1>{recipeDetails.title}</h1>
          <img src={recipeDetails.image_url} alt='haha'></img>
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