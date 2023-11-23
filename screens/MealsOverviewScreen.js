import { useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'

import MealsList from '../components/MealsList/MealsList'


function MealsOverviewScreen ({ route, navigation }) {
  const { categoryId } = route.params
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId))

  useLayoutEffect(() => {
    const selectedCategoryTitle = CATEGORIES.find(category => category.id === categoryId).title

    navigation.setOptions({
      title: selectedCategoryTitle
    })
  }, [categoryId, navigation])

  return (
    <MealsList
      items={displayedMeals}
    />
  )

}

export default MealsOverviewScreen
