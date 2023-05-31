import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { getPoster } from '../utils'
import { customTextStyle } from './TextStyles'

interface GridItemProps {
  item: {
    name: string
    'poster-image': string
  }
}

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const GridItem: React.FC<GridItemProps> = ({ item }) => {
  return (
    <View style={styles.gridItem}>
      <View style={styles.item}>
        <Image source={getPoster(item['poster-image'])} style={styles.image} />
      </View>
      <Text style={customTextStyle}>{item.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 8,
  },
  item: {
    flex: 1,
    height: 180, // Adjust the item height as needed
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  image: {
    width: '100%', // Adjust the image width within the item
    height: '100%', // Adjust the image height within the item
    resizeMode: 'cover', // Use a specific resize mode as needed
  },
})

export default GridItem
