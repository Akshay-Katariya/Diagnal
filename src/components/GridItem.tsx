import HighlightText from '@sanar/react-native-highlight-text'
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { MIN_SEARCH_LIMIT, getPoster } from '../utils'
import { customTextStyle } from './TextStyles'

interface GridItemProps {
  item: {
    name: string
    'poster-image': string
  }
  highlight: string
}

const GridItem: React.FC<GridItemProps> = ({ item, highlight }) => {
  const shouldHighlight = highlight.length >= MIN_SEARCH_LIMIT

  return (
    <View style={styles.gridItem}>
      <View style={styles.item}>
        <Image source={getPoster(item['poster-image'])} style={styles.image} />
      </View>
      <HighlightText
        numberOfLines={1}
        style={customTextStyle}
        highlightStyle={[shouldHighlight && styles.highlight]}
        searchWords={[highlight]}
        textToHighlight={item.name}
      />
      {/* <Text style={customTextStyle}>{item.name}</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 10,
  },
  item: {
    flex: 1,
    height: 180, // Adjust the item height as needed
    justifyContent: 'center',
  },
  image: {
    width: '100%', // Adjust the image width within the item
    height: '100%', // Adjust the image height within the item
    resizeMode: 'cover', // Use a specific resize mode as needed
  },
  highlight: {
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
  },
})

export default GridItem
