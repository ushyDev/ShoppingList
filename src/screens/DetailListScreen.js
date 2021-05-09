import React from 'react';
import { AddList } from 'containers'
import { Screen } from 'components'

export default function DetailListScreen({navigation}) {
  return (
    <Screen>
        <AddList 
        listID={navigation.getParam('listID')}
        titleList={navigation.getParam('titleList')}
        />
    </Screen>
  );
}
