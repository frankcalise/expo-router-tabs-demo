import { View, Text } from "react-native";

export default function Details({ navigation, route }) {
  const { itemId = 42, otherParam } = route.params || {};

  return (
    <View>
      <Text>itemId: {itemId}</Text>
      <Text>otherParam: {otherParam}</Text>
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          navigation.goBack();
        }}
      >
        Go Back
      </Text>
    </View>
  );
}
