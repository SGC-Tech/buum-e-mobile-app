import { Text, View } from "react-native";
import { Link } from "expo-router";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function Home() {
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Unistyles example</Text>
    </View>
  );
}
const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.primary,
  },
}));
