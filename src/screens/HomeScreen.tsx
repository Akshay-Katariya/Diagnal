import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import GridItem from '../components/GridItem'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import useDataFetching from '../hooks/useDataFetching'
import { MIN_SEARCH_LIMIT } from '../utils'

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, title, handleLoadMore, page } = useDataFetching([])
  const [showSearch, setShowSearch] = useState(false)
  const [hasSearchResults, setHasSearchResults] = useState(true)
  const [filteredData, setFilteredData] = useState<Content[]>([])

  interface Content {
    name: string
    'poster-image': string
  }

  const toggleSearch = () => setShowSearch(!showSearch)

  const clearSearch = () => {
    setSearchQuery('')
    setShowSearch(false)
    setHasSearchResults(true)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  useEffect(() => {
    if (searchQuery.length >= MIN_SEARCH_LIMIT) {
      const filteredData = data.filter((item: Content) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setFilteredData(filteredData)
      setHasSearchResults(filteredData.length > 0)
    } else {
      setFilteredData(data)
      setHasSearchResults(true)
    }
  }, [data, searchQuery])

  const renderListItem = ({ item }) => <GridItem highlight={searchQuery} item={item} />

  const renderFooter = (): React.ReactElement | null => {
    return page < 3 ? <ActivityIndicator size="large" /> : null
  }

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
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{}}
        ListFooterComponent={renderFooter}
        contentContainerStyle={[showSearch ? { paddingTop: 0 } : styles.contentContainerStyle]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171616',
  },
  contentContainerStyle: {
    paddingTop: 60,
  },
  newContentContainerStyle: {
    paddingTop: 0,
  },
  noDataText: {
    alignSelf: 'center',
    marginVertical: 16,
    fontSize: 16,
  },
})

export default HomeScreen
