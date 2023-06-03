import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import GridItem from '../components/GridItem'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import useDataFetching from '../hooks/useDataFetching'
import { pxToDp } from '../utils'

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, title, handleLoadMore } = useDataFetching([])
  const [showSearch, setShowSearch] = useState(false)
  const [hasSearchResults, setHasSearchResults] = useState(true)

  interface Content {
    name: string
    'poster-image': string
  }

  const toggleSearch = () => setShowSearch(!showSearch)
  const clearSearch = () => {}

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    const filteredData = data.filter((item: Content) => item.name.toLowerCase().includes(query.toLowerCase()))
    setHasSearchResults(filteredData.length > 0 || query === '')
  }

  const filteredData = data.filter((item: Content) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const renderListItem = ({ item }) => <GridItem item={item} />

  return (
    <View style={styles.container}>
      <Header title={title} onBackPress={clearSearch} onSearchPress={toggleSearch} />

      {showSearch && <SearchInput value={searchQuery} onChangeText={handleSearch} onSubmitEditing={toggleSearch} />}
      {!hasSearchResults && <Text style={styles.noDataText}>{`No search results found 🤷`}</Text>}

      <FlatList
        data={filteredData}
        renderItem={renderListItem}
        keyExtractor={(item, index) => `${item.name}_${index}`}
        numColumns={3}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.8}
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
    backgroundColor: 'black',
  },
  contentContainerStyle: {
    paddingVertical: pxToDp(16),
  },
  noDataText: {
    alignSelf: 'center',
    marginVertical: pxToDp(16),
    fontSize: 16,
  },
})

export default HomeScreen
