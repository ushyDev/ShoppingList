import React from 'react';
import { View, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import { Colors } from 'styles'
import { Icon } from 'native-base' 

const windowWidth = Dimensions.get('window').width;

export  function InputFloating(props) {
  return (
    <View style={styles.contener}>

        <TextInput 
        style={styles.input} 
        placeholder='Add new item'
        placeholderTextColor={Colors.basic.white}
        onChangeText={props.onChangeText}
        defaultValue={props.defaultValue}
        autoCorrect={false}
        autoCapitalize='none'
        />
        <TouchableOpacity onPress={props.onPress} style={styles.addIcon}>
            <Icon style={styles.icon}  name='ios-add-circle' /> 
        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    contener: {
        width: windowWidth,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute' ,
        bottom: 80,

    },
    input:{
        width: '78%',
        height: 50,
        backgroundColor: Colors.basic.primary,
        alignSelf: 'center',
        paddingHorizontal: 14,
        color: Colors.basic.white,
        fontFamily: 'Roboto',
        fontSize: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        borderRadius: 24

    },
    addIcon:{

    },
    icon:{
        color: Colors.basic.primary,   
        fontSize: 50
    }
});