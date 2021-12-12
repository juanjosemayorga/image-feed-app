import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

interface CommentListProps {
  items: string[],
}

export const CommentList = ({ items }: CommentListProps) => {

  const renderItem = (item: string, index: number) => {
    return (
      <View key={index} style={styles.comment}>
        <Text style={styles.text}>{item}</Text>
      </View>
    )
  }

  return (
    <ScrollView>
      {items.map(renderItem)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  comment: {
    marginLeft: 20,
    paddingVertical: 20,
    paddingRight: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.05)',
  },
  text: {
    color: '#000',
  }
});
