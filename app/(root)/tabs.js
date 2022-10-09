import { Tabs } from "expo-router";

export default function Home() {
  return (
    <Tabs>
      <Tabs.Screen name="schedule" option={{ title: "Schedule" }} />
      <Tabs.Screen name="venue" option={{ title: "Venue" }} />
      <Tabs.Screen name="more" option={{ title: "More" }} />
      <Tabs.Screen name="help" option={{ title: "Help" }} />
    </Tabs>
  );
}
