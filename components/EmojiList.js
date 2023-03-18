import { useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable, Text } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    '😐',
    '😍',
    '🚀',
    '👍',
    '💅',
    '😭',
    '✨',
    '🥂',
    '💕',
    '💞',
    '💓',
    '💔',
    '🤍',
    '💘',
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}
          >
            <Text style={styles.emoji} key={index}>
              {emoji[index]}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  emoji: {
    marginRight: 20,
    fontSize: 30,
  },
});
