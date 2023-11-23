import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { MEALS } from '../data/dummy-data'

import MealsList from '../components/MealsList/MealsList'
import { FavouritesContext } from '../store/context/favourites-context'

function FavouritesScreen () {
  const favouritesMealsCtx = useContext(FavouritesContext)
  const favouriteMeals = MEALS.filter(meal => favouritesMealsCtx.ids.some(id => id === meal.id))

  if (!favouriteMeals.length) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No favourite meals found!</Text>
      </View>
    )
  }

  return (
    <MealsList
      items={favouriteMeals}
    />
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18
  }
})

export default FavouritesScreen
