import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LostRoute() {
  return (
    <SafeAreaView>
      <Link href="/welcome">Unmatched route! Go to welcome &gt;</Link>
      <Link href="/tabs/schedule/details">Straight to Details</Link>
    </SafeAreaView>
  );
}
