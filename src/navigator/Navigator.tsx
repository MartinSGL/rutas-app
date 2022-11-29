import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PermissionsScreen from '../screen/PermissionsScreen'
import MapSreen from '../screen/MapSreen'
import { PermissionsContext } from '../context/PermissionsContext';
import LoadingScreen from '../screen/LoadingScreen';

const Stack = createStackNavigator()

const Navigator = () => {

  const { permissions:{locationStatus} } = useContext(PermissionsContext)

  if(locationStatus==='unavailable'){
     return <LoadingScreen/>
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:'white'
        }
      }}
    >
      {
        (locationStatus==='granted')
        ? <Stack.Screen name="MapSreen" component={MapSreen} />
        : <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
      } 
    </Stack.Navigator>
  )
}

export default Navigator