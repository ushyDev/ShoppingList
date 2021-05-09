import React, { Component } from 'react';
import { KeyboardAvoidingView, Keyboard, ActivityIndicator } from 'react-native';
import { Colors } from 'styles'
import firestore from '@react-native-firebase/firestore'
import { ListDetailComponent, HeaderAddList, InputFloating, Content } from 'components'

import * as firebase from '../services/firebase'

const dataRef = firestore().collection('lists')



export class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list: [],
        newItem: '',
        titleChange: this.props.titleList,
        loaded: false
    };
  }

  componentDidMount(){   
    dataRef
    .doc(this.props.listID).collection('items')
        .where("active", "==", true)
          .orderBy('createdAt')
            .onSnapshot(
                querySnapshot => {
                    const newEntities = []
                    querySnapshot.forEach(docs => {
                        const entity = docs.data()
                        entity.id = docs.id
                        newEntities.push(entity)
                    });
                    this.setState({list: newEntities})
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
            <KeyboardAvoidingView behavior='height' style={{flex: 1}}>

                <HeaderAddList 
                defaultValue={this.state.titleChange}
                onChangeText={(text) => this.setState({titleChange: text})}
                onChange={firebase.changeTitle(this.props.listID, this.state.titleChange)}
                placeholder={'Add list name'}
                />

                {this.state.loaded ? 
                <ListDetailComponent 
                data={this.state.list}
                />
                : 
                <ActivityIndicator style={{marginTop: 20}} size='large' color={Colors.basic.primary} />
                }

                <InputFloating 
                defaultValue={this.state.newItem}
                onChangeText={(text) => this.setState({newItem: text})}
                onPress={() =>{
                    firebase.addNewItem(this.props.listID, this.state.newItem)
                    this.setState({newItem: ''})
                    Keyboard.dismiss()
                }}
                />

            </KeyboardAvoidingView>
        </Content>
    );
  }
}

