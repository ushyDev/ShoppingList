import React from 'react';
import { FlatList } from 'react-native';
import RenderDetailComponent from './RenderDetailComponent'

export function ListDetailComponent(props) {
  return (
    <FlatList 
    data={props.data}
    renderItem={RenderDetailComponent}
    style={{marginTop: -30, }}
    contentContainerStyle={{paddingBottom: 140}}
    keyExtractor={item => item.id}
    />
  );
}
