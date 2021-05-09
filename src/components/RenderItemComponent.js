import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Typography, Colors } from 'styles'
import NavigationService from '../services/Navigation'
import { Icon } from 'native-base'
import * as firebase from '../services/firebase'

function RenderItemComponent({item}) {
  return (
    <TouchableOpacity
     activeOpacity={1}
     onPress={() => NavigationService.navigate('add',{listID: item.id, titleList: item.title})}
     style={[styles.contener, {backgroundColor: Colors.basic.white}]}>

        <View style={{flexDirection: 'column', minWidth: '60%'}}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.dataText}>{item.createdAt.toDate().toLocaleDateString()}</Text>
        </View>
        
        <Text style={styles.numberText}>{item.done}/{item.all}</Text>
        
        <Icon 
        onPress={() => firebase.deleteList(item)} 
        active 
        name='ios-trash' 
        style={styles.icon} />  

    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
    contener:{
        width: '95%',
        height: 100,
        marginBottom: 18,
        borderRadius: 24,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
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
        ...Typography.bigText,
        color: Colors.basic.primary
    },
    dataText:{
        ...Typography.smallGrayText,
        color: Colors.basic.primary

    },
    numberText:{
        ...Typography.smallText,
        color: Colors.basic.primary

    },
    icon:{
        color: Colors.basic.primary, 
        
    }
});

export default RenderItemComponent;