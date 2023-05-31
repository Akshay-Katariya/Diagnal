import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import GridItem from '../components/GridItem'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'

const API_URL = 'https://www.jsonkeeper.com/b/CJI9'

const HomeScreen = () => {
  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [title, setTitle] = useState('')
  const [isSearchVisible, setSearchVisible] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    //call API or get from JSON
    const pageData = await await fetch(API_URL)
    const jsonData = await pageData.json()
    const content = await jsonData.page['content-items'].content
    setTitle(jsonData.page.title)
    setData(content)
  }

  const handleSearch = () => {}

  const handleBack = () => {
    // Handle back
  }

  const renderGridItem = ({ item }) => {
    return <GridItem item={item} />
  }

  return (
    <View style={styles.container}>
      <Header title={title} onBackPress={handleBack} onSearchPress={handleSearch} />
      {isSearchVisible && (
        <SearchInput value={searchQuery} onChangeText={setSearchQuery} onSubmitEditing={handleSearch} />
      )}
      <FlatList
        data={data}
        renderItem={renderGridItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{}}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    justifyContent: 'space-between', // Equal spacing between rows
    paddingHorizontal: 10, // Horizontal padding for equal spacing
    paddingTop: 10, // Top padding for equal spacing
  },
})

export default HomeScreen
