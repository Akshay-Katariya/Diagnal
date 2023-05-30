import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import GridItem from '../components/GridItem'
import SearchInput from '../components/SearchInput'

const HomeScreen = () => {
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    //call API or get from JSON
  }

  const handleSearch = () => {
    // Implement search functionality based on the searchQuery state
  }

  const renderGridItem = ({ item }) => {
    return <GridItem item={item} />
  }

  return (
    <View style={styles.container}>
      <SearchInput value={searchQuery} onChangeText={setSearchQuery} onSubmitEditing={handleSearch} />
      <FlatList data={data} renderItem={renderGridItem} keyExtractor={(item) => item.id} numColumns={3} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
})

export default HomeScreen
