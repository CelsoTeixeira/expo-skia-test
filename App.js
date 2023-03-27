import 'react-native-gesture-handler';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: 'blue', flex: 1,}}>
        <Text>
            Default
        </Text>
        <ActivityIndicator />
    </View>
  );
}
