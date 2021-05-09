import React from 'react';
import { View, StyleSheet } from 'react-native';
import InputTitle from './InputTitle'
import {Colors} from 'styles'
import {Icon} from 'native-base'

export function HeaderAddList(props) {
  return (
    <View style={styles.header} >
        <View style={{flexDirection: 'row'}}>
            <InputTitle
            onKeyPress={props.onKeyPress}
            defaultValue={props.defaultValue}
            onChangeText={props.onChangeText}
            placeholder={props.placeholder}
            />               
            <Icon style={styles.iconWrite}  name='pencil' /> 
        </View> 
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: Colors.basic.primary,
        height: 230,
        alignItems: 'center',
        padding: 16,
        justifyContent: 'center'
    },
    iconWrite:{
        color: Colors.basic.white,    
    }
});