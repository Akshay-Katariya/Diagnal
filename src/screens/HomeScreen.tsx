import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import GridItem from '../components/GridItem'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import useDataFetching from '../hooks/useDataFetching'
import { MIN_SEARCH_LIMIT } from '../utils'

interface HomeScreenProps {
  testID?: string
}

const HomeScreen: React.FC<HomeScreenProps> = ({ testID }) => {
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

  // on back press app wont exit as it is single page application
  // Implemented clear search text and set textinput to initial state when back button is pressed
  const clearSearch = () => {
    setSearchQuery('')
    setShowSearch(false)
    setHasSearchResults(true)
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  // useEffect to perform search based on condition
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

  // render FlatList Grid
  const renderListItem = ({ item }) => <GridItem highlight={searchQuery} item={item} />

  return (
    <View testID={testID} style={styles.container}>
      <Header title={title} onBackPress={clearSearch} onSearchPress={toggleSearch} />
      {showSearch && <SearchInput value={searchQuery} onChangeText={handleSearch} onSubmitEditing={toggleSearch} />}
      {!hasSearchResults && <AppText style={styles.noDataText}>{`No search results found 🤷`}</AppText>}
      <FlatList
        data={filteredData}
        renderItem={renderListItem}
        keyExtractor={(item, index) => `${item.name}_${index}`}
        numColumns={3}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5} //we can set thrreshold to our need
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={{}}
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
