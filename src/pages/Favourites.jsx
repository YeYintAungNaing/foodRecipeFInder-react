import React, { useContext } from 'react'
import { useState } from 'react'
import { GlobalContext } from '../context/global-state'
import { Link } from 'react-router-dom'

function Favourites() {
  const {favList, setFavList} = useContext(GlobalContext)

  return (
    <div>
      {favList.length > 0 && (
        favList.map((item) =>
        <li key={item.id}>
          <Link
            to={`/recipe-item/${item.id}`}>
            {item.title}
          </Link> 
        </li>)
        )}
    </div>
  )
}

export default Favourites
