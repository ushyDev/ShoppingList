import React, { Component } from 'react';
import firestore from '@react-native-firebase/firestore'

import { ActivityIndicator } from 'react-native';
import {ListComponent, Content, HeaderCurrentList } from 'components'
import { Colors } from 'styles'

const dataRef = firestore().collection('lists')



export class ArchivedList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentListData: [],
        loaded: false
    };
  }

  componentDidMount(){   
    dataRef.where("active", "==", false)
    .orderBy('createdAt')
    .onSnapshot(
        querySnapshot => {
          const newEntities = []
          querySnapshot.forEach(docs => {
              const entity = docs.data()
              entity.id = docs.id
              newEntities.push(entity)
          });
          this.setState({currentListData: newEntities})
          this.setState({loaded: true})
      },
      error => {
          console.log(error)
      }   
    )  
  }


  render() {
    return (
        <Content>
          <HeaderCurrentList 
          title='Arhived Lists'
          />
          {this.state.loaded ? 
            <ListComponent data={this.state.currentListData} />
          :
          <ActivityIndicator style={{marginTop: 20}} size='large' color={Colors.basic.primary} />
          }
        </Content>
    );
  }
}
