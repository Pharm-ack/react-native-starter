import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
export default function Property() {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Property [id]</Text>
    </View>
  );
}
