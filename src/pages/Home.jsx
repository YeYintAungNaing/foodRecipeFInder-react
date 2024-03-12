import React, { useContext } from 'react'
import { GlobalContext } from '../context/global-state'
import altImg from '../images/no_img.png'
import { Link } from 'react-router-dom'

function Home() {

  const {searchKey, setSearchKey, handleSubmit, recipeList}  = useContext(GlobalContext)
  
  return (
    <>
    <div className='home-container'>
      <h1> Search your desired recipe</h1>
      <form onSubmit={handleSubmit}>
        <input 
          className='search'
          type="text"
          placeholder='Search'
          value={searchKey}
          onChange={(event) => setSearchKey(event.target.value)}
        ></input>
      </form>
    </div>
    
    {recipeList.length !== 0 && (
      recipeList.map((element)=>
        <div key={element.id}>
          <h2>{element.title}</h2>
          <img src={element.image_url} alt={altImg}></img>
          <Link
            to={`/recipe-item/${element.id}`}>
            Recipe Details
          </Link>  
        </div>
      ))}
    </>
  )
}

export default Home