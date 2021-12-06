import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar } from './src/components/Avatar';

const App = () => {
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App
