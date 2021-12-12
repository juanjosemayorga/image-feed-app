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
  commentsForItem: string[];
  onPressComments: (id: number) => void;
}

const keyExtractor = ({id}: { id: number }) => id.toString();

export const CardList = ({ items, commentsForItem, onPressComments}: CardListProps) => {

  const renderItem = ({ item: { id, author } }: { item: Item }) => {
    const comments = commentsForItem[id]

    return (
      <Card
        fullName={author}
        image={{
          uri: getImageFromId(id),
        }}
        linkText={`${comments ? comments.length : 0} Comments`}
        onPressLinkText={() => onPressComments(id)}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        extraData={commentsForItem}
      />
    </View>
  )
}
