import React, { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext(null);

function GlobalState({children}) {
    
    const [searchKey, setSearchKey] = useState("");    //user input search
    const [loading, setLoading] = useState('false');
    const [recipeList, setRecipeList] = useState([])   //list of recipes
    const [recipeDetails, setRecipeDetails] = useState(null)
    const [favList, setFavList] = useState([])


    async function handleSubmit(event){   // submit on search bar 
        event.preventDefault()
        //console.log('submitted')

        try{
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchKey}`)
            const fetchedData =  await response.json()
            //console.log(fetchedData)

            if (fetchedData?.data?.recipes){
               setRecipeList(fetchedData?.data?.recipes)
               setLoading(false)
               setSearchKey("")
            }
            else{
                throw new Error(); 
            }  
        }
        catch(error){
            console.log("my error")
        }
    }

    //console.log(recipeList)   


    return (
        <GlobalContext.Provider 
        value={{
            searchKey, 
            setSearchKey, 
            handleSubmit, 
            loading, 
            recipeList,
            recipeDetails, 
            setRecipeDetails,
            favList,
            setFavList
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState