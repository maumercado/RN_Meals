import 'react-native-gesture-handler'

import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailsScreen from './screens/MealDetailsScreen'
import FavouritesScreen from './screens/FavouritesScreen'

import FavouritesContextProvider from './store/context/favourites-context'

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
        },
        drawerContentStyle: {
          backgroundColor: '#2b1e13'
        },
        drawerActiveTintColor: '#3f2f25',
        drawerActiveBackgroundColor: '#e4baa1',
        drawerInactiveTintColor: 'white'
      }}
    >
      <Drawer.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name='list'
              size={size}
              color={color}
            />
          )
        }}
      />
      <Drawer.Screen
        name='Favourites'
        component={FavouritesScreen}
        options={{
          title: 'Favourites',
          drawerIcon: ({ size, color }) => (
            <Ionicons
              name='star'
              size={size}
              color={color}
            />
          )
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App () {
  return (
    <>
      <StatusBar style='light' />
      <FavouritesContextProvider>
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
              options={{
                title: 'Meal Details'
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  )
}
