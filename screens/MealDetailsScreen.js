import { useContext, useLayoutEffect } from 'react'
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native'

import { MEALS } from '../data/dummy-data'

import { FavouritesContext } from '../store/context/favourites-context';

import MealDetails from '../components/MealDetails'
import Subtitle from '../components/MealDetail/Subtitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'



function MealDetailsScreen ({ route, navigation }) {
  const favouritesMealsCtx = useContext(FavouritesContext)
  const { mealId } = route.params
  const selectedMeal = MEALS.find(meal => meal.id === mealId)
  const mealIsFavourite = favouritesMealsCtx.ids.some(meal => meal === route.params.mealId)


  function changeFavouriteStatusHandler () {
    if (mealIsFavourite) {
      favouritesMealsCtx.removeFromFavourites(selectedMeal.id)
    } else {
      favouritesMealsCtx.addToFavourites(selectedMeal.id)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? 'star' : 'star-outline'}
            color="white"
            onPress={changeFavouriteStatusHandler}
          />
        )
      }
    })
  }, [navigation, changeFavouriteStatusHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  detailText: {
    color: 'white'
  },
  listContainer: {
    width: '80%'
  },
  listOuterContainer: {
    alignItems: 'center'
  }
})

export default MealDetailsScreen
