import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entry Screen - Awesome</Text>
      <View style={styles.textContainer}>
        <Text style={styles.largeText}>Typescript is great if you practice more</Text>
        <Text style={styles.mediumText}>React Native provides you a single codebase for cross platforms</Text>
        <Text style={styles.smallText}>ALX is awesome</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#90caf9",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  textContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: 20,
  },
  largeText: {
    fontSize: 30,
    color: "#f44336",
    marginBottom: 5,
    fontWeight: "700",
    fontVariant: ["small-caps"],
    textAlign: "center",
  },
  mediumText: {
    fontSize: 20,
    color: "#9c27b0",
    marginBottom: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  smallText: {
    fontSize: 15,
    color: "#2196f3",
    fontWeight: "400",
    textAlign: "center",
  },
});
