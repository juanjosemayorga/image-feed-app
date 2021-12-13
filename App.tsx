import React, { useEffect, useState } from 'react'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { Modal, Platform, StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Feed } from './src/screens/Feed';
import { Comments } from './src/screens/Comments';

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';

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

  useEffect(() => {
    getComments()
  }, [])

  const getComments = async() => {
    try {
      const commentsForItem = await AsyncStorage.getItem(
        ASYNC_STORAGE_COMMENTS_KEY,
      )

      setState({
        ...state,
        commentsForItem: commentsForItem
          ? JSON.parse(commentsForItem)
          : {}
      })
    } catch (error) {
      console.log('Failed to load comments')
    }
  }

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

  const onSubmitComment = async(text:string) => {
    const comments = commentsForItem[selectedItemId!] || [];

    const updated = {
      ...commentsForItem,
      [selectedItemId]: [...comments, text],
    }

    setState({
      ...state,
      commentsForItem: updated,
    })

    try {
      await AsyncStorage.setItem(
        ASYNC_STORAGE_COMMENTS_KEY,
        JSON.stringify(updated),
      )
    } catch (error) {
      console.log('Failed to save comment',
      text,
      'for',
      selectedItemId
      )
    }
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
        comments={commentsForItem[selectedItemId!] || []}
        onClose={closeCommentScreen}
        onSubmitComment={onSubmitComment}
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
