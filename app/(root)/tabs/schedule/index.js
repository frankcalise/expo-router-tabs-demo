import { Text, View } from "react-native";
import { Link } from "expo-router";

const $talkContainer = {
  flexDirection: "row",
  justifyContent: "space-between",
  padding: 10,
};

export default function Schedule({ route }) {
  // console.log({ route });
  const { day = "tuesday" } = route.params || {};

  return (
    <View>
      <Text>Viewing day: {day || "und"}</Text>

      <View style={$talkContainer}>
        <View>
          <Text>Talk 1</Text>
        </View>
        <View>
          {/*
           * results in:
           * The href must start with '/' (details) or be a fully qualified URL
           */}
          <Link href="details">Go to Details via /details (doesn't work)</Link>
        </View>
      </View>

      <View style={$talkContainer}>
        <View>
          <Text>Talk 2</Text>
        </View>
        <View>
          {/*
           * results in:
           * The href must start with '/' (details) or be a fully qualified URL
           */}
          <Link
            href={{
              screen: "details",
              params: { itemId: 100, otherParam: "some other data" },
            }}
          >
            Go to Details via href screen: "details" (doesn't work)
          </Link>
        </View>
      </View>

      <View style={$talkContainer}>
        <View>
          <Text>Talk 3</Text>
        </View>
        <View>
          {/* this link properly goes to details within the Schedule stack */}
          <Link href="/tabs/schedule/details">
            Go to Details via /tabs/schedule/details
          </Link>
        </View>
      </View>

      {/* TODO: add the button container for Tues/Weds/Thurs */}
    </View>
  );
}
