import * as ExpoStoreFront from "expo-store-front";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [countryCode, setCountryCode] = useState<string | null>(null);

  const getCountryCode = async () => {
    const countryCode = await ExpoStoreFront.getAppStoreProvenanceCountryCode();
    setCountryCode(countryCode);
  };

  useEffect(() => {
    getCountryCode();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{countryCode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
  },
});
