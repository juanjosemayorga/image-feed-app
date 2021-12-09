import React from 'react'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { StyleSheet, View } from 'react-native'
import { Card } from './src/components/Card';
import { CardList } from './src/components/CardList';

const items = [
  {id: 0, author: 'Bob Ross'},
  {id: 1, author: 'Chuck Norris'},
];

const App = () => {
  return (
    <View style={styles.container}>
      <CardList items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#000',
    backgroundColor: '#F2F2F2',
    marginTop: getStatusBarHeight(true),
  },
});

export default App
