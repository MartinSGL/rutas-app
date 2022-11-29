import React from 'react'
import 'react-native-gesture-handler'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Navigator from './src/navigator/Navigator'
import { PermissionsProvider } from './src/context/PermissionsContext'
import Splash from './src/components/Splash'

const AppState = ({children}:any) =>{
  return(
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )
}

const App = () => {
  return (
      <NavigationContainer>
        <AppState>
          <Navigator/>
          <Splash />
        </AppState>
      </NavigationContainer>
  )
}

export default App
