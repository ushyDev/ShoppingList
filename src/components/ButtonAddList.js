import React from 'react';
import { View, StyleSheet,   TouchableOpacity, Text, Platform} from 'react-native';
import { Colors, Typography} from 'styles'
import * as firebase from '../services/firebase'

export  function ButtonAddList(props) {
  return (
    <View style={styles.contener}>
        <TouchableOpacity onPress={ () => firebase.newList()} style={styles.addIcon}>
            <Text style={styles.buttonTitle}>Add new list</Text>
        </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
    contener: {
        width: '78%',
        height: 50,
        position: 'absolute' ,
        bottom: Platform.OS === 'ios' ? 60 : 20,
        backgroundColor: Colors.basic.primary,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        borderRadius: 24,
        paddingHorizontal: 14,

    },
    
    buttonTitle:{
        ...Typography.bigText
    },
   
});