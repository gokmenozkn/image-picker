import { View, Text } from 'react-native';

export default function EmojiSticker({ pickedEmoji }) {
  return (
    <View style={{ top: -350 }}>
      <Text style={{ fontSize: 30 }}>{pickedEmoji}</Text>
    </View>
  );
}
