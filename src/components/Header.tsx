import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import AppText from './AppText'
import ClickableImage from './ClickableImage'

interface HeaderProps {
  title: string
  onBackPress: () => void
  onSearchPress: () => void
}

const backIcon = require('../assets/Back.png')
const searchIcon = require('../assets/search.png')
const headerImage = require('../assets/nav_bar.png')

const headerHeight = () => 80

const Header: React.FC<HeaderProps> = ({ title, onBackPress, onSearchPress }) => {
  return (
    <ImageBackground testID="header" source={headerImage} style={styles.header}>
      <View style={styles.container}>
        <ClickableImage testID="go-back" source={backIcon} onPress={onBackPress} />
        <AppText style={styles.title}>{title}</AppText>
        <ClickableImage testID="toggle-search-button" source={searchIcon} onPress={onSearchPress} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    zIndex: 1,
    height: headerHeight(),
    width: '100%',
    resizeMode: 'center',
  },
  container: {
    marginTop: 10,
    paddingHorizontal: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontSize: 24,
    alignSelf: 'center',
    marginLeft: 8,
    flex: 1,
  },
})

export default Header
