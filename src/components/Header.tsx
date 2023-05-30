import React from 'react'
import { ImageBackground, StyleSheet, Text } from 'react-native'
import ClickableImage from './ClickableImage'

interface HeaderProps {
  title: string
  onBackPress: () => void
  onSearchPress: () => void
}

const backIcon = require('../assets/Back.png')
const searchIcon = require('../assets/search.png')
const headerImage = require('../assets/nav_bar.png')

const handleBackPress = () => {
  //
}

const handleSearch = () => {
  //
}

const Header: React.FC<HeaderProps> = ({ title, onBackPress, onSearchPress }) => {
  return (
    <ImageBackground source={headerImage} style={styles.container}>
      <ClickableImage source={backIcon} onPress={handleBackPress} />
      <Text style={styles.title}>{title}</Text>
      <ClickableImage source={searchIcon} onPress={handleSearch} />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    width: '100%',
  },

  title: {
    color: 'white',
    fontSize: 18,
  },
  searchButton: {
    padding: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
})

export default Header
