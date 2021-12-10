import React from 'react'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { Platform, StyleSheet, View } from 'react-native'
import { Card } from './src/components/Card';
import { CardList } from './src/components/CardList';
import { Feed } from './src/screens/Feed';

const items = [
  {id: 0, author: 'Bob Ross'},
  {id: 1, author: 'Chuck Norris'},
];

const platformVersion =
  Platform.OS === 'ios'
    ? parseInt(Platform.Version, 10)
    : Platform.Version;

const App = () => {
  return (
    <View style={styles.container}>
      <Feed style={styles.feed} />
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
});

export default App
