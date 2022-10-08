import { Stack, useLink } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";

export default function Welcome({ route }) {
  // const { test = 5 } = route.params;
  // console.log({ test });
  const link = useLink();
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <Text>Welcome!</Text>
      <Text>
        We've rebuilt our app to make it easier to view the schedule, explore
        the city, and access need-to-know details!
      </Text>
      <TouchableOpacity
        style={{ color: "white", backgroundColor: "purple" }}
        onPress={() => link.push("/tabs")}
      >
        <Text>I'm ready</Text>
      </TouchableOpacity>
    </View>
  );
}
