import 'react-native-gesture-handler';

import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import FavouritesScreen from './screens/FavouritesScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator () {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#24180f'
        },
        headerTintColor: 'white',
        sceneContainerStyle: {
          backgroundColor: '#2b1e13'
        }
      }}
    >
      <Drawer.Screen name='Categories' component={CategoriesScreen} />
      <Drawer.Screen name='Favourites' component={FavouritesScreen} />
    </Drawer.Navigator>
  )
}

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#24180f'
            },
            headerTintColor: 'white',
            contentStyle: {
              backgroundColor: '#2b1e13'
            }
          }}
        >
          <Stack.Screen
            name='Drawer'
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name='MealsOverview'
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name='MealDetails'
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
