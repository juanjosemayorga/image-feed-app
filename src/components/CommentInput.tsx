import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

interface CommentInputProps {
  onSubmit: (value: string) => void;
  placeholder: string;
}

const initialState = {
  text: '',
}

export const CommentInput = ({
  onSubmit,
  placeholder = '',
}: CommentInputProps) => {

  const [{ text }, setState] = useState(initialState)

  const handleChangeText = (value: string) => {
    setState({ text: value })
  }

  const handleSubmitEditing = () => {
    if (!text) return;

    onSubmit(text)
    setState(initialState)
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        underlineColorAndroid="transparent"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingHorizontal: 20,
    height: 60,
  },
  input: {
    flex: 1,
  },
});