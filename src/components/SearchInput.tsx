import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface SearchInputProps {
  value: string
  onChangeText: (text: string) => void
  onSubmitEditing: () => void
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChangeText, onSubmitEditing }) => {
  return (
    <TextInput
      autoFocus
      style={styles.searchInput}
      placeholder="Search"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  )
}

const styles = StyleSheet.create({
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginBottom: 10,
  },
})

export default SearchInput
