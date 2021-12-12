import React, { useEffect, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text } from 'react-native'

import { CardList } from '../components/CardList'
import { fetchImages } from '../utils/api'

interface FeedPropTypes {
  style: object | null;
  commentsForItem: string[];
  onPressComments: (id: number) => void;
}

interface FeedState {
  loading: boolean,
  error: boolean,
  items: any[],
}

const initialState: FeedState = {
  loading: true,
  error: false,
  items: [],
}

export const Feed = ({
  style = null,
  commentsForItem,
  onPressComments
}: FeedPropTypes) => {

  const [{ loading, error, items }, setState] = useState(initialState)

  useEffect(() => {
    const getItems = async(): Promise<void> => {
      try {
        const data = await fetchImages()
        setState({
          loading: false,
          error: false,
          items: data,
        });
      } catch (err) {
        setState({
          loading: false,
          error: true,
          items: [],
        });
      }
    }

    getItems()

  }, [])

  if (loading) {
    return <ActivityIndicator size="large" />;
  }
  if (error) {
    return <Text>Error...</Text>;
  }

  return (
    <SafeAreaView style={style}>
      <CardList
        commentsForItem={commentsForItem}
        onPressComments={onPressComments}
        items={items} />
    </SafeAreaView>
  )
}
