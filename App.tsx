import React from 'react'
import {getStatusBarHeight} from 'react-native-status-bar-height';
import { StyleSheet, View } from 'react-native'
import { Card } from './src/components/Card';

const App = () => {
  return (
    <View style={styles.container}>
      <Card
        fullName={'Juan Jose Mayorga'}
        linkText={'Comments'}
        onPressLinkText={() => console.log('Pressed link!')}
        image={{ uri: 'https://unsplash.it/600/600' }}
      />
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
