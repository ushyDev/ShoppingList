import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from 'styles'
import { Icon } from 'native-base'
import NavigationService from '../services/Navigation'


export function HeaderCurrentList(props) {
  return (
    <View style={styles.header} >
        <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
            <View style={{width: 20}}></View>
            <Text style={styles.titleText}>{props.title}</Text>
            {props.iconShow ?
            <Icon 
            onPress={() => NavigationService.navigate('archived')} 
            active name='ios-checkbox' 
            style={{color: Colors.basic.white, zIndex: 1, }} />  
            :
            <View></View>   
            } 
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: Colors.basic.primary,
        height: 140,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'center',
        marginBottom: -20
    },
    iconWrite:{
        color: Colors.basic.white,    
    },
    titleText:{
        ...Typography.titleText,
        fontSize: 30
        
    }
});