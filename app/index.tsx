import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}></Text>
          <Text style={styles.codetText}></Text>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 12,
  },
  innerContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 12,
    marginBottom: 12,
    padding: 8,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  codetText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "green",
    marginTop: 4,
  },
  noText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "red",
  },
});
