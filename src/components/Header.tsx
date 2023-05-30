import React from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import { pxToDp } from '../utils'
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

const headerHeight = () => pxToDp(192 - 36)

const Header: React.FC<HeaderProps> = ({ title, onBackPress, onSearchPress }) => {
  return (
    <ImageBackground source={headerImage} style={styles.header}>
      <View style={styles.container}>
        <ClickableImage source={backIcon} onPress={onBackPress} />
        <AppText style={styles.title}>{title}</AppText>
        <ClickableImage source={searchIcon} onPress={onSearchPress} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {
    height: headerHeight(),
    width: '100%',
  },
  container: {
    paddingHorizontal: pxToDp(30),
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
  searchButton: {
    padding: 8,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
})

export default Header
