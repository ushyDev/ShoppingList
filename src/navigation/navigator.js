import React from 'react'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import DetailListScreen from '../screens/DetailListScreen';
import ArchivedListScreen from '../screens/ArchivedListScreen';
import CurrentListScreen from '../screens/CurrentListScreen';

import { Colors } from 'styles'
import { TouchableOpacity, Platform } from 'react-native'
import { Icon } from 'native-base'

const MainNavigator = createStackNavigator({
    current: {
        screen: CurrentListScreen,
    },
    add: {
        screen: DetailListScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: Platform.OS === 'android' ? null : () => (
                <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    width: 48, 
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 24,
                    marginTop: 41,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
    
                    elevation: 8,
                }} 
                onPress={() => navigation.goBack()}>
                    <Icon active name='md-arrow-back' style={{color: Colors.basic.primary}} />               
                </TouchableOpacity>
              ),
        })
    },
    archived: {
        screen: ArchivedListScreen,
        navigationOptions: ({navigation}) => ({
            headerLeft: Platform.OS === 'android' ? null : () => (
                <TouchableOpacity 
                style={{
                    backgroundColor: 'white', 
                    width: 48, 
                    height: 48,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10,
                    marginLeft: 24,
                    marginTop: 41,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 4,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 4.65,
    
                    elevation: 8,
                }} 
                onPress={() => navigation.goBack()}>
                    <Icon active name='md-arrow-back' style={{color: Colors.basic.primary}} />               
                </TouchableOpacity>
              ),
        })
    },
    },{
        defaultNavigationOptions : ({}) => ({
            headerStyle: {
                backgroundColor: Colors.basic.primary,
                shadowRadius: 0,
                shadowOffset: {
                    height: 0
                },
                height:  Platform.OS === 'ios' ? 20 : 0
            },
            headerTitle: () => null,
        }),
        mode: 'card',
        initialRouteName: 'current' ,
        })
    
    

    export default createAppContainer(MainNavigator)

