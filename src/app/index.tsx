import { FlatList, StyleSheet, View, TextInput, Text, Button } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';

const foodItems = [
  { label: 'Pizza', cal: 75, brand: 'Dominos' },
  { label: 'Pizza', cal: 75, brand: 'Dominos' }
]

export default function App() {
  const [search, setSearch] = useState('');

  const performSearch = () => {
    console.warn("Searching for:", search);
    setSearch('')
  }
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setSearch}
        value={search}
        placeholder='Search...'
        style={styles.input}
      />
      {search ? <Button title='Search' onPress={performSearch} /> : null}
      <FlatList
        data={foodItems}
        renderItem={({ item }) => <FoodListItem item={item} />}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f8',
    justifyContent: 'center',
    gap: 10

  },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 5
  }
});
