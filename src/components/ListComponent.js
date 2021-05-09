import React from 'react';
import { FlatList } from 'react-native';
import RenderItemComponent from './RenderItemComponent'

export function ListComponent(props) {
  return (
    <FlatList 
    data={props.data}
    renderItem={RenderItemComponent}
    contentContainerStyle={{paddingBottom: 140}}
    keyExtractor={item => item.id}
    />
  );
}
