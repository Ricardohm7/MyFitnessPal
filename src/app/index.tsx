import { StyleSheet, View } from 'react-native';
import FoodListItem from '../components/FoodListItem';


export default function App() {
  return (
    <View style={styles.container}>
      <FoodListItem item={{ label: 'Pizza', cal: 75, brand: 'Dominos' }} />
      <FoodListItem item={{ label: 'Pizza', cal: 75, brand: 'Dominos' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    gap: 5
  },
});
