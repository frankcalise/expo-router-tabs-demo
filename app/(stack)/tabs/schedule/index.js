import { Text, View } from "react-native";
import { Link } from "expo-router";

const $talkContainer = {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 10,
};

export default function ScheduleDay({ route }) {
  console.log({ route });
  const { day = "tuesday" } = route.params || {};

  return (
    <View>
      <Text>Viewing day: {day || "und"}</Text>

      <View style={$talkContainer}>
        <View>
          <Text>Talk 1</Text>
        </View>
        <View>
          <Link
            href={{
              screen: "/details",
              params: { itemId: 86, otherParam: "anything you want here" },
            }}
          >
            Go to Details
          </Link>
        </View>
      </View>

      <View style={$talkContainer}>
        <View>
          <Text>Talk 2</Text>
        </View>
        <View>
          <Link
            href={{
              screen: "/details",
              params: { itemId: 100, otherParam: "some other data" },
            }}
          >
            Go to Details
          </Link>
        </View>
      </View>

      {/* TODO: add the button container for Tues/Weds/Thurs */}
    </View>
  );
}
