import React from 'react'
import { FlatList, View } from 'react-native'

import { getImageFromId } from '../utils/api';
import { Card } from './Card';

interface Item {
  id: number;
  author: string;
}

interface CardListProps {
  items: Item[];
}

const keyExtractor = ({id}: { id: number }) => id.toString();

export const CardList = ({ items }: CardListProps) => {

  const renderItem = ({ item: { id, author } }: { item: Item }) => {
    return (
      <Card
        fullName={author}
        image={{
          uri: getImageFromId(id)
        }}
      />
    )
  }

  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}
