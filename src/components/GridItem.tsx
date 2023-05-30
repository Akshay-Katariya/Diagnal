import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

interface GridItemProps {
  item: {
    id: string
    title: string
    image: string
  }
}

const GridItem: React.FC<GridItemProps> = ({ item }) => {
  return (
    <View style={styles.gridItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  title: {
    marginTop: 5,
    textAlign: 'center',
  },
})

export default GridItem
