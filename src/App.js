import React, {useEffect} from 'react';
import {LogBox} from 'react-native'
import MainNavigator from './navigation/navigator'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'
import NavigationService from './services/Navigation'
import { Root } from 'native-base'



function App() {
    
    useEffect(() => {
        SplashScreen.hide();
        // LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
      }, []);
    

    return(
      <Root>
        <SafeAreaProvider>
        <MainNavigator 
        ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        </SafeAreaProvider>
      </Root>
    )
}

export default App;