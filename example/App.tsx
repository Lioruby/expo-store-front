import { StyleSheet, Text, View } from 'react-native';

import * as ExpoStoreFront from 'expo-store-front';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoStoreFront.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
