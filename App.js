import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {MyComponent} from "./src/MyComponent";
import {AsyncSkia} from "./src/AsyncSkia";

export default function App() {
  return (
    <View style={{ backgroundColor: 'blue', flex: 1,}}>
      <AsyncSkia
        fallback={() => (
            <View style={{ height: 100, width: 100,}}>
              <ActivityIndicator />
              <Text>Fallback</Text>
            </View>
        )}
        getComponent={() => import('./src/MyComponent')}
      />
    </View>
  );
}
