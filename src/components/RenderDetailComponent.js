import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography, Colors } from 'styles'
import { CheckBox, Radio, Icon } from 'native-base'
import * as firebase from '../services/firebase'

function RenderDetailComponent({item}) {
  return (
    <View style={[styles.contener, {backgroundColor: Colors.basic.white}]}>
        <View style={{flexDirection: 'row'}}>
        <CheckBox onPress={() => firebase.changeToDo(item.listID, item.id)} style={{marginRight: 18}} checked={item.done} color={Colors.basic.primary} />
        <Text style={styles.titleText}>{item.item}</Text>
        </View>
        <Icon 
        onPress={() => firebase.deleteItem(item)} 
        active name='ios-trash' style={{color: Colors.basic.primary, zIndex: 1}} />               

    </View>
  );
}

const styles = StyleSheet.create({
    contener:{
        width: '95%',
        height: 60,
        marginBottom: 18,
        borderRadius: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    },
    titleText:{
        ...Typography.smallText,
        color: Colors.basic.black
    },
    dataText:{
        ...Typography.smallGrayText
    },
    numberText:{
        ...Typography.smallText
    }
});

export default RenderDetailComponent;