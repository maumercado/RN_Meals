import { useContext } from "react"

import { MEALS } from "../data/dummy-data"

import MealsList from "../components/MealsList/MealsList"
import { FavouritesContext } from "../store/context/favourites-context"

function FavouritesScreen () {
  const favouritesMealsCtx = useContext(FavouritesContext)
  const favouriteMeals = MEALS.filter(meal => favouritesMealsCtx.ids.some(id => id === meal.id))

  return (
    <MealsList
      items={favouriteMeals}
    />
  )
}

export default FavouritesScreen
