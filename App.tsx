import React from 'react'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from './src/components/Avatar';

const App = () => {

  console.log('This is the height: ', getStatusBarHeight());

  return (
    <View style={styles.container}>
      <Avatar initials={'FL'} size={35} backgroundColor={'teal'} />
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
