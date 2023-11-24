import { createContext, useState } from 'react'

export const FavouritesContext = createContext({
  ids: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {}
})

function FavouritesContextProvider ({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([])

  function addToFavourites (mealId) {
    setFavouriteMealIds((currentIds) => [...currentIds, mealId])
  }

  function removeFromFavourites (mealId) {
    setFavouriteMealIds((currentIds) => currentIds.filter((id) => id !== mealId))
  }

  const value = {
    ids: favouriteMealIds,
    addToFavourites,
    removeFromFavourites
  }

  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  )
}

export default FavouritesContextProvider
