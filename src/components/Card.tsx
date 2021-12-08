import React, { useState } from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'

import { AuthorRow } from './AuthorRow'

type ImageType = {
  uri: string;
}

interface CardProps {
  fullName: string;
  image: ImageType;
  linkText: string;
  onPressLinkText: () => void;
}

const initialState = {
  loading: true
}

export const Card = ({
  fullName,
  image,
  linkText = '',
  onPressLinkText = () => {},
}: CardProps) => {

  const [{ loading }, setState] = useState(initialState)

  const handleLoad = () => {
    setState({ loading: false })
  }

  return (
    <View>
      <AuthorRow
        fullName={fullName}
        linkText={linkText}
        onPressLinkText={onPressLinkText}
      />
      <View style={styles.image}>
        {loading && (
          <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'} />
        )}
        <Image
          style={StyleSheet.absoluteFill}
          source={image}
          onLoad={handleLoad}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02)',
  }
})