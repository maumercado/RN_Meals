import { Text, View, StyleSheet } from 'react-native'

function List ({ data }) {
  return data.map(dataPoint =>
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText} key={dataPoint}>{dataPoint}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497'
  },
  itemText: {
    color: '#2b1e13',
    textAlign: 'center'
  }
})

export default List
