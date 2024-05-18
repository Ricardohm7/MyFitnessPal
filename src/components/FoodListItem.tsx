import { View, Text, StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons';


const FoodListItem = ({ item }) => {
  const { label, brand, nutrients } = item.food;
  return (
    <View
      style={styles.container}>
      <View style={{ flex: 1, gap: 5, }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{label}</Text>
        <Text style={{ color: 'dimgray', fontSize: 16 }}>{nutrients.ENERC_KCAL} {brand}</Text>
      </View>
      <AntDesign name="pluscircleo" size={24} color="royalblue" />
    </View>
  )
}

export default FoodListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gainsboro',
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})