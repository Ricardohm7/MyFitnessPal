import { FlatList, StyleSheet, View, TextInput, Text, Button, ActivityIndicator } from 'react-native';
import FoodListItem from '../components/FoodListItem';
import { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const query = gql`
  query search($ingr: String) {
    search(ingr: $ingr) {
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const [runSearch, { data, loading, error }] = useLazyQuery(query, {
    variables: { ingr: 'Pizza' }
  });

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
  }

  if (error) {
    return <Text>Failed to search</Text>
  }

  console.log(JSON.stringify(data, null, 2));
  const items = data?.search?.hints || []

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setSearch}
        value={search}
        placeholder='Search...'
        style={styles.input}
      />
      {search ? <Button title='Search' onPress={performSearch} /> : null}
      {loading && <ActivityIndicator />}
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodListItem item={item} />}
        ListEmptyComponent={() => <Text>Search a food</Text>}
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
