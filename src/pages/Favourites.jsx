import React, { useContext } from 'react'
import { GlobalContext } from '../context/global-state'
import { Link } from 'react-router-dom'

function Favourites() {
  const {favList, setFavList} = useContext(GlobalContext)

  function removeFromFav(itemID){    //fav item has title and id as key
      let updatedList = favList.slice()
      //console.log(itemID)
      updatedList = updatedList.filter((item)=> item.id !== itemID);
      setFavList(updatedList)
      //setFavList((favList) => favList.filter((item)=> item.id !== itemID))    //the first favList acts as a parameter  
  }

  return (
    <div>
      {favList.length > 0 && (
        favList.map((item) =>
        <li key={item.id}>
          <Link
            to={`/recipe-item/${item.id}`}>
            {item.title}
          </Link>
          <button onClick={()=>removeFromFav(item.id)}>remove</button> 
        </li>)
        )}
    </div>
  )
}

export default Favourites
