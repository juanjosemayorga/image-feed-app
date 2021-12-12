import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

import { CommentInput } from '../components/CommentInput'
import { CommentList } from '../components/CommentList'
import { NavigationBar } from '../components/NavigationBar'

interface CommentsProps {
  style: object | null;
  comments: string[];
  onClose: () => void;
  onSubmitComment: (comment: string) => void;
}

export const Comments = ({
  style = null,
  comments,
  onClose,
  onSubmitComment,
}: CommentsProps) => {
  return (
    <SafeAreaView style={style}>
      <NavigationBar
        title="Comments"
        leftText="Close"
        onPressLeftText={onClose}
      />
      <CommentInput placeholder="Leave a comment" onSubmit={onSubmitComment} />
      <CommentList items={comments} />
    </SafeAreaView>
  );
}
