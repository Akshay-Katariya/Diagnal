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
      placeholder="Search movie"
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
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginTop: 80,
    marginBottom: 10,
  },
})

export default SearchInput
