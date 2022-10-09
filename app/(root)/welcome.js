import { Stack, useLink, Link } from "expo-router";
import { View, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome({ route }) {
  // const { test = 5 } = route.params;
  // console.log({ test });
  const link = useLink();
  return (
    <SafeAreaView
      style={{
        alignItems: "center",
        justifyContent: "space-between",
        flex: 1,
        padding: 10,
      }}
    >
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
      <View>
        <Link href="/modal">Present modal</Link>
      </View>
    </SafeAreaView>
  );
}
