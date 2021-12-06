import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

interface AvatarProps {
  initials: string;
  size: number;
  backgroundColor: string;
}

export const Avatar = ({ size, initials, backgroundColor}: AvatarProps) => {

  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  }

  return (
    <View style={style}>
      
    </View>
  )
}

const styles = StyleSheet.create({

})