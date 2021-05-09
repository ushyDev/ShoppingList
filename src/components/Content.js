import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export function Content({children}) {
  return (
    <View style={styles.contener}>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
    contener: {
        width: windowWidth,
        height:windowHeight  
    }
});