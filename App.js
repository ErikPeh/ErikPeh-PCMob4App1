import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import react from "react";
import { useState, useEffect } from "react";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function App() {
  const [loading, setloading] = useState(true);
  const BUSSTOP_URL = "https://arrivelah2.busrouter.sg/?id=59261";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Arrival Time :</Text>
      <Text style={styles.arrivalTime}>
        {loading ? <ActivityIndicator size="large" color="red" /> : "Loaded"}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Refresh !</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "lightgreen",
    margin: 60,
    padding: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
  },
  title: {
    color: "black",
    fontSize: 35,
    fontWeight: "bold",
  },
  arrivalTime: {
    color: "black",
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    paddingTop: 30,
  },
});
