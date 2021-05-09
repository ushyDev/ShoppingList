import React from 'react';
import { Input } from 'native-base';
import { StyleSheet } from 'react-native'
import { Colors, Typography } from 'styles'

export default function InputTitle(props) {
  return (
    <Input 
        style={styles.input}
        placeholderTextColor={Colors.basic.white}
        placeholder={props.placeholder}
        onKeyPress={props.onKeyPress}
        defaultValue={props.defaultValue}
        onChangeText={props.onChangeText}
    />  
  );
}

const styles = StyleSheet.create({
    input:{
        color: Colors.basic.white,
        ...Typography.bigText,
        fontSize: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },
});