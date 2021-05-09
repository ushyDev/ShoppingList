import firestore from '@react-native-firebase/firestore'
import { Toast } from 'native-base'

const dataRef = firestore().collection('lists')

export const addNewItem = (list, item) => {

    const today = new Date()

    dataRef
        .doc(list).collection('items')
            .doc(dataRef.doc(list).collection('items').doc().id)
                .set({
                    active: true,
                    item: item,
                    done: false,
                    listID: list,
                    createdAt: today
                })
    dataRef
     .doc(list)
        .update({
            all: firestore.FieldValue.increment(1),
            
        })
}

export const changeTitle = async (list, title) => {

    dataRef.doc(list).update({
        title:title
    })

}

const changeActive = (list) => {
    dataRef
        .doc(list).update({
                active: false
            })
}

export const changeToDo = (list,item) => {
    dataRef
        .doc(list).collection('items')
            .doc(item).update({
                done: true
            })
    
    dataRef
        .doc(list)
            .update({
                done: firestore.FieldValue.increment(1),  
               })

    dataRef
        .doc(list)
            .onSnapshot((doc) => {
            if(doc.data().all === doc.data().done){
                changeActive(list)
                Toast.show({
                    text: 'List done',
                    type: 'success'
                })
            }
             });
}

export const newList = () => {
    const newListID = dataRef.doc().id
    const today = new Date()

    dataRef
        .doc(newListID)
        .set({
            title: 'Add list name',
            active: true,
            all: 0,
            done: 0,
            createdAt: today
        })
}

export const deleteList = (list) => {
    dataRef.doc(list.id).delete().then(() => {
        Toast.show({
            text: list.title + ' deleted',
            type: 'success'
        })
    })
}

export const deleteItem = (item) => {
    dataRef
        .doc(item.listID)
        .collection('items')
        .doc(item.id)
        .delete().then(() => {
        Toast.show({
            text: item.item + ' deleted',
            type: 'success'
        })
    })
}