import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import GridItem from '../components/GridItem'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import { pxToDp } from '../utils'

const API_URL = 'https://www.jsonkeeper.com/b/CJI9'

const HomeScreen = () => {
  const [data, setData] = useState([])
  const [title, setTitle] = useState('')
  const [isSearchVisible, setSearchVisible] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [filteredData, setFilteredData] = useState([])
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
    setFilteredData(content)
  }

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible)
  }

  const handleBack = () => {
    // Clear search data
  }

  const performSearch = (text: string) => {
    const filteredItems = data.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()))
    setFilteredData(filteredItems)
    setSearchText(text)
  }

  const renderGridItem = ({ item }) => {
    return <GridItem item={item} />
  }

  return (
    <View style={styles.container}>
      <Header title={title} onBackPress={handleBack} onSearchPress={toggleSearch} />
      {isSearchVisible && (
        <SearchInput value={searchText} onChangeText={performSearch} onSubmitEditing={toggleSearch} />
      )}

      <FlatList
        data={filteredData}
        renderItem={renderGridItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{}}
        contentContainerStyle={styles.contentContainerStyle}
        ListEmptyComponent={<Text style={styles.noDataText}>{`No data available 🤷`}</Text>}
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
    paddingHorizontal: pxToDp(30), // Horizontal padding for equal spacing
    paddingTop: pxToDp(36), // Top padding for equal spacing
  },
  noDataText: {
    flex: 1,
    fontSize: 24,
    fontFamily: 'titilliumweb_regular',
    alignSelf: 'center',
    marginTop: 20,
  },
})

export default HomeScreen
