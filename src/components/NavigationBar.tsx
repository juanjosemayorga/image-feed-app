import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface NavigationBarProps {
  title?: string,
  leftText?: string,
  onPressLeftText?: () => void,
}

export const NavigationBar = ({
  title = '',
  leftText = '',
  onPressLeftText = () => { /* This is an intentional empty function */ },
}: NavigationBarProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftText} onPress={onPressLeftText}>
        <Text style={styles.letfText}>{leftText}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    color: '#000',
  },
  leftText: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    color: '#000',
  },
  letfText: {
    color: '#000',
  }
});
