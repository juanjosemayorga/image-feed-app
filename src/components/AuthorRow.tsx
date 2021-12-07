import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { Avatar } from './Avatar'
import getAvatarColor from '../utils/getAvatarColor'
import getInitials from '../utils/getInitials'

interface AuthorRowProps {
  fullName: string;
  linkText: string;
  onPressLinkText: () => void;
}

export const AuthorRow = ({ fullName, linkText, onPressLinkText }: AuthorRowProps) => {
  return (
    <View style={styles.container}>
      <Avatar
        size={35}
        initials={getInitials(fullName)}
        backgroundColor={getAvatarColor(fullName)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {fullName}
      </Text>
      {/* ... */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    marginHorizontal: 6,
  },
});
