import React, { useState } from 'react'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { Modal, Platform, StyleSheet, View } from 'react-native'

import { Feed } from './src/screens/Feed';
import { Comments } from './src/screens/Comments';

const items = [
  {id: 0, author: 'Bob Ross'},
  {id: 1, author: 'Chuck Norris'},
];

const platformVersion =
  Platform.OS === 'ios'
    ? parseInt(Platform.Version, 10)
    : Platform.Version;

const initialState = {
  commentsForItem: [],
  showModal: false,
  selectedItemId: null,
}

const App = () => {

  const [state, setState] = useState(initialState)
  const { commentsForItem, selectedItemId, showModal } = state;

  const openCommentScreen = (id: any) => {
    setState({
      ...state,
      showModal: true,
      selectedItemId: id,
    })
  }

  const closeCommentScreen = () => {
    setState({
      ...state,
      showModal: false,
      selectedItemId: null,
    })
  }

  return (
    <View style={styles.container}>
      <Feed
        commentsForItem={commentsForItem}
        onPressComments={openCommentScreen}
        style={styles.feed}
      />
      <Modal
        visible={showModal}
        animationType='slide'
        onRequestClose={closeCommentScreen}
      >
        <Comments
          style={styles.container}
          comments={commentsForItem[selectedItemId] || []}
          onClose={closeCommentScreen}
          onSubmitComment={() => console.log('onSubmitComment pressed!')}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed: {
    flex: 1,
    marginTop:
      Platform.OS === 'android' || platformVersion < 11
        ? getStatusBarHeight(true)
        : 0,
  },
  comments: {
    flex: 1,
    marginTop:
      Platform.OS === 'ios' && platformVersion < 11
        ? getStatusBarHeight(true)
        : 0,
  },
});

export default App
